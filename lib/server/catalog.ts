// The PUBLISHED song catalog: the fixed set of songs that get a public
// /song/<slug> page, appear in the sitemap, and can be linked to from
// anywhere on the site (hubs, artist pages, similar songs, search, playlist
// results).
//
// Why a fixed set at all: on Vercel Hobby, every song page that isn't built at
// deploy time costs a function render plus an ISR write the first time anyone
// requests it — and "anyone" is overwhelmingly crawlers. With an open-ended
// catalog (217k rows, 163k+ URLs already known to Google) that is unbounded:
// in Oct 2026 crawlers drove 426K ISR writes against a 200K monthly limit and
// 994K of 1M CDN requests, at ~22 req/min almost entirely on /song/*. The only
// shape that fits the free plan is: a finite set of pages, ALL built at deploy
// time, `dynamicParams = false` everywhere, and no link anywhere that points
// outside the set (a link to an unbuilt page is a 404 for users and wasted
// crawl budget for Google).
//
// Defined by creation time rather than a row count, because the rows are
// immutable and new songs always get a later `created_at` — so the set can
// never shift underneath a deploy, a count query is never needed at render
// time, and every reader filters with the same one-line predicate. Songs
// analyzed after the cutoff still work everywhere in the tools; they just
// don't get a public page.
//
// To grow the catalog: move the cutoff later, then re-check the build time
// (every published song is prerendered; ~2,000 pages took ~10 min of the
// 45-min Hobby build limit) and tests/catalog.test.ts.
// = the 2,000 oldest songs (verified 2026-10-15: exactly 2,000 rows <= this,
// and song #2,001 is at 20:29:29.238Z). They're the charting tracks the seeder
// started from, which is also where the search demand is.
export const PUBLISHED_CUTOFF = "2026-07-09T20:29:28.000Z";

/** PostgREST filter fragment restricting any query to the published set. */
export const PUBLISHED_FILTER = `created_at=lte.${encodeURIComponent(PUBLISHED_CUTOFF)}`;

const CUTOFF_MS = Date.parse(PUBLISHED_CUTOFF);

/** Whether a song row has (or will get, on the next deploy) a public page. */
export function isPublished(createdAt: string | null | undefined): boolean {
  if (!createdAt) return false;
  const t = Date.parse(createdAt);
  return Number.isFinite(t) && t <= CUTOFF_MS;
}
