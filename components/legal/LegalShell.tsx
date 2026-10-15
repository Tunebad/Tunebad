import type { ReactNode } from "react";
import Link from "next/link";

// The contact address published on every legal page. One constant so the
// privacy policy, terms, and copyright takedown process can never disagree
// about where to write.
export const CONTACT_EMAIL = "thetunebad@gmail.com";

// Shared chrome for the legal pages (/privacy, /terms, /copyright): brand
// header, the page body, and a footer linking all three. It used to be copied
// into each page, which is how /copyright and /privacy ended up as the only
// legal links anywhere — a third page would have meant a third copy to keep in
// sync.
export function LegalShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <header className="legal-topbar">
        <Link href="/" className="brand" aria-label="TuneBad, back to home">
          <span className="brand-logo-wrap">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcSet="/logo-dark-76.webp" />
              <img src="/logo-light-76.webp" alt="" width={34} height={34} className="brand-logo" />
            </picture>
          </span>
          <span className="brand-wordmark">TUNEBAD</span>
        </Link>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-brand">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcSet="/logo-dark-76.webp" />
              <img src="/logo-light-76.webp" alt="" width={24} height={24} className="site-footer-logo" loading="lazy" />
            </picture>
            <span className="site-footer-wordmark">TUNEBAD</span>
          </div>
          <p className="site-footer-copyright">
            © 2026 TuneBad · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> ·{" "}
            <a href="/copyright">Copyright</a> · <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
