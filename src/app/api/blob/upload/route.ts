import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

/**
 * Token-exchange handler for Vercel Blob client-side uploads.
 * Files go directly from the browser to Vercel's CDN — they never pass
 * through this serverless function body, so the 4.5 MB request limit
 * does not apply to the uploaded content.
 *
 * Allowed paths:
 *   agents/leads_final.json  — single bulk file (up to 100 MB)
 *   agents/<slug>.json       — individual agent file (up to 1 MB)
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("agents/") || !pathname.endsWith(".json")) {
          throw new Error("Only agent JSON files (agents/*.json) are allowed");
        }
        const isLeadsFile = pathname === "agents/leads_final.json";
        return {
          allowedContentTypes: ["application/json"],
          maximumSizeInBytes: isLeadsFile
            ? 100 * 1024 * 1024 // 100 MB for the bulk leads file
            : 1 * 1024 * 1024, //   1 MB for individual agent files
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log("Agent blob uploaded:", blob.pathname);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
