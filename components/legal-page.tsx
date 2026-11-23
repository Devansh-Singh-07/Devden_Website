import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/sections/footer";
import { SITE } from "@/lib/site";

/** Shared shell for Privacy, Terms, Guidelines and Support. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated = true,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="relative">
        <header className="relative overflow-hidden border-b border-line bg-bg-2 pb-14 pt-32">
          <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="wrap-narrow relative">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="h2 mt-4">{title}</h1>
            <div className="lede mt-5">{intro}</div>
            {updated && (
              <p className="mt-6 text-[0.875rem] text-fg-3">Last updated {SITE.legalUpdated}</p>
            )}
          </div>
        </header>
        <article className="wrap-narrow prose-legal pb-24 pt-6">{children}</article>
      </main>
      <Footer />
    </>
  );
}
