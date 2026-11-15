import { LogoMark } from "@/components/logo";
import { MaskLines, Reveal } from "@/components/reveal";
import { Waitlist } from "@/components/waitlist";
import {
  BookGlyph,
  PeopleGlyph,
  ScribbleGlyph,
  StarGlyph,
} from "@/components/icons";

const tabs = [
  { label: "For You", Glyph: StarGlyph },
  { label: "Discussion", Glyph: PeopleGlyph },
  { label: "Canvas", Glyph: ScribbleGlyph },
  { label: "Learn", Glyph: BookGlyph },
];

export function Closing() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-ink pb-0 pt-[clamp(6rem,12vw,11rem)] text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[30%] h-[880px] w-[1320px] -translate-x-1/2 rounded-[50%] border border-white/[0.045]" />
        <div className="absolute left-1/2 top-[34%] h-[680px] w-[1040px] -translate-x-1/2 rounded-[50%] border border-white/[0.035]" />
        <div className="absolute bottom-[-460px] left-1/2 h-[820px] w-[1300px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_top,rgba(255,90,30,0.24),transparent_62%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-[26%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,90,30,0.35),transparent)]" />
      </div>

      <div className="wrap relative text-center">
        <div className="hero-rise-soft mx-auto flex h-12 w-12 items-center justify-center">
          <LogoMark size={46} className="text-accent" />
        </div>

        <p className="mono-label mt-8 text-[0.5625rem] text-white/28">
          DevDen for iOS · Private beta
        </p>

        <h2 className="closing-title mx-auto mt-7 max-w-[1060px] font-semibold">
          <MaskLines
            lines={[
              "The future of building",
              <>
                is collaborative<span className="text-accent">.</span>
              </>,
            ]}
          />
        </h2>

        <Reveal delay={180}>
          <p className="lede mx-auto mt-9 max-w-[32rem]">
            Find your community. Share what you know. Learn what you don&apos;t. Keep
            building.
          </p>
        </Reveal>

        <Reveal delay={280} className="mt-11">
          <Waitlist />
        </Reveal>

        <p className="mt-9 text-[0.5625rem] uppercase tracking-[0.19em] text-white/22">
          Coming to the App Store · iPhone · Built in SwiftUI
        </p>
      </div>

      <div className="wrap relative mt-24 sm:mt-28">
        <div className="grid grid-cols-2 gap-y-8 border-t border-white/[0.08] pt-9 sm:grid-cols-4">
          {tabs.map(({ label, Glyph }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 text-white/25"
            >
              <Glyph />
              <span className="text-[0.5625rem] uppercase tracking-[0.17em]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
