import { MaskLines, Reveal } from "@/components/reveal";

const notes = [
  {
    index: "01",
    text: "For the 2 a.m. bug that refuses to be found.",
  },
  {
    index: "02",
    text: "For the first submission that comes back green.",
  },
  {
    index: "03",
    text: "For the question you were almost afraid to ask.",
  },
];

export function Philosophy() {
  return (
    <section
      id="about"
      className="on-paper relative z-10 -mt-6 overflow-hidden rounded-t-[34px] border-t border-black/[0.06] pb-[clamp(5rem,8vw,8rem)] pt-[clamp(5.5rem,10vw,10rem)] sm:rounded-t-[48px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,90,30,0.07),transparent_68%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.08]" />
      </div>

      <div className="wrap relative">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="eyebrow">
              <span className="dot" />
              Our philosophy
            </span>
          </div>
          <span className="mono-label hidden text-[0.5625rem] text-black/25 sm:block">
            Why we built DevDen
          </span>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="philosophy-title font-semibold tracking-[-0.045em]">
              <MaskLines
                lines={[
                  "Code is better",
                  <>
                    when it&apos;s shared<span className="text-accent">.</span>
                  </>,
                ]}
              />
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <Reveal delay={220}>
              <p className="text-[1rem] leading-[1.6] tracking-[-0.012em] text-black/55 sm:text-[1.0625rem]">
                Learning to build software is a journey. But it doesn&apos;t have to be
                a lonely one. DevDen brings developers together to learn, share,
                collaborate, and grow.
              </p>
              <div className="mt-7 flex items-center gap-2.5">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                <span className="text-[0.75rem] font-medium tracking-[-0.005em] text-black/40">
                  Built for developers. By developers.
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 border-t border-black/[0.09] pt-2 sm:mt-24">
          <div className="grid gap-0 md:grid-cols-3">
            {notes.map((note, i) => (
              <Reveal
                key={note.index}
                delay={i * 90}
                className="border-b border-black/[0.08] py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-9 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="mono-label text-[0.5625rem] text-accent">
                    {note.index}
                  </span>
                  <p className="max-w-[18rem] text-[1.0625rem] leading-[1.35] tracking-[-0.022em] text-black/65">
                    {note.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
