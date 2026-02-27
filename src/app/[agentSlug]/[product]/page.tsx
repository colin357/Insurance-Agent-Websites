import { notFound } from "next/navigation";
import { getAgent } from "@/lib/agents";
import { getProduct } from "@/lib/products";
import { getTemplate } from "@/templates";

// Product pages are rendered on-demand and cached by Vercel (ISR).
// This avoids pre-building agents × products combinations, keeping
// the deployment well under Vercel's 75 MB size limit.
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agentSlug: string; product: string }>;
}) {
  const { agentSlug, product: productSlug } = await params;
  const agent = getAgent(agentSlug);
  const product = getProduct(productSlug);
  if (!agent || !product) return { title: "Not Found" };
  return {
    title: `${product.name} — ${agent.name} | ${agent.location.city}, ${agent.location.state}`,
    description: product.heroDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ agentSlug: string; product: string }>;
}) {
  const { agentSlug, product: productSlug } = await params;
  const agent = getAgent(agentSlug);
  if (!agent) notFound();

  const product = getProduct(productSlug);
  if (!product) notFound();

  const template = getTemplate(agent.template);
  const ProductPageComponent = template.ProductPage;

  return <ProductPageComponent agent={agent} product={product} />;
}
