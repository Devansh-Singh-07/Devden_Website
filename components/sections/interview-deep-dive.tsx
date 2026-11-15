import { ExperienceBrowser } from "@/components/experience-browser";
import { MaskLines, Reveal } from "@/components/reveal";

export function InterviewDeepDive() {
  return (
    <section
      id="interviews"
      className="on-paper-2 relative overflow-hidden border-t border-black/[0.07] py-[clamp(5.5rem,9vw,9rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,90,30,0.07),transparent_68%)]" />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-black/[0.035] lg:block" />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-black/[0.035] lg:block" />
      </div>

      <div className="wrap relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="eyebrow">
            <span className="dot" />
            Interview Experiences
          </span>
          <span className="mono-label text-[0.5625rem] text-black/25">
            Case files · Community sourced
          </span>
        </div>

        <div className="mt-10 grid gap-9 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="h2">
              <MaskLines
                lines={[
                  "Don't walk into",
                  <>
                    an interview blind<span className="text-accent">.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <Reveal delay={150}>
              <p className="text-[1rem] leading-[1.6] tracking-[-0.012em] text-black/55 sm:text-[1.0625rem]">
                Learn from developers who&apos;ve already been there. Explore real
                interview rounds, questions, and experiences shared by the community.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.6875rem] text-black/35">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" /> Browse by company
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" /> By role and year
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" /> By round type
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} className="mt-14 sm:mt-16">
          <ExperienceBrowser />
        </Reveal>

        <div className="mt-6 flex flex-col justify-between gap-2 text-[0.6875rem] text-black/35 sm:flex-row">
          <span>
            Internships, full-time roles, DSA, system design, and HR rounds.
          </span>
          <span>Real experiences. Real outcomes.</span>
        </div>
      </div>
    </section>
  );
}
