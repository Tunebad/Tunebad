import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { I18nProvider } from "@/lib/i18n";
import { CopyrightBody } from "@/components/legal/CopyrightBody";

export const metadata: Metadata = {
  title: "Copyright Disclaimer",
  description:
    "The TuneBad Copyright Disclaimer: the terms that cover how you use TuneBad's analysis and conversion tools, and its policy on copyrighted material.",
  alternates: { canonical: "/copyright" },
  openGraph: { url: "/copyright", title: "Copyright Disclaimer" },
};

export default function CopyrightPage() {
  return (
    <LegalShell>
      {/* Wrapped in its own I18nProvider (this page lives outside TunebadApp).
          SSR renders English; the provider picks up the visitor's saved
          locale after hydration, same pattern as the homepage FAQ. */}
      <I18nProvider>
        <CopyrightBody />
      </I18nProvider>
    </LegalShell>
  );
}
