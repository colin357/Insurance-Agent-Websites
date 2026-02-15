import { getAllAgentSlugs } from "@/lib/agents";
import Link from "next/link";

export default function HomePage() {
  const slugs = getAllAgentSlugs();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Insurance Agent Websites
        </h1>
        <p className="text-gray-600 mb-8">
          Agent sites deployed on this instance.
        </p>
        {slugs.length === 0 ? (
          <div className="bg-white rounded-lg border p-6 text-gray-500">
            No agents configured yet. Run{" "}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              npm run create-agent
            </code>{" "}
            to create one.
          </div>
        ) : (
          <ul className="space-y-3">
            {slugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="block bg-white rounded-lg border p-4 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <span className="text-blue-600 font-medium">{slug}</span>
                  <span className="text-gray-400 ml-2">→</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
