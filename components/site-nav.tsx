"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/logo";
import { CloseGlyph, MenuGlyph, AppleGlyph, ArrowRight } from "@/components/icons";

const links = [
  { label: "Features", href: "#features" },
  { label: "Communities", href: "#communities" },
  { label: "Interviews", href: "#interviews" },
  { label: "About", href: "#about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
        <nav
          aria-label="Primary"
          className="wrap flex h-[68px] items-center justify-between gap-6"
        >
          <a
            href="#top"
            className="relative z-[70] flex shrink-0 items-center rounded-md"
            aria-label="DevDen — home"
          >
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="btn btn-quiet btn-sm hidden sm:inline-flex"
            >
              <AppleGlyph size={15} />
              Get DevDen
            </a>
            <button
              type="button"
              className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-white/30 hover:text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseGlyph size={20} /> : <MenuGlyph size={21} />}
            </button>
          </div>
        </nav>
      </header>

      {/* mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] flex flex-col bg-ink/95 backdrop-blur-2xl transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="wrap flex h-[68px] shrink-0 items-center">
          <Wordmark />
        </div>
        <div className="wrap flex flex-1 flex-col justify-between pb-10 pt-6">
          <ul className="flex flex-col">
            {links.map((link, i) => (
              <li key={link.href} className="border-b border-white/8">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline gap-4 py-5 transition-colors hover:text-white"
                >
                  <span className="mono-label w-6 text-[0.625rem] text-white/25">
                    0{i + 1}
                  </span>
                  <span className="text-[1.75rem] font-semibold tracking-[-0.035em] text-paper/90">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-5">
            <a
              href="#download"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-primary w-full"
            >
              Discover DevDen
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <p className="text-center text-[0.75rem] text-white/35">
              Native iOS · Built for developers, by developers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
