import { Phone } from "@/components/ios/ui";
import { ProfileScreen } from "@/components/ios/screens/profile";
import { MaskLines, Reveal } from "@/components/reveal";
import { FlameGlyph } from "@/components/icons";
import { GlassNote, MiniAvatar } from "./visuals";

const stats = [
  { value: "2,418", label: "Problems solved" },
  { value: "1,842", label: "Peak rating" },
  { value: "128", label: "Day streak" },
  { value: "4", label: "Communities" },
];

export function Identity() {
  return (
    <section
      id="identity"
      className="relative overflow-hidden border-t border-white/[0.07] bg-ink py-[clamp(5.5rem,9vw,9rem)] text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-warm left-1/2 top-[62%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="wrap relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">
                <span className="dot" />
                The developer identity
              </span>
            </Reveal>
            <h2 className="h2 mt-6">
              <MaskLines
                lines={[
                  "Your journey.",
                  "Your identity.",
                  <>
                    Your DevDen<span className="text-accent">.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <Reveal delay={150}>
              <p className="lede">
                One profile that holds it all — your ratings, your streak, the
                communities you belong to, and the conversations you&apos;ve started.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative mt-16 min-h-[700px] lg:mt-20 lg:min-h-[760px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[740px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
          </div>

          <div className="relative z-10 mx-auto w-[286px] sm:w-[306px]">
            <Phone>
              <ProfileScreen />
            </Phone>
          </div>

          <GlassNote className="absolute left-0 top-[12%] z-20 hidden w-[218px] lg:block">
            <div className="flex items-center justify-between">
              <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
                Communities
              </span>
              <span className="text-[0.5625rem] text-white/25">4 joined</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex">
                {["DC", "IIT", "SD", "CP"].map((initials, i) => (
                  <MiniAvatar
                    key={initials}
                    initials={initials}
                    tone="ink"
                    className={`h-7 w-7 border-2 border-[#101013] text-[0.5625rem] ${
                      i === 0 ? "" : "-ml-2"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 text-[0.6875rem] leading-snug text-white/45">
              DevDen Community · IIT Delhi · Systems Design · Competitive Programming
            </p>
          </GlassNote>

          <GlassNote className="absolute bottom-[13%] left-0 z-20 hidden w-[200px] lg:block">
            <div className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
              Discussions
            </div>
            <div className="mt-2 flex items-end gap-4">
              <div>
                <div className="text-[1.4rem] font-semibold leading-none tracking-[-0.04em]">
                  12
                </div>
                <div className="mt-1 text-[0.5625rem] text-white/30">started</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-[1.4rem] font-semibold leading-none tracking-[-0.04em]">
                  64
                </div>
                <div className="mt-1 text-[0.5625rem] text-white/30">answers</div>
              </div>
            </div>
          </GlassNote>

          <GlassNote className="absolute right-0 top-[18%] z-20 hidden w-[204px] lg:block">
            <div className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
              Achievements
            </div>
            <ul className="mt-3 space-y-2.5">
              {["Top 2% this week", "500 problems solved", "42 contests shipped"].map(
                (item, i) => (
                  <li key={item} className="flex items-center gap-2 text-[0.6875rem] text-white/55">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        i === 0 ? "bg-accent" : "bg-white/25"
                      }`}
                    />
                    {item}
                  </li>
                )
              )}
            </ul>
          </GlassNote>

          <GlassNote className="absolute bottom-[10%] right-0 z-20 hidden w-[196px] lg:block">
            <div className="flex items-center justify-between">
              <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
                Consistency
              </span>
              <span className="text-accent">
                <FlameGlyph size={13} />
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-[1.6rem] font-semibold leading-none tracking-[-0.04em]">
                128
              </span>
              <span className="text-[0.6875rem] text-white/35">days</span>
            </div>
            <div className="mt-3 flex items-end gap-[3px]" aria-hidden="true">
              {[7, 11, 8, 15, 10, 18, 13, 21, 16, 24, 18, 28, 22, 32, 26, 38].map(
                (h, i) => (
                  <span
                    key={i}
                    className="w-[5px] rounded-sm"
                    style={{
                      height: `${h}px`,
                      background:
                        i > 11 ? "rgba(255,90,30,0.85)" : "rgba(255,90,30,0.28)",
                    }}
                  />
                )
              )}
            </div>
          </GlassNote>

          <div className="relative z-10 mx-auto mt-10 grid max-w-[560px] grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
              >
                <div className="text-[1.125rem] font-semibold tracking-[-0.03em]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[0.5625rem] uppercase tracking-[0.12em] text-white/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-y border-white/[0.08]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-2 py-7 md:border-l md:border-white/[0.08] md:px-6 md:first:border-l-0 ${
                  i % 2 !== 0 ? "border-l border-white/[0.08]" : ""
                } ${i > 1 ? "border-t border-white/[0.08] md:border-t-0" : ""}`}
              >
                <div className="text-[1.75rem] font-semibold tracking-[-0.04em] sm:text-[2rem]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[0.625rem] uppercase tracking-[0.14em] text-white/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
