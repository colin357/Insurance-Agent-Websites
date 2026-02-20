"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";
import Link from "next/link";
import { AgentConfig } from "@/lib/types";

type UploadState = "idle" | "uploading" | "done";

interface UploadResult {
  mode: "leads-file" | "individual";
  agentCount: number;
  failed: { filename: string; reason: string }[];
}

const LEADS_FILENAME = "leads_final.json";

export default function UploadAgentsPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<UploadState>("idle");
  const [progressLabel, setProgressLabel] = useState("");
  const [result, setResult] = useState<UploadResult | null>(null);
  const [dragOver, setDragOver] = useState(false);

  async function processFiles(files: FileList | File[]) {
    const fileArray = Array.from(files).filter((f) => f.name.endsWith(".json"));
    if (!fileArray.length) return;

    setState("uploading");
    setResult(null);

    // ── Case 1: single leads_final.json bulk file ────────────────────────────
    const leadsFile = fileArray.find((f) => f.name === LEADS_FILENAME);
    if (leadsFile) {
      setProgressLabel("Uploading leads_final.json…");
      try {
        const text = await leadsFile.text();
        const data = JSON.parse(text);
        if (!Array.isArray(data)) throw new Error("Expected a JSON array");
        const agentCount = (data as AgentConfig[]).length;

        await upload(`agents/${LEADS_FILENAME}`, new Blob([text], { type: "application/json" }), {
          access: "public",
          handleUploadUrl: "/api/blob/upload",
        });

        setResult({ mode: "leads-file", agentCount, failed: [] });
      } catch (err) {
        setResult({
          mode: "leads-file",
          agentCount: 0,
          failed: [{ filename: LEADS_FILENAME, reason: (err as Error).message }],
        });
      }
      setState("done");
      return;
    }

    // ── Case 2: individual agent JSON files ──────────────────────────────────
    const failed: { filename: string; reason: string }[] = [];
    let succeeded = 0;

    const BATCH_SIZE = 10;
    for (let i = 0; i < fileArray.length; i += BATCH_SIZE) {
      const batch = fileArray.slice(i, i + BATCH_SIZE);
      setProgressLabel(
        `Uploading ${Math.min(i + BATCH_SIZE, fileArray.length)} / ${fileArray.length}…`
      );

      await Promise.all(
        batch.map(async (file) => {
          try {
            const text = await file.text();
            const agent = JSON.parse(text) as AgentConfig;
            if (!agent.slug) throw new Error("Missing required 'slug' field");

            await upload(
              `agents/${agent.slug}.json`,
              new Blob([text], { type: "application/json" }),
              { access: "public", handleUploadUrl: "/api/blob/upload" }
            );
            succeeded++;
          } catch (err) {
            failed.push({ filename: file.name, reason: (err as Error).message });
          }
        })
      );
    }

    setResult({ mode: "individual", agentCount: succeeded, failed });
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
    setProgressLabel("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

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
        {/* Info banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 space-y-2">
          <p className="font-medium">Two upload modes</p>
          <p>
            <strong>Bulk (recommended):</strong> drop a single{" "}
            <code className="bg-blue-100 px-1 rounded">leads_final.json</code>{" "}
            containing a JSON array of all agents — uploaded as one file, no
            size limit.
          </p>
          <p>
            <strong>Individual:</strong> drop multiple single-agent{" "}
            <code className="bg-blue-100 px-1 rounded">.json</code> files — each
            is uploaded directly to Vercel Blob, bypassing the serverless body
            limit.
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
            <div className="text-4xl mb-3 text-gray-300">{ }</div>
            <p className="text-gray-700 font-medium">
              Drop <code>leads_final.json</code> or individual agent files here
            </p>
            <p className="text-gray-400 text-sm mt-1">or click to browse</p>
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
          <div className="bg-white border rounded-xl p-8 text-center space-y-3">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-gray-600">{progressLabel}</p>
          </div>
        )}

        {/* Results */}
        {state === "done" && result && (
          <div className="space-y-4">
            {/* Summary */}
            <div className="bg-white border rounded-xl p-6 space-y-1">
              {result.failed.length === 0 ? (
                <p className="font-medium text-green-700">
                  {result.mode === "leads-file"
                    ? `leads_final.json uploaded — ${result.agentCount.toLocaleString()} agents`
                    : `${result.agentCount} agent file${result.agentCount !== 1 ? "s" : ""} uploaded`}
                </p>
              ) : (
                <p className="font-medium text-red-600">
                  Upload failed — see details below
                </p>
              )}
            </div>

            {/* Errors */}
            {result.failed.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm font-medium text-red-700 mb-2">Errors</p>
                <ul className="space-y-1 text-sm text-red-600">
                  {result.failed.map((f, i) => (
                    <li key={i}>
                      <span className="font-mono">{f.filename}</span> — {f.reason}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.agentCount > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-700">
                <p className="font-medium mb-1">Next step</p>
                <p>
                  Trigger a new Vercel deployment (push a commit or redeploy from
                  the dashboard) to regenerate static pages from the updated
                  agent data.
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={reset}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upload again
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
