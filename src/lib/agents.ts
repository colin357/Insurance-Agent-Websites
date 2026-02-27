import { AgentConfig } from "./types";
import agentsData from "@/data/agents.json";

const agents: AgentConfig[] = (agentsData as AgentConfig[]).map((agent) => {
  // Resolve placeholder photo from gender when no custom photo is set
  if (!agent.photo && agent.gender) {
    if (agent.gender === "male") {
      agent.photo = "/Male Insurance Agent.png";
    } else if (agent.gender === "female") {
      agent.photo = "/Female Insurance Agent.png";
    }
  }
  return agent;
});

export function getAgent(slug: string): AgentConfig | null {
  return agents.find((a) => a.slug === slug) ?? null;
}

export function getAllAgents(): AgentConfig[] {
  return agents;
}

export function getAllAgentSlugs(): string[] {
  return agents.map((a) => a.slug);
}
