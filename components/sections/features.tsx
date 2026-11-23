import { Phone, type Screen } from "@/components/phone";
import { MaskLines, Reveal } from "@/components/reveal";

type Feature = {
  id: string;
  kicker: string;
  title: string[];
  body: string;
  points: string[];
  screens: [Screen] | [Screen, Screen];
};

const features: Feature[] = [
  {
    id: "doubts",
    kicker: "Doubts",
    title: ["Stuck at 2 a.m.?", "Ask your campus."],
    body: "Post the problem, your code and the link. Classmates answer with an explanation, code or a canvas walkthrough, and you mark the answer that helped.",
    points: [
      "My Campus and Everyone tabs",
      "Accepted answers marked in green",
      "Attach code or a canvas to any answer",
    ],
    screens: ["doubts", "doubt-detail"],
  },
  {
    id: "interviews",
    kicker: "Interview experiences",
    title: ["Someone has been", "where you're going."],
    body: "Seniors write up every round: the company, the role, the questions they were asked and what they would do differently. Share yours by name or anonymously.",
    points: [
      "Browse by company, role and year",
      "Round-by-round questions and tips",
      "Selected, rejected or pending, shown honestly",
    ],
    screens: ["experiences", "experience-detail"],
  },
  {
    id: "canvas",
    kicker: "Canvas",
    title: ["Explain it the way", "you'd draw it on a board."],
    body: "Arrays with pointers, hash tables, stacks, code with syntax highlighting and free drawing, all as blocks you arrange step by step. Invite friends and talk it through in a voice channel.",
    points: [
      "Array, table, stack, code and drawing blocks",
      "Built-in tutorial to learn the blocks",
      "Share a canvas in chat or attach it to an answer",
    ],
    screens: ["canvas"],
  },
  {
    id: "feed",
    kicker: "For You",
    title: ["A feed that's", "only about code."],
    body: "Top posts from your communities, ranked by upvotes from other students. Shortcuts to Doubts and Interviews sit right at the top, because that's what you open the app for.",
    points: [
      "Filter by image, canvas or text posts",
      "Upvote, comment and share to chat",
      "Communities for your college and interests",
    ],
    screens: ["feed"],
  },
  {
    id: "learn",
    kicker: "Learn",
    title: ["Curated, not", "endless."],
    body: "Short articles and hand-picked resources by topic, from DSA fundamentals to interview prep. Save what you want to come back to and see what your friends shared.",
    points: [
      "Top picks and topic categories",
      "Save articles to read later",
      "Shared by students, credited by name",
    ],
    screens: ["learn"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="wrap pb-6 pt-[clamp(5rem,9vw,8rem)] text-center">
        <Reveal>
          <p className="eyebrow">What&apos;s inside</p>
        </Reveal>
        <h2 className="h2 mx-auto mt-5 max-w-[16ch]">
          <MaskLines lines={["Everything you need", "between lectures and offers."]} />
        </h2>
      </div>

      {features.map((feature, index) => (
        <FeatureRow key={feature.id} feature={feature} flip={index % 2 === 1} />
      ))}
    </section>
  );
}

function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  const pair = feature.screens.length === 2;
  return (
    <div id={feature.id} className="relative overflow-x-clip py-[clamp(3.5rem,7vw,6.5rem)]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          <Reveal>
            <p className="eyebrow">{feature.kicker}</p>
          </Reveal>
          <h3 className="h2 mt-5">
            <MaskLines lines={feature.title} />
          </h3>
          <Reveal delay={100}>
            <p className="lede mt-6 max-w-[32rem]">{feature.body}</p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="mt-7 space-y-3">
              {feature.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[1rem] text-fg-2">
                  <span
                    className="mt-[0.15em] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-accent"
                    aria-hidden="true"
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2 5 8.6l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120} className={flip ? "lg:order-1" : ""}>
          <div className="relative mx-auto flex max-w-[500px] items-start justify-center gap-5 sm:gap-7">
            <div aria-hidden="true" className="glow left-1/2 top-1/2 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-70" />
            {pair ? (
              <>
                <div className="relative w-[47%]">
                  <Phone screen={feature.screens[0]} />
                </div>
                <div className="relative w-[47%] pt-16">
                  <Phone screen={feature.screens[1]!} />
                </div>
              </>
            ) : (
              <div className="relative w-[58%] max-w-[300px]">
                <Phone screen={feature.screens[0]} />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
