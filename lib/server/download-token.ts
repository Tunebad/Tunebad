import { createHmac } from "node:crypto";

// Mints the per-job token the home bridge accepts on its public
// GET /dl/<jobId>/<token> route. Must stay byte-identical to downloadToken()
// in server/server.js: HMAC-SHA256 keyed with the bridge API key (the same
// secret as DOWNLOADER_HOME_KEY), over the bare upstream job UUID, hex-encoded.
//
// Why it exists: the file route used to stream every finished download
// bridge -> Vercel function -> browser, so each byte counted against Vercel's
// free Fast Origin Transfer AND Fast Data Transfer quotas. Redirecting the
// browser to the bridge with this token keeps file bytes off Vercel entirely.
export function bridgeDownloadToken(apiKey: string, upstreamJobId: string): string {
  return createHmac("sha256", apiKey).update(upstreamJobId).digest("hex");
}
