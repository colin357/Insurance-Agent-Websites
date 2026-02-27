import { notFound } from "next/navigation";
import { getAgent } from "@/lib/agents";
import { getProduct } from "@/lib/products";
import { getTemplate } from "@/templates";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agentSlug: string; product: string }>;
}) {
  const { agentSlug, product: productSlug } = await params;
  const agent = await getAgent(agentSlug);
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
  const agent = await getAgent(agentSlug);
  if (!agent) notFound();

  const product = getProduct(productSlug);
  if (!product) notFound();

  const template = getTemplate(agent.template);
  const ProductPageComponent = template.ProductPage;

  return <ProductPageComponent agent={agent} product={product} />;
}
