import { NextResponse } from "next/server";
import { getFocusLockReleases } from "@/lib/releases";

export const dynamic = "force-dynamic";

export async function GET() {
  const releases = await getFocusLockReleases();
  return NextResponse.json(
    { releases },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } }
  );
}
