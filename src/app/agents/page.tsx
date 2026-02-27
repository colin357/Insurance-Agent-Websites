import { getAllAgents } from "@/lib/agents";
import { TemplateName } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Agents — Insurance Agent Websites",
  description:
    "Browse our network of licensed insurance agents ready to help you find the right coverage.",
};

const templateLabels: Record<TemplateName, string> = {
  "bold-professional": "Bold Professional",
  "warm-friendly": "Warm & Friendly",
  "clean-corporate-grid": "Clean Corporate Grid",
  "modern-glassmorphism": "Modern Glassmorphism",
  "bold-editorial": "Bold Editorial",
  "local-friendly": "Local Friendly",
  "premium-minimal": "Premium Minimal",
  "tech-forward": "Tech Forward",
  "split-screen-hero": "Split-Screen Hero",
  "card-first-mosaic": "Card-First Mosaic",
  "dark-mode-default": "Dark Mode Default",
  "classic-trust": "Classic Trust",
};

export default function AgentsPage() {
  const agents = getAllAgents();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
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
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Our Agents</h1>
          </div>
          <p className="text-gray-500">
            {agents.length} licensed insurance agent
            {agents.length !== 1 ? "s" : ""} ready to help you find the right
            coverage.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {agents.length === 0 ? (
          <div className="bg-white rounded-xl border p-10 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              No agents yet
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Add agents to{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                src/data/agents.json
              </code>{" "}
              to see them listed here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Link
                key={agent.slug}
                href={`/${agent.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Agent photo */}
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0">
                      {agent.photo ? (
                        <Image
                          src={agent.photo}
                          alt={agent.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
                          {agent.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </div>
                      )}
                    </div>

                    {/* Agent info */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </h2>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {agent.location.city}, {agent.location.state}
                      </p>
                      {agent.licenseNumber && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          License: {agent.licenseNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 mt-4 line-clamp-2">
                    {agent.bio}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-block text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      {templateLabels[agent.template]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                      View site
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
