import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";

/**
 * This route handles the token exchange for Vercel Blob client-side uploads.
 * Files are uploaded directly from the browser to Vercel's CDN — they never
 * pass through the serverless function body, so the 4.5 MB request body limit
 * does not apply.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Only allow JSON files stored under the agents/ prefix
        if (!pathname.startsWith("agents/") || !pathname.endsWith(".json")) {
          throw new Error("Only agent JSON files (agents/*.json) are allowed");
        }
        return {
          allowedContentTypes: ["application/json"],
          // Individual agent JSON files are small; 1 MB is generous
          maximumSizeInBytes: 1 * 1024 * 1024,
        };
      },
      onUploadCompleted: async ({ blob }) => {
        // Called by Vercel after the upload finishes.
        // Trigger a revalidation here if you add on-demand ISR later.
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
