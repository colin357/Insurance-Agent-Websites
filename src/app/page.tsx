import { getAllAgentSlugs, getAgent } from "@/lib/agents";
import { getAllTemplateNames } from "@/templates";
import { TemplateName } from "@/lib/types";
import Link from "next/link";

const templateMeta: Record<
  TemplateName,
  { label: string; description: string; vibe: string; colors: string }
> = {
  "bold-professional": {
    label: "Bold Professional",
    description: "Sleek corporate design with bold typography and dark backgrounds",
    vibe: "Corporate",
    colors: "from-gray-900 to-blue-900",
  },
  "warm-friendly": {
    label: "Warm & Friendly",
    description: "Welcoming traditional style with warm tones and serif fonts",
    vibe: "Welcoming",
    colors: "from-amber-600 to-orange-500",
  },
  "clean-corporate-grid": {
    label: "Clean Corporate Grid",
    description: "Crisp business layout with subtle borders and structured grids",
    vibe: "Business",
    colors: "from-slate-600 to-blue-600",
  },
  "modern-glassmorphism": {
    label: "Modern Glassmorphism",
    description: "Translucent glass panels over deep gradient backgrounds",
    vibe: "Modern",
    colors: "from-indigo-800 to-purple-900",
  },
  "bold-editorial": {
    label: "Bold Editorial",
    description: "Magazine-style layout with oversized headlines and diagonal dividers",
    vibe: "Editorial",
    colors: "from-rose-600 to-pink-700",
  },
  "local-friendly": {
    label: "Local Friendly",
    description: "Warm neighborhood feel with friendly colors and rounded shapes",
    vibe: "Neighborhood",
    colors: "from-emerald-600 to-amber-500",
  },
  "premium-minimal": {
    label: "Premium Minimal",
    description: "Luxury sparse design with monochrome palette and emerald accents",
    vibe: "Luxury",
    colors: "from-gray-800 to-emerald-800",
  },
  "tech-forward": {
    label: "Tech Forward",
    description: "SaaS-inspired design with gradient pills and feature grids",
    vibe: "Tech",
    colors: "from-violet-600 to-cyan-500",
  },
  "split-screen-hero": {
    label: "Split-Screen Hero",
    description: "Bold sidebar layout with persistent CTA and anchor navigation",
    vibe: "Dynamic",
    colors: "from-blue-700 to-indigo-800",
  },
  "card-first-mosaic": {
    label: "Card-First Mosaic",
    description: "Pinterest-style masonry grid with colorful accent borders",
    vibe: "Mosaic",
    colors: "from-blue-500 via-purple-500 to-amber-500",
  },
  "dark-mode-default": {
    label: "Dark Mode Default",
    description: "High contrast dark theme with cyan neon accents and floating nav",
    vibe: "Dark",
    colors: "from-zinc-900 to-cyan-900",
  },
  "classic-trust": {
    label: "Classic Trust",
    description: "Traditional finance aesthetic with navy/gold and trust badges",
    vibe: "Traditional",
    colors: "from-blue-950 to-amber-700",
  },
};

export default function HomePage() {
  const slugs = getAllAgentSlugs();
  const templateNames = getAllTemplateNames();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Insurance Agent Websites
          </h1>
          <p className="text-gray-500 mt-1">
            {templateNames.length} templates &middot; {slugs.length} agent
            {slugs.length !== 1 ? "s" : ""} deployed
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-14">
        {/* Template Gallery */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {templateNames.map((name) => {
              const meta = templateMeta[name];
              return (
                <Link
                  key={name}
                  href={`/preview/${name}`}
                  className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
                >
                  {/* Color banner */}
                  <div
                    className={`h-28 bg-gradient-to-br ${meta.colors} relative`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 text-sm font-medium tracking-wide bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                        {meta.vibe}
                      </span>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {meta.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {meta.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-600 font-medium mt-3 group-hover:gap-2 transition-all">
                      Preview
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Deployed Agents */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Deployed Agents
          </h2>
          {slugs.length === 0 ? (
            <div className="bg-white rounded-lg border p-6 text-gray-500">
              No agents configured yet. Run{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                npm run create-agent
              </code>{" "}
              to create one.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {slugs.map((slug) => {
                const agent = getAgent(slug);
                const meta = agent ? templateMeta[agent.template] : null;
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm shrink-0">
                        {agent
                          ? agent.name
                              .split(" ")
                              .map((w) => w[0])
                              .join("")
                          : slug[0].toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                          {agent?.name ?? slug}
                        </h3>
                        {agent && (
                          <p className="text-xs text-gray-400 truncate">
                            {agent.location.city}, {agent.location.state}
                          </p>
                        )}
                      </div>
                    </div>
                    {meta && (
                      <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {meta.label}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
