import { Phone, type Screen } from "@/components/phone";
import { MaskLines, Reveal } from "@/components/reveal";

const screens: { screen: Screen; caption: string }[] = [
  { screen: "feed", caption: "For You" },
  { screen: "doubts", caption: "Doubts" },
  { screen: "doubt-detail", caption: "Answers" },
  { screen: "canvas", caption: "Canvas" },
  { screen: "experiences", caption: "Interviews" },
  { screen: "experience-detail", caption: "Round by round" },
  { screen: "learn", caption: "Learn" },
];

export function Gallery() {
  return (
    <section id="screens" className="relative overflow-hidden pt-[clamp(5rem,9vw,8rem)]">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow">Screens</p>
          </Reveal>
          <h2 className="h2 mt-5">
            <MaskLines lines={["Native iOS.", "In light and dark."]} />
          </h2>
        </div>
        <Reveal delay={120}>
          <p className="max-w-[22rem] text-[0.9375rem] leading-relaxed text-fg-2">
            Real screenshots from the app. Switch the site&apos;s theme with the button
            at the top and they switch with it.
          </p>
        </Reveal>
      </div>

      <div className="gallery mt-4" tabIndex={0} aria-label="App screenshots, scroll sideways">
        {screens.map(({ screen, caption }) => (
          <figure key={screen} className="m-0">
            <Phone screen={screen} />
            <figcaption className="mt-4 text-center text-[0.875rem] font-medium text-fg-2">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
