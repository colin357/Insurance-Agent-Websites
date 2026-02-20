import fs from "fs";
import path from "path";
import { AgentConfig } from "./types";

const agentsDirectory = path.join(process.cwd(), "agents");
const LEADS_FILE = "leads_final.json";
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

function resolvePhoto(agent: AgentConfig): AgentConfig {
  if (!agent.photo && agent.gender) {
    if (agent.gender === "male") {
      agent.photo = "/Male Insurance Agent.png";
    } else if (agent.gender === "female") {
      agent.photo = "/Female Insurance Agent.png";
    }
  }
  return agent;
}

// ── Single-file helpers (leads_final.json) ───────────────────────────────────

function readLeadsFromFilesystem(): AgentConfig[] | null {
  const p = path.join(agentsDirectory, LEADS_FILE);
  if (!fs.existsSync(p)) return null;
  const data = JSON.parse(fs.readFileSync(p, "utf-8"));
  if (!Array.isArray(data)) return null;
  return (data as AgentConfig[]).map(resolvePhoto);
}

async function readLeadsFromBlob(): Promise<AgentConfig[] | null> {
  try {
    const { head } = await import("@vercel/blob");
    const blob = await head(`agents/${LEADS_FILE}`);
    const res = await fetch(blob.url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    return (data as AgentConfig[]).map(resolvePhoto);
  } catch {
    return null;
  }
}

// ── Individual-file helpers (legacy fallback) ────────────────────────────────

function readAllFromFilesystem(): AgentConfig[] {
  if (!fs.existsSync(agentsDirectory)) return [];
  return fs
    .readdirSync(agentsDirectory)
    .filter((f) => f.endsWith(".json") && f !== LEADS_FILE)
    .map((f) =>
      resolvePhoto(
        JSON.parse(fs.readFileSync(path.join(agentsDirectory, f), "utf-8"))
      )
    );
}

function readOneFromFilesystem(slug: string): AgentConfig | null {
  const p = path.join(agentsDirectory, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  return resolvePhoto(JSON.parse(fs.readFileSync(p, "utf-8")));
}

async function readOneFromBlob(slug: string): Promise<AgentConfig | null> {
  try {
    const { head } = await import("@vercel/blob");
    const blob = await head(`agents/${slug}.json`);
    const res = await fetch(blob.url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return resolvePhoto(await res.json());
  } catch {
    return null;
  }
}

async function readAllFromBlobIndividual(): Promise<AgentConfig[]> {
  const { list } = await import("@vercel/blob");
  const slugs: string[] = [];
  let cursor: string | undefined;
  do {
    const r = await list({ prefix: "agents/", cursor, limit: 1000 });
    for (const blob of r.blobs) {
      if (blob.pathname.endsWith(LEADS_FILE)) continue;
      const slug = blob.pathname
        .replace(/^agents\//, "")
        .replace(/\.json$/, "");
      if (slug) slugs.push(slug);
    }
    cursor = r.hasMore ? r.cursor : undefined;
  } while (cursor);

  const agents = await Promise.all(slugs.map(readOneFromBlob));
  return agents.filter(Boolean) as AgentConfig[];
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Priority order:
 *   1. agents/leads_final.json from Vercel Blob  (if BLOB_READ_WRITE_TOKEN set)
 *   2. agents/leads_final.json from local filesystem
 *   3. Individual agents/*.json from Vercel Blob  (legacy fallback)
 *   4. Individual agents/*.json from local filesystem  (legacy fallback)
 */
async function loadRawAgents(): Promise<AgentConfig[]> {
  if (useBlob) {
    const leads = await readLeadsFromBlob();
    if (leads) return leads;
  }

  const leads = readLeadsFromFilesystem();
  if (leads) return leads;

  if (useBlob) {
    const [blobAgents, fsAgents] = await Promise.all([
      readAllFromBlobIndividual(),
      Promise.resolve(readAllFromFilesystem()),
    ]);
    const map = new Map<string, AgentConfig>();
    fsAgents.forEach((a) => map.set(a.slug, a));
    blobAgents.forEach((a) => map.set(a.slug, a)); // blob takes priority
    return Array.from(map.values());
  }

  return readAllFromFilesystem();
}

export async function getAllAgents(): Promise<AgentConfig[]> {
  const raw = await loadRawAgents();
  // Drop malformed entries that have no slug — these would generate broken routes
  return raw.filter((a) => !!a.slug);
}

export async function getAllAgentSlugs(): Promise<string[]> {
  return (await getAllAgents()).map((a) => a.slug);
}

export async function getAgent(slug: string): Promise<AgentConfig | null> {
  // Single-file path (most common)
  if (useBlob) {
    const leads = await readLeadsFromBlob();
    if (leads) return leads.find((a) => a.slug === slug) ?? null;
    const fromBlob = await readOneFromBlob(slug);
    if (fromBlob) return fromBlob;
  }

  const leads = readLeadsFromFilesystem();
  if (leads) return leads.find((a) => a.slug === slug) ?? null;

  return readOneFromFilesystem(slug);
}
