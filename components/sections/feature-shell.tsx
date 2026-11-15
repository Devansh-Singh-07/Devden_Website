import type { ReactNode } from "react";
import { MaskLines, Reveal } from "@/components/reveal";

export type Tone = "dark" | "light";

export function FeatureSection({
  id,
  index,
  kicker,
  title,
  body,
  facts,
  tone,
  visual,
  flip = false,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string[];
  body: string;
  facts: string[];
  tone: Tone;
  visual: ReactNode;
  flip?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t py-[clamp(5.5rem,9vw,9.5rem)] ${
        dark
          ? "border-white/[0.07] bg-ink text-paper"
          : "on-paper border-black/[0.07]"
      }`}
    >
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="glow-warm -right-40 top-1/3 h-[620px] w-[620px] opacity-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}

      <div className="wrap relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div
            className={
              flip
                ? "lg:col-span-5 lg:col-start-8 lg:pl-4"
                : "lg:col-span-5"
            }
          >
            <Reveal>
              <div className="flex items-center gap-3.5">
                <span className="mono-label text-accent">{index}</span>
                <span
                  className={`h-px w-8 ${dark ? "bg-white/25" : "bg-black/20"}`}
                  aria-hidden="true"
                />
                <span
                  className={`text-[0.625rem] uppercase tracking-[0.19em] ${
                    dark ? "text-white/35" : "text-black/40"
                  }`}
                >
                  {kicker}
                </span>
              </div>
            </Reveal>

            <h2 className="h2-feature mt-7">
              <MaskLines lines={title} />
            </h2>

            <Reveal delay={120}>
              <p className="lede mt-8 max-w-[32rem]">{body}</p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 space-y-3">
                {facts.map((fact) => (
                  <li
                    key={fact}
                    className={`flex items-start gap-3 text-[0.9375rem] leading-snug tracking-[-0.01em] ${
                      dark ? "text-white/52" : "text-black/55"
                    }`}
                  >
                    <span
                      className="mt-[0.55em] h-[2px] w-3.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div
            className={`relative ${
              flip
                ? "lg:col-span-7 lg:col-start-1 lg:row-start-1"
                : "lg:col-span-7"
            }`}
          >
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
