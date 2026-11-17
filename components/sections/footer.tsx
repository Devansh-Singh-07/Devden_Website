import { Wordmark } from "@/components/logo";
import { AppleGlyph, ArrowUpRight, SparkGlyph } from "@/components/icons";

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
  {
    title: "Contact & Queries",
    links: [
      {
        label: "wonderbuilder07@gmail.com",
        href: "mailto:wonderbuilder07@gmail.com?subject=DevDen%20Query",
        external: true,
      },
      { label: "Join Waitlist", href: "#download" },
      { label: "iOS Beta Inquiries", href: "mailto:wonderbuilder07@gmail.com?subject=DevDen%20iOS%20Beta" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-0 text-paper">
      <div className="wrap">
        <div className="grid gap-12 border-t border-white/[0.08] pt-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="max-w-[320px] sm:col-span-2 lg:col-span-1">
            <Wordmark />
            <p className="mt-5 text-[0.875rem] leading-relaxed text-white/40">
              A peer-driven home for developers. Share what you know, learn what you
              don&apos;t, and keep building.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.625rem] text-white/45">
                <AppleGlyph size={12} />
                iOS · Private beta
              </span>
              <a
                href="mailto:wonderbuilder07@gmail.com?subject=DevDen%20Query"
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-[0.625rem] font-medium text-accent transition-colors hover:bg-accent/20"
              >
                <SparkGlyph size={11} />
                Send Queries
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[0.625rem] uppercase tracking-[0.17em] text-white/30">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[0.8125rem] text-white/55 transition-colors hover:text-white"
                    >
                      <span className="break-all">{link.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-60"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] py-7 text-[0.6875rem] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span>© 2026 DevDen. All rights reserved.</span>
            <span className="hidden text-white/15 sm:inline">·</span>
            <span>
              Queries:{" "}
              <a
                href="mailto:wonderbuilder07@gmail.com?subject=DevDen%20Query"
                className="text-white/60 underline underline-offset-2 transition-colors hover:text-accent"
              >
                wonderbuilder07@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="transition-colors hover:text-white/60">Privacy Policy</span>
            <span className="transition-colors hover:text-white/60">Terms</span>
            <span className="text-white/20">Made for iOS</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none overflow-hidden pb-4">
        <div className="wrap">
          <div className="text-center text-[clamp(4.5rem,16vw,14rem)] font-semibold leading-none tracking-[-0.065em] text-white/[0.035]">
            DevDen
          </div>
        </div>
      </div>
    </footer>
  );
}
