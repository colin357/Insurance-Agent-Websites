import { notFound } from "next/navigation";
import { getAgent, getAllAgentSlugs } from "@/lib/agents";
import { getTemplate } from "@/templates";

export function generateStaticParams() {
  return getAllAgentSlugs().map((slug) => ({ agentSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agentSlug: string }>;
}) {
  const { agentSlug } = await params;
  const agent = getAgent(agentSlug);
  if (!agent) return { title: "Not Found" };
  return {
    title: `${agent.name} — Insurance Agent in ${agent.location.city}, ${agent.location.state}`,
    description: agent.bio,
  };
}

export default async function AgentLandingPage({
  params,
}: {
  params: Promise<{ agentSlug: string }>;
}) {
  const { agentSlug } = await params;
  const agent = getAgent(agentSlug);
  if (!agent) notFound();

  const template = getTemplate(agent.template);
  const LandingPage = template.LandingPage;

  return <LandingPage agent={agent} />;
}
