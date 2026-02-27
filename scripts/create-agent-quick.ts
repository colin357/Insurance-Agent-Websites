/**
 * Quick (non-interactive) agent creation script.
 *
 * Usage:
 *   npx tsx scripts/create-agent-quick.ts \
 *     --name "John Smith" \
 *     --template modern-glassmorphism \
 *     --phone "(555) 123-4567" \
 *     --email "john@example.com" \
 *     --license "TX-1234567" \
 *     --bio "Experienced insurance agent..." \
 *     --address "123 Main St" \
 *     --city "Dallas" \
 *     --state "TX" \
 *     [--slug "john-smith"] \
 *     [--photo "https://example.com/photo.jpg"] \
 *     [--gender "male"|"female"]
 */

import * as fs from "fs";
import * as path from "path";

function parseArgs(args: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith("--")) {
        result[key] = value;
        i++;
      }
    }
  }
  return result;
}

const args = parseArgs(process.argv.slice(2));

const required = ["name", "template", "phone", "email", "license", "bio", "address", "city", "state"];
const missing = required.filter((k) => !args[k]);
if (missing.length > 0) {
  console.error(`Missing required arguments: ${missing.map((m) => `--${m}`).join(", ")}`);
  process.exit(1);
}

const validTemplates = [
  "bold-professional",
  "warm-friendly",
  "clean-corporate-grid",
  "modern-glassmorphism",
  "bold-editorial",
  "local-friendly",
  "premium-minimal",
  "tech-forward",
  "split-screen-hero",
  "card-first-mosaic",
  "dark-mode-default",
  "classic-trust",
];
if (!validTemplates.includes(args.template)) {
  console.error(`Invalid template. Choose from: ${validTemplates.join(", ")}`);
  process.exit(1);
}

const slug = args.slug || args.name.toLowerCase().replace(/\s+/g, "-");
const genderArg = (args.gender || "").toLowerCase();
const gender = genderArg === "male" || genderArg === "female" ? genderArg : "";

const config = {
  slug,
  template: args.template,
  name: args.name,
  phone: args.phone,
  email: args.email,
  photo: args.photo || "",
  gender,
  licenseNumber: args.license,
  bio: args.bio,
  location: {
    city: args.city,
    state: args.state,
    address: args.address,
  },
};

const AGENTS_FILE = path.join(process.cwd(), "src", "data", "agents.json");

const existing = JSON.parse(fs.readFileSync(AGENTS_FILE, "utf-8"));
const duplicate = existing.findIndex((a: { slug: string }) => a.slug === slug);
if (duplicate !== -1) {
  existing[duplicate] = config;
  console.log(`Agent with slug "${slug}" already exists — updated.`);
} else {
  existing.push(config);
}
fs.writeFileSync(AGENTS_FILE, JSON.stringify(existing, null, 2) + "\n");

console.log(`Agent saved to: ${AGENTS_FILE}`);
console.log(`Site URL: /${slug}`);
