// Routes gated by Vercel BotID (Basic mode — free on every plan; Deep Analysis
// is Pro-only, so this can never add a charge on Hobby).
//
// Imported by BOTH instrumentation-client.ts (which attaches the challenge
// headers to these requests) and the route handlers (which call checkBotId()).
// The two must agree exactly: checkBotId() on a route the client didn't list
// always reports a bot, because the browser never sent the challenge headers.
//
// Only the calls that cost real resources are listed. Each POST to
// /api/youtube starts a yt-dlp + ffmpeg job on the home Mac and streams the
// result out through its residential connection; a playlist POST fans out
// into one of those per track. The status/file GETs are left open — they need
// a job id, which is an unguessable UUID only the starting browser holds.
export const BOT_PROTECTED_ROUTES = [
  { path: "/api/youtube", method: "POST" },
  { path: "/api/youtube/playlist", method: "POST" },
] as const;
