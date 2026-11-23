import { LogoMark } from "@/components/logo";
import { MaskLines, Reveal } from "@/components/reveal";
import { AppStoreBadge } from "@/components/app-store-badge";
import { SITE, mailto } from "@/lib/site";

export function Closing() {
  return (
    <section id="download" className="relative overflow-hidden py-[clamp(5rem,10vw,9rem)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow bottom-[-40%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2" />
      </div>

      <div className="wrap relative">
        <div className="card relative mx-auto max-w-[920px] overflow-hidden px-6 py-16 text-center sm:px-12">
          <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-50" />
          <div className="relative">
            <LogoMark size={64} className="mx-auto text-accent" />
            <h2 className="h2 mx-auto mt-8 max-w-[14ch]">
              <MaskLines lines={["Your campus is", "already asking."]} />
            </h2>
            <Reveal delay={120}>
              <p className="lede mx-auto mt-6 max-w-[30rem]">
                DevDen is free on iPhone. Join, answer one doubt, and see how fast you
                learn when you explain.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppStoreBadge />
              <a href={mailto("DevDen question")} className="btn btn-glass">
                Email the team
              </a>
            </Reveal>
            <p className="mt-6 text-[0.8125rem] text-fg-3">
              Questions or feedback: {SITE.supportEmail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
