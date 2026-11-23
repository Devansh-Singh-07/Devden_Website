import { Fragment } from "react";
import { MaskLines, Reveal } from "@/components/reveal";

const notes = [
  { index: "01", text: "For the 2 a.m. bug that refuses to be found." },
  { index: "02", text: "For the first submission that comes back green." },
  { index: "03", text: "For the question you were almost afraid to ask." },
];

export function Philosophy() {
  return (
    <section id="about" className="relative border-y border-line bg-bg-2 py-[clamp(5rem,9vw,8rem)]">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Why we built DevDen</p>
            </Reveal>
            <h2 className="h2 mt-5">
              <MaskLines
                lines={[
                  "Code is better",
                  <Fragment key="shared">
                    when it&apos;s shared<span className="text-accent">.</span>
                  </Fragment>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={160} className="lg:col-span-5 lg:pb-2">
            <p className="text-[1.0625rem] leading-relaxed text-fg-2">
              Learning to build software is a journey, but it doesn&apos;t have to be a
              lonely one. We are students too, and we built the place we wished we had:
              where asking is easy and explaining is how you learn.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {notes.map((note, i) => (
            <Reveal key={note.index} delay={i * 90} className="card p-7">
              <span className="font-mono text-[0.75rem] font-semibold text-accent">{note.index}</span>
              <p className="mt-3 text-[1.125rem] font-medium leading-snug tracking-[-0.02em] text-fg">
                {note.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
