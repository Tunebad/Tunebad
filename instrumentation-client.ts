import { initBotId } from "botid/client/core";
import { BOT_PROTECTED_ROUTES } from "@/lib/bot-protection";

// Runs once in the browser before the app hydrates (Next 15.3+). BotID solves
// an invisible challenge and attaches its proof to requests matching these
// routes; real visitors never see anything.
initBotId({ protect: [...BOT_PROTECTED_ROUTES] });
