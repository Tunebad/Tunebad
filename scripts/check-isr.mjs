// Build gate: the ISR windows the pages DECLARE must be the ones the build
// actually produced.
//
// Why this exists: in the App Router, the minimum fetch-level revalidate used
// during a render silently becomes the route's ISR window. That mechanism
// re-broke the July 15 billing fix once already — /song/[slug] declared
// `revalidate = false` while its Supabase reads carried `revalidate: 86_400`,
// so every one of ~163k song pages went back to regenerating per crawl
// (1.4M ISR writes/month was what originally paused the Vercel account).
// The declaration and the manifest agreed-looking code CAN disagree; only
// .next/prerender-manifest.json tells the truth, so assert on it after every
// build.
//
// Run after `next build`: node scripts/check-isr.mjs

import { readFileSync } from "node:fs";

const MANIFEST = ".next/prerender-manifest.json";

let manifest;
try {
  manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
} catch {
  console.error(`check-isr: cannot read ${MANIFEST} — run next build first`);
  process.exit(1);
}

const routes = manifest.routes ?? {};
const dynamicRoutes = manifest.dynamicRoutes ?? {};

// Since 2026-10 the policy is stricter than "song pages never expire": EVERY
// catalog page is frozen until the next deploy AND can only exist if it was
// built at deploy time (lib/server/catalog.ts explains why — crawlers walking
// on-demand pages cost 426K ISR writes against a 200K limit). So assert both
// halves: no catalog route carries a timed window, and no catalog dynamic
// route is allowed to generate pages on demand (fallback must be `false`,
// which is what `dynamicParams = false` compiles to).
const CATALOG = /^\/(song|artist|songs)(\/|$)|^\/$|^\/sitemaps\//;
const catalogRoutes = Object.keys(routes).filter((r) => CATALOG.test(r));
const songRoutes = catalogRoutes.filter((r) => r.startsWith("/song/"));

// CI builds without Supabase env prerender zero song pages — the check is
// then vacuous, which is fine: the real assertion runs on any full build
// (local or Vercel, where the env exists).
if (songRoutes.length === 0) {
  console.log("check-isr: no /song/* routes in manifest (no-DB build) — nothing to assert");
  process.exit(0);
}

const timed = catalogRoutes.filter((r) => routes[r].initialRevalidateSeconds !== false);
if (timed.length > 0) {
  const sample = timed[0];
  console.error(
    `check-isr: FAIL — ${timed.length}/${catalogRoutes.length} catalog routes have a numeric ` +
      `initialRevalidateSeconds (e.g. ${sample}: ${routes[sample].initialRevalidateSeconds}). ` +
      `A fetch in that render carries a revalidate window and is clamping the page's ` +
      `revalidate = false; catalog reads must use READ_IMMUTABLE (lib/server/link-analysis.ts).`,
  );
  process.exit(1);
}

const onDemand = Object.entries(dynamicRoutes)
  .filter(([route]) => CATALOG.test(route))
  .filter(([, info]) => info.fallback !== false)
  .map(([route]) => route);
if (onDemand.length > 0) {
  console.error(
    `check-isr: FAIL — catalog routes still generate pages on demand: ${onDemand.join(", ")}. ` +
      `Each must declare dynamicParams = false and build its full set in generateStaticParams, ` +
      `or every crawler request for an unbuilt URL becomes a render plus an ISR write.`,
  );
  process.exit(1);
}

console.log(
  `check-isr: OK — ${catalogRoutes.length} catalog routes frozen (${songRoutes.length} song pages), ` +
    `no catalog route generates on demand`,
);
