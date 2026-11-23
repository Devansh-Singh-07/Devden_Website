import { Phone } from "@/components/phone";
import { ArrowRight } from "@/components/icons";
import { AppStoreBadge } from "@/components/app-store-badge";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-[clamp(4rem,8vw,7rem)] pt-[clamp(7rem,14vw,10rem)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="glow left-1/2 top-[-10%] h-[720px] w-[1100px] -translate-x-1/2" />
      </div>

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <p className="hero-rise eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            For CS students · iPhone
          </p>

          <h1 className="hero-rise display mt-6" style={{ animationDelay: "80ms" }}>
            Learn to code,
            <br />
            <span className="text-accent">together.</span>
          </h1>

          <p
            className="hero-rise lede mx-auto mt-6 max-w-[34rem] lg:mx-0"
            style={{ animationDelay: "160ms" }}
          >
            Ask doubts and get answers from your campus. Read real interview
            experiences, round by round. Explain any solution on a canvas built for
            arrays, pointers and code.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "240ms" }}
          >
            <AppStoreBadge />
            <a href="#features" className="btn btn-glass">
              See what&apos;s inside
              <ArrowRight size={16} className="btn-arrow" />
            </a>
          </div>

          <p
            className="hero-rise mt-6 text-[0.8125rem] text-fg-3"
            style={{ animationDelay: "320ms" }}
          >
            Free · Light and dark mode · Sign in with Apple
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-start justify-center gap-5 sm:gap-7">
          <div className="hero-rise w-[46%] pt-14" style={{ animationDelay: "200ms" }}>
            <div className="float-late">
              <Phone screen="canvas" priority />
            </div>
          </div>
          <div className="hero-rise w-[50%]" style={{ animationDelay: "120ms" }}>
            <div className="float">
              <Phone screen="feed" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
