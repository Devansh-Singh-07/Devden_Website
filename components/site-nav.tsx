"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CloseGlyph, MenuGlyph } from "@/components/icons";

const links = [
  { label: "Features", href: "/#features" },
  { label: "Screens", href: "/#screens" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <header className={`nav-shell ${scrolled || open ? "is-scrolled" : ""}`}>
        <nav
          aria-label="Primary"
          className="wrap flex h-16 items-center justify-between gap-6"
        >
          <a href="/" className="relative z-[70] flex shrink-0 items-center" aria-label="DevDen home">
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-[70] flex items-center gap-2.5">
            <ThemeToggle />
            <span className="hidden sm:inline-flex">
              <a href="/#download" className="btn btn-primary btn-sm">
                Get the app
              </a>
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseGlyph size={20} /> : <MenuGlyph size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] bg-bg/95 backdrop-blur-2xl transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="wrap flex h-full flex-col pb-10 pt-24">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-5 text-[1.75rem] font-semibold tracking-[-0.03em] text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#download"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn btn-primary mt-auto w-full"
          >
            Get the app
          </a>
        </div>
      </div>
    </>
  );
}
