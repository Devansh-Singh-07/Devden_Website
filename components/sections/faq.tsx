import { MaskLines, Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is DevDen free?",
    a: "Yes. DevDen is free to download and use. It shows an occasional ad when you return to the feed, never while you are reading or writing.",
  },
  {
    q: "Which devices does it run on?",
    a: "iPhone, on iOS 26.2 or later. It follows your phone's light or dark appearance, or you can pick one in Settings.",
  },
  {
    q: "Do I need a college email?",
    a: "No. You can sign up with any email or with Sign in with Apple. A college email is only needed to verify your campus and use the My Campus tab.",
  },
  {
    q: "Can I post an interview experience anonymously?",
    a: "Yes. Turn on Anonymous when you share it and your name is not shown to anyone. Please don't share questions you agreed to keep confidential.",
  },
  {
    q: "How do I report something or block someone?",
    a: "Long-press a message or comment, or use the ··· menu on a post, doubt, answer, experience or profile, then choose Report or Block. We review every report within 24 hours.",
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        In the app: Profile → Settings (gear) → Edit Profile → Delete Account. This removes
        your sign-in and signs you out everywhere. See{" "}
        <a className="text-link" href="/support#delete-account">
          deleting your account
        </a>{" "}
        for what happens to your posts.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-[clamp(5rem,9vw,8rem)]">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">FAQ</p>
          </Reveal>
          <h2 className="h2 mt-5">
            <MaskLines lines={["Questions,", "answered."]} />
          </h2>
          <Reveal delay={120}>
            <p className="mt-6 max-w-[22rem] text-[0.9688rem] leading-relaxed text-fg-2">
              Something else? Write to{" "}
              <a className="text-link" href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-[var(--line)] border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex items-center justify-between gap-6 py-5 text-[1.0625rem] font-semibold tracking-[-0.015em] text-fg">
                {item.q}
                <span
                  className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-fg-2"
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="pb-6 pr-12 text-[0.9688rem] leading-relaxed text-fg-2">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
