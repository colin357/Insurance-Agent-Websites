import fs from "fs";
import path from "path";
import { AgentConfig } from "./types";

const agentsDirectory = path.join(process.cwd(), "agents");
const LEADS_FILE = "leads_final.json";

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

function loadAllAgents(): AgentConfig[] {
  // Primary: agents/leads_final.json (JSON array of all agents)
  const leadsPath = path.join(agentsDirectory, LEADS_FILE);
  if (fs.existsSync(leadsPath)) {
    const data = JSON.parse(fs.readFileSync(leadsPath, "utf-8"));
    if (Array.isArray(data)) {
      return (data as AgentConfig[])
        .filter((a) => !!a.slug)
        .map(resolvePhoto);
    }
  }

  // Fallback: individual agents/*.json files
  if (!fs.existsSync(agentsDirectory)) return [];
  return fs
    .readdirSync(agentsDirectory)
    .filter((f) => f.endsWith(".json") && f !== LEADS_FILE)
    .map((f) =>
      resolvePhoto(
        JSON.parse(fs.readFileSync(path.join(agentsDirectory, f), "utf-8"))
      )
    )
    .filter((a) => !!a.slug);
}

export function getAllAgents(): AgentConfig[] {
  return loadAllAgents();
}

export function getAllAgentSlugs(): string[] {
  return loadAllAgents().map((a) => a.slug);
}

export function getAgent(slug: string): AgentConfig | null {
  return loadAllAgents().find((a) => a.slug === slug) ?? null;
}
