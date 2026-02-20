"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import Link from "next/link";
import { AgentConfig } from "@/lib/types";

type UploadState = "idle" | "uploading" | "done";

interface UploadResult {
  succeeded: string[];
  failed: { filename: string; reason: string }[];
}

export default function UploadAgentsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>("idle");
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [result, setResult] = useState<UploadResult | null>(null);
  const [dragOver, setDragOver] = useState(false);

  async function processFiles(files: FileList | File[]) {
    const fileArray = Array.from(files).filter((f) => f.name.endsWith(".json"));
    if (!fileArray.length) return;

    setState("uploading");
    setProgress({ done: 0, total: fileArray.length });
    setResult(null);

    const succeeded: string[] = [];
    const failed: { filename: string; reason: string }[] = [];

    // Upload files concurrently in batches to avoid overwhelming the browser
    const BATCH_SIZE = 10;
    for (let i = 0; i < fileArray.length; i += BATCH_SIZE) {
      const batch = fileArray.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map(async (file) => {
          try {
            // Validate JSON and extract slug before uploading
            const text = await file.text();
            let agent: AgentConfig;
            try {
              agent = JSON.parse(text) as AgentConfig;
            } catch {
              throw new Error("Invalid JSON");
            }
            if (!agent.slug) throw new Error("Missing required 'slug' field");

            const blob = new Blob([text], { type: "application/json" });

            // Upload directly to Vercel Blob — bypasses the serverless body limit
            await upload(`agents/${agent.slug}.json`, blob, {
              access: "public",
              handleUploadUrl: "/api/blob/upload",
            });

            succeeded.push(agent.slug);
          } catch (err) {
            failed.push({
              filename: file.name,
              reason: (err as Error).message,
            });
          }
        })
      );

      setProgress((p) => ({ ...p, done: Math.min(i + BATCH_SIZE, fileArray.length) }));
    }

    setResult({ succeeded, failed });
    setState("done");
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) processFiles(e.target.files);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files);
  }

  function reset() {
    setState("idle");
    setResult(null);
    setProgress({ done: 0, total: 0 });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  const pct =
    progress.total > 0 ? Math.round((progress.done / progress.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">
            ← Back to gallery
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Upload Agents</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">
        {/* How it works */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 space-y-1">
          <p className="font-medium">How this works</p>
          <p>
            Files are uploaded <strong>directly to Vercel Blob storage</strong>{" "}
            from your browser — they never pass through the serverless function,
            so there is no body size limit. You can upload thousands of files at
            once.
          </p>
          <p>
            After uploading, trigger a new Vercel deployment so the static pages
            are regenerated from the updated agent list.
          </p>
        </div>

        {/* Drop zone */}
        {state === "idle" && (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-14 text-center cursor-pointer transition-colors ${
              dragOver
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          >
            <div className="text-4xl mb-3 text-gray-300">JSON</div>
            <p className="text-gray-700 font-medium">
              Drop agent JSON files here, or click to browse
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Select any number of <code>.json</code> files — all will be
              uploaded concurrently
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* Progress */}
        {state === "uploading" && (
          <div className="bg-white border rounded-xl p-8 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Uploading agents…</span>
              <span>
                {progress.done} / {progress.total}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 text-center">{pct}%</p>
          </div>
        )}

        {/* Results */}
        {state === "done" && result && (
          <div className="space-y-4">
            {/* Summary */}
            <div className="bg-white border rounded-xl p-6 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {result.succeeded.length}
                </div>
                <div className="text-sm text-gray-500 mt-1">uploaded</div>
              </div>
              {result.failed.length > 0 && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">
                    {result.failed.length}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">failed</div>
                </div>
              )}
            </div>

            {/* Errors */}
            {result.failed.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm font-medium text-red-700 mb-2">
                  Failed uploads
                </p>
                <ul className="space-y-1 text-sm text-red-600">
                  {result.failed.map((f, i) => (
                    <li key={i}>
                      <span className="font-mono">{f.filename}</span> — {f.reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.succeeded.length > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-medium text-green-700 mb-1">
                  Next step
                </p>
                <p className="text-sm text-green-700">
                  Trigger a new Vercel deployment (push a commit or redeploy from
                  the dashboard) to regenerate static pages for the{" "}
                  {result.succeeded.length} uploaded agent
                  {result.succeeded.length !== 1 ? "s" : ""}.
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={reset}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upload more files
              </button>
              <Link
                href="/"
                className="px-4 py-2 text-sm bg-white border text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to gallery
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
