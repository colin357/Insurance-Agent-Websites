import fs from "fs";
import path from "path";
import { AgentConfig } from "./types";

const agentsDirectory = path.join(process.cwd(), "agents");

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

// --- Filesystem helpers (local dev / pre-seeded repo files) ---

function getSlugsFromFilesystem(): string[] {
  if (!fs.existsSync(agentsDirectory)) return [];
  return fs
    .readdirSync(agentsDirectory)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

function getAgentFromFilesystem(slug: string): AgentConfig | null {
  const filePath = path.join(agentsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return resolvePhoto(JSON.parse(raw) as AgentConfig);
}

// --- Vercel Blob helpers (production uploads) ---

async function getSlugsFromBlob(): Promise<string[]> {
  const { list } = await import("@vercel/blob");
  const slugs: string[] = [];
  let cursor: string | undefined;

  do {
    const result = await list({ prefix: "agents/", cursor, limit: 1000 });
    for (const blob of result.blobs) {
      const name = blob.pathname
        .replace(/^agents\//, "")
        .replace(/\.json$/, "");
      if (name) slugs.push(name);
    }
    cursor = result.hasMore ? result.cursor : undefined;
  } while (cursor);

  return slugs;
}

async function getAgentFromBlob(slug: string): Promise<AgentConfig | null> {
  try {
    const { head } = await import("@vercel/blob");
    const blob = await head(`agents/${slug}.json`);
    const response = await fetch(blob.url, { next: { revalidate: 3600 } });
    if (!response.ok) return null;
    const agent = (await response.json()) as AgentConfig;
    return resolvePhoto(agent);
  } catch {
    return null;
  }
}

// --- Public API (async, supports both backends) ---

const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

export async function getAllAgentSlugs(): Promise<string[]> {
  if (useBlob) {
    const [blobSlugs, fsSlugs] = await Promise.all([
      getSlugsFromBlob(),
      Promise.resolve(getSlugsFromFilesystem()),
    ]);
    // Merge: blob-uploaded agents take priority; also include repo-seeded ones
    const merged = new Set([...fsSlugs, ...blobSlugs]);
    return Array.from(merged);
  }
  return getSlugsFromFilesystem();
}

export async function getAgent(slug: string): Promise<AgentConfig | null> {
  if (useBlob) {
    // Try blob first (uploaded agents), fall back to filesystem (repo-seeded)
    const fromBlob = await getAgentFromBlob(slug);
    return fromBlob ?? getAgentFromFilesystem(slug);
  }
  return getAgentFromFilesystem(slug);
}

export async function getAllAgents(): Promise<AgentConfig[]> {
  const slugs = await getAllAgentSlugs();
  const agents = await Promise.all(slugs.map((s) => getAgent(s)));
  return agents.filter(Boolean) as AgentConfig[];
}
