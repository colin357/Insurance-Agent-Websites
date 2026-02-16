import fs from "fs";
import path from "path";
import { AgentConfig } from "./types";

const agentsDirectory = path.join(process.cwd(), "agents");

export function getAgent(slug: string): AgentConfig | null {
  const filePath = path.join(agentsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const agent = JSON.parse(raw) as AgentConfig;

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

export function getAllAgentSlugs(): string[] {
  if (!fs.existsSync(agentsDirectory)) return [];
  return fs
    .readdirSync(agentsDirectory)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
