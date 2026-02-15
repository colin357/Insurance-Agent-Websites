import { notFound } from "next/navigation";
import { getAgent, getAllAgentSlugs } from "@/lib/agents";
import { getProduct, getAllProductSlugs } from "@/lib/products";
import { getTemplate } from "@/templates";

export async function generateStaticParams() {
  const agentSlugs = getAllAgentSlugs();
  const productSlugs = getAllProductSlugs();

  return agentSlugs.flatMap((agentSlug) =>
    productSlugs.map((product) => ({ agentSlug, product }))
  );
}

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
