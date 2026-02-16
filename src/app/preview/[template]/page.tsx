import { notFound } from "next/navigation";
import { getTemplate, getAllTemplateNames } from "@/templates";
import { AgentConfig, TemplateName } from "@/lib/types";
import Link from "next/link";

const demoAgent: AgentConfig = {
  slug: "preview",
  template: "bold-professional",
  name: "Jane Cooper",
  phone: "(555) 123-4567",
  email: "jane@cooperinsurance.com",
  photo: "",
  licenseNumber: "CA-1234567",
  bio: "With over 15 years of experience in the insurance industry, I specialize in helping families and businesses find the perfect coverage. My mission is to make insurance simple, affordable, and personalized to your unique needs.",
  location: {
    city: "San Francisco",
    state: "CA",
    address: "123 Market Street, Suite 400",
  },
};

export async function generateStaticParams() {
  return getAllTemplateNames().map((template) => ({ template }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const label = template
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${label} — Template Preview`,
  };
}

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const allNames = getAllTemplateNames();

  if (!allNames.includes(template as TemplateName)) {
    notFound();
  }

  const templateName = template as TemplateName;
  const { LandingPage } = getTemplate(templateName);
  const agent: AgentConfig = { ...demoAgent, template: templateName };

  return (
    <div>
      {/* Floating back-to-gallery bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 flex items-center justify-between text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Gallery
        </Link>
        <span className="text-gray-400">
          Template:{" "}
          <span className="text-white font-medium">
            {templateName
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </span>
        </span>
      </div>
      <div className="pt-10">
        <LandingPage agent={agent} />
      </div>
    </div>
  );
}
