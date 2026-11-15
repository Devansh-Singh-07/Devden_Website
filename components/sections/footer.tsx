import { Wordmark } from "@/components/logo";
import { AppleGlyph, ArrowUpRight } from "@/components/icons";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Developer Feed", href: "#feed" },
      { label: "Communities", href: "#communities" },
      { label: "Profiles & Progress", href: "#progress" },
      { label: "Discussions", href: "#discussions" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Interview Experiences", href: "#interviews" },
      { label: "Collaborative Canvas", href: "#canvas" },
      { label: "DSA Visualizers", href: "#visualizers" },
      { label: "About DevDen", href: "#about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 text-paper">
      <div className="wrap">
        <div className="grid gap-12 border-t border-white/[0.08] pt-14 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="max-w-[300px]">
            <Wordmark />
            <p className="mt-5 text-[0.875rem] leading-relaxed text-white/35">
              A peer-driven home for developers. Share what you know, learn what you
              don&apos;t, and keep building.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[0.625rem] text-white/40">
              <AppleGlyph size={12} />
              iOS · Coming soon
            </span>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.625rem] uppercase tracking-[0.17em] text-white/30">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[0.8125rem] text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] py-7 text-[0.6875rem] text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DevDen. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span title="Placeholder">Privacy Policy</span>
            <span title="Placeholder">Terms</span>
            <span className="text-white/20">Made for iOS</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none overflow-hidden">
        <div className="wrap">
          <div className="-mb-[0.18em] translate-y-[16%] text-[clamp(5rem,17.5vw,16rem)] font-semibold leading-[0.72] tracking-[-0.065em] text-white/[0.045]">
            DevDen
          </div>
        </div>
      </div>
    </footer>
  );
}
