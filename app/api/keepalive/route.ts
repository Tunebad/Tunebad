import { NextRequest, NextResponse } from "next/server";

// Daily Vercel Cron target (see vercel.json) that keeps the Supabase project
// from being paused.
//
// Supabase pauses free-plan projects after about a week without activity, and
// a paused project's hostname stops resolving entirely. That happened in
// Aug-Oct 2026: every /song page 404'd for weeks and nobody noticed. It's also
// MORE likely now than before, not less: the song catalog is built at deploy
// time and served statically (lib/server/catalog.ts), so normal traffic barely
// touches the database at all. And if the project is paused when a deploy
// runs, the build silently prerenders zero song pages.
//
// The query is the cheapest one PostgREST has: a header-only exact count,
// no rows returned.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  // Vercel sends `Authorization: Bearer $CRON_SECRET` on cron invocations when
  // the env var is set. Anyone else gets a 401 and no database round-trip.
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ ok: false, error: "Supabase not configured." }, { status: 500 });

  try {
    const res = await fetch(`${url}/rest/v1/link_analysis?select=id&limit=1`, {
      headers: { apikey: key, Authorization: `Bearer ${key}`, Prefer: "count=exact", Range: "0-0" },
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const total = res.headers.get("content-range")?.split("/")[1] ?? null;
    // A non-2xx here is the early warning that the project is paused or
    // broken; it shows up as a failed cron run in the Vercel dashboard.
    return NextResponse.json({ ok: res.ok, status: res.status, rows: total }, { status: res.ok ? 200 : 502 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "unreachable" },
      { status: 502 },
    );
  }
}
