// Server-only feature flags for the link downloader, which shells out to
// yt-dlp/ffmpeg and can't run in a serverless deployment (e.g. Vercel) unless
// proxied to a standalone remote downloader server (see server/). By default
// it's off so a production deploy is safe with zero configuration.
//
// IMPORTANT: this module reads server-only secrets and must never be
// imported from a client component — even importing a single export pulls
// the whole module (and its process.env.DOWNLOADER_* references) into the
// browser bundle. Client code needs the UI flag only: import
// `downloaderVisible` from "@/lib/runtime.client" instead.

// Remote downloader (server/) connection details — server-side only, never
// exposed to the client. When both are set, the /api/youtube* routes proxy to
// this server instead of shelling out to a local yt-dlp binary.
export const remoteDownloaderUrl = process.env.DOWNLOADER_REMOTE_URL || null;
export const remoteDownloaderKey = process.env.DOWNLOADER_API_KEY || null;

// Home downloader — a copy of the same server/ running on the user's Mac,
// reached through a tunnel URL. Preferred over the remote (Render) fallback
// because YouTube bot-walls the Render datacenter IP but not a home IP.
// Server-side only, same rules as the remote pair above.
export const homeDownloaderUrl = process.env.DOWNLOADER_HOME_URL || null;
export const homeDownloaderKey = process.env.DOWNLOADER_HOME_KEY || null;

// Whether the home bridge is usable. The KEY is the real requirement: the
// bridge's URL normally comes from the Edge Config `bridgeUrl` key (the tunnel
// URL rotates on every cloudflared restart, so it can't live in an env var),
// with DOWNLOADER_HOME_URL only a static override for local dev.
//
// Gating on `homeDownloaderUrl && homeDownloaderKey` instead silently killed
// the whole downloader after the 2026-07-31 account migration: the rebuilt
// Vercel project had the key and the Edge Config but no static URL, so every
// /api/youtube request returned 404 before the bridge was ever tried, for
// ~2.5 months, while the bridge itself sat healthy.
export const homeDownloaderConfigured = Boolean(
  homeDownloaderKey && (homeDownloaderUrl || process.env.EDGE_CONFIG),
);

// Server-side: gates the /api/youtube/* route handlers. True if the local
// yt-dlp path is explicitly enabled, OR a remote downloader is configured,
// OR a home downloader is configured.
export const isDownloaderEnabled =
  process.env.ENABLE_LINK_DOWNLOADER === "1" ||
  Boolean(remoteDownloaderUrl && remoteDownloaderKey) ||
  homeDownloaderConfigured;

export { downloaderVisible } from "./runtime.client";
