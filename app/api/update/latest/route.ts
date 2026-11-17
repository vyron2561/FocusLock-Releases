import { NextResponse } from "next/server";
import { getLatestFocusLockRelease } from "@/lib/releases";

export const dynamic = "force-dynamic";

export async function GET() {
  const release = await getLatestFocusLockRelease();

  if (!release) {
    return NextResponse.json(
      { available: false, message: "No stable APK release is currently published." },
      { status: 404, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(
    {
      available: true,
      version: release.version,
      versionCode: release.versionCode,
      tagName: release.tagName,
      apkUrl: release.apk.url,
      fileName: release.apk.name,
      sizeBytes: release.apk.sizeBytes,
      sha256: release.apk.sha256,
      releaseNotes: release.notes,
      publishedAt: release.publishedAt,
      releaseUrl: release.pageUrl
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
