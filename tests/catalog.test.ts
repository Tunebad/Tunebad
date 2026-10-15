import assert from "node:assert/strict";
import test from "node:test";
import { isPublished, PUBLISHED_CUTOFF, PUBLISHED_FILTER } from "../lib/server/catalog";

// The published catalog is the free-plan safety boundary for song pages (see
// lib/server/catalog.ts): only songs inside it are built, linked, and listed in
// the sitemap. These pin the two properties everything else relies on.

test("the cutoff is a real, fixed instant", () => {
  assert.ok(Number.isFinite(Date.parse(PUBLISHED_CUTOFF)), `unparseable cutoff: ${PUBLISHED_CUTOFF}`);
  // Must be a literal, not "now": a moving cutoff would change which pages
  // exist between a build and the requests that follow it.
  assert.match(PUBLISHED_CUTOFF, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/);
});

test("the PostgREST filter and isPublished agree on the boundary", () => {
  assert.equal(PUBLISHED_FILTER, `created_at=lte.${encodeURIComponent(PUBLISHED_CUTOFF)}`);
  const t = Date.parse(PUBLISHED_CUTOFF);
  // lte: the cutoff instant itself is inside, one millisecond later is not.
  assert.equal(isPublished(new Date(t).toISOString()), true);
  assert.equal(isPublished(new Date(t - 86_400_000).toISOString()), true);
  assert.equal(isPublished(new Date(t + 1).toISOString()), false);
});

test("missing or garbage timestamps are never published", () => {
  assert.equal(isPublished(null), false);
  assert.equal(isPublished(undefined), false);
  assert.equal(isPublished(""), false);
  assert.equal(isPublished("not a date"), false);
});
