import fs from "fs";
import path from "path";
import { AgentConfig } from "./types";

const agentsDirectory = path.join(process.cwd(), "agents");

export function getAgent(slug: string): AgentConfig | null {
  const filePath = path.join(agentsDirectory, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as AgentConfig;
}

export function getAllAgentSlugs(): string[] {
  if (!fs.existsSync(agentsDirectory)) return [];
  return fs
    .readdirSync(agentsDirectory)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
