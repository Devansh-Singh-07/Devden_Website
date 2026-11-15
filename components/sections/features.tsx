import { FeatureSection } from "./feature-shell";
import {
  CanvasVisual,
  CommunitiesVisual,
  DiscussionVisual,
  FeedVisual,
  InterviewVisual,
  ProgressVisual,
} from "./visuals";
import { DSAVisualizer } from "@/components/dsa-visualizer";
import { MaskLines, Reveal } from "@/components/reveal";

export function Features() {
  return (
    <>
      <FeatureSection
        id="feed"
        index="01"
        kicker="Developer Feed"
        title={["Your corner of the internet,", "built around code."]}
        body="A feed made only for developers. Share insights, code, and progress — then follow the conversations worth your attention."
        facts={[
          "Code snippets render beautifully",
          "Top posts, ranked by developers",
          "No algorithm noise",
        ]}
        tone="dark"
        visual={<FeedVisual />}
      />

      <FeatureSection
        id="communities"
        index="02"
        kicker="Communities"
        title={["Find your people.", "Build something together."]}
        body="Global, campus, and interest-based spaces. Ask a question, share a win, or start a study group with developers who get it."
        facts={[
          "Global, campus & private spaces",
          "Ask questions with real context",
          "Grow together, week by week",
        ]}
        tone="light"
        flip
        visual={<CommunitiesVisual />}
      />

      <FeatureSection
        id="progress"
        index="03"
        kicker="Profiles & Progress"
        title={["More than a profile.", "A record of your growth."]}
        body="LeetCode, Codeforces, CodeChef, AtCoder — your ratings, streaks, and solved problems in one honest view of how far you've come."
        facts={[
          "Four platforms, one identity",
          "Streaks that keep you honest",
          "Progress you can actually share",
        ]}
        tone="dark"
        visual={<ProgressVisual />}
      />

      <FeatureSection
        id="discussions"
        index="04"
        kicker="Technical Discussions"
        title={["Better questions", "lead to better engineers."]}
        body="Ask anything. Compare approaches. Argue about complexity. A dedicated space for the conversations that make you better."
        facts={[
          "My Campus and Everyone",
          "Accepted answers, clearly marked",
          "Threads that stay on topic",
        ]}
        tone="light"
        flip
        visual={<DiscussionVisual />}
      />

      <FeatureSection
        id="experiences"
        index="05"
        kicker="Interview Experiences"
        title={["Someone has been", "where you're going."]}
        body="Real interviews, documented by the developers who sat through them. Rounds, questions, outcomes — so the next person walks in prepared."
        facts={[
          "Browse by company and role",
          "Round-by-round breakdowns",
          "Shared by real developers",
        ]}
        tone="dark"
        visual={<InterviewVisual />}
      />

      <FeatureSection
        id="canvas"
        index="06"
        kicker="Collaborative Canvas"
        title={["Think together.", "Draw it out. Figure it out."]}
        body="A shared canvas for your ideas. Sketch algorithms, map systems, and explain your thinking in real time — with the people you're building with."
        facts={[
          "Real-time, multi-cursor editing",
          "Infinite space for diagrams",
          "From sketch to explanation",
        ]}
        tone="light"
        flip
        visual={<CanvasVisual />}
      />

      <VisualizerSection />
    </>
  );
}

function VisualizerSection() {
  const facts = [
    "Step, pause, and replay",
    "Arrays, pointers, trees, graphs",
    "Built for understanding, not memorizing",
  ];

  return (
    <section
      id="visualizers"
      className="relative overflow-hidden border-t border-white/[0.07] bg-ink py-[clamp(5.5rem,9vw,9.5rem)] text-paper"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="glow-warm left-1/2 top-16 h-[720px] w-[960px] -translate-x-1/2 opacity-55" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 top-[54%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="wrap relative">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3.5">
              <span className="mono-label text-accent">07</span>
              <span className="h-px w-8 bg-white/25" aria-hidden="true" />
              <span className="text-[0.625rem] uppercase tracking-[0.19em] text-white/35">
                Interactive DSA Visualizers
              </span>
            </div>
          </Reveal>

          <h2 className="h2 mt-7">
            <MaskLines lines={["See how", "algorithms think."]} />
          </h2>

          <Reveal delay={120}>
            <p className="lede mx-auto mt-7 max-w-[38rem]">
              Watch algorithms run instead of reading them. Step through arrays,
              pointers, and data structures until the idea finally clicks.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-center gap-2.5 text-[0.8125rem] leading-snug tracking-[-0.01em] text-white/50"
                >
                  <span
                    className="h-[2px] w-3.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          variant="scale"
          delay={160}
          className="mx-auto mt-14 w-full max-w-[1024px] lg:mt-16"
        >
          <DSAVisualizer />
        </Reveal>
      </div>
    </section>
  );
}
