import { list } from "@vercel/blob";
import { AgentConfig } from "./types";

const AGENTS_PREFIX = "agents/";

export async function getAgent(slug: string): Promise<AgentConfig | null> {
  const { blobs } = await list({
    prefix: `${AGENTS_PREFIX}${slug}.json`,
    limit: 1,
  });

  if (blobs.length === 0) return null;

  const response = await fetch(blobs[0].url);
  if (!response.ok) return null;

  const agent = (await response.json()) as AgentConfig;

  // Resolve placeholder photo from gender when no custom photo is set
  if (!agent.photo && agent.gender) {
    if (agent.gender === "male") {
      agent.photo = "/Male Insurance Agent.png";
    } else if (agent.gender === "female") {
      agent.photo = "/Female Insurance Agent.png";
    }
  }

  return agent;
}

export async function getAllAgentSlugs(): Promise<string[]> {
  const { blobs } = await list({ prefix: AGENTS_PREFIX });
  return blobs
    .filter((blob) => blob.pathname.endsWith(".json"))
    .map((blob) =>
      blob.pathname.slice(AGENTS_PREFIX.length).replace(".json", "")
    );
}
