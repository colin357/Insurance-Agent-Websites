import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

const TEMPLATES = [
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
] as const;

async function main() {
  console.log("\n🏗️  Create New Insurance Agent Website\n");
  console.log("─".repeat(45) + "\n");

  const name = await ask("Agent full name: ");
  const slug =
    (await ask(
      `URL slug (default: ${name.toLowerCase().replace(/\s+/g, "-")}): `
    )) || name.toLowerCase().replace(/\s+/g, "-");

  console.log("\nAvailable templates:");
  TEMPLATES.forEach((t, i) => console.log(`  ${i + 1}. ${t}`));
  const templateChoice = await ask(`\nTemplate number (1-${TEMPLATES.length}): `);
  const template = TEMPLATES[parseInt(templateChoice) - 1] || TEMPLATES[0];

  const phone = await ask("Phone number: ");
  const email = await ask("Email: ");
  const licenseNumber = await ask("License number: ");
  const bio = await ask("Short bio (1-2 sentences): ");
  const address = await ask("Street address: ");
  const city = await ask("City: ");
  const state = await ask("State (e.g., TX): ");
  const genderInput = (
    await ask("Gender for placeholder photo (male/female, or leave blank): ")
  ).toLowerCase();
  const gender =
    genderInput === "male" || genderInput === "female" ? genderInput : "";
  const photo = (await ask("Photo URL (or leave blank for placeholder): ")) || "";

  const config = {
    slug,
    template,
    name,
    phone,
    email,
    photo,
    gender,
    licenseNumber,
    bio,
    location: { city, state, address },
  };

  const agentsDir = path.join(process.cwd(), "agents");
  if (!fs.existsSync(agentsDir)) {
    fs.mkdirSync(agentsDir, { recursive: true });
  }

  const filePath = path.join(agentsDir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2) + "\n");

  console.log(`\n✅ Agent created: ${filePath}`);
  console.log(`🌐 Site will be available at: /${slug}`);
  console.log(`📄 Template: ${template}\n`);

  rl.close();
}

main().catch(console.error);
