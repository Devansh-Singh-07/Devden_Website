import { Reveal } from "@/components/reveal";
import { MaskLines } from "@/components/reveal";

const items = [
  {
    title: "Communities and chat",
    body: "Join your college's community or one for your language or interview track. Message classmates directly and drop posts or canvases into the chat.",
    icon: "M7 8h10M7 12h6m-9 8 3.2-3H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h.5",
  },
  {
    title: "Your coding profile",
    body: "Link GitHub, LeetCode, Codeforces, CodeChef, GeeksforGeeks and HackerRank. Your stats sit on one profile, verified with a one-time code.",
    icon: "M8 9l-3 3 3 3m8-6 3 3-3 3M13.5 6l-3 12",
  },
  {
    title: "Voice on the canvas",
    body: "Start a voice channel on any shared canvas and explain while you draw. Audio is live only and never recorded.",
    icon: "M12 4a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Zm-6 8a6 6 0 0 0 12 0M12 18v3",
  },
  {
    title: "Verified campus",
    body: "Pick your college and verify with your college email to unlock My Campus doubts and see who studies where you do.",
    icon: "M3 9l9-5 9 5-9 5-9-5Zm3 2v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5",
  },
  {
    title: "Safe by default",
    body: "Report any post, comment or message and block anyone in two taps. Every report is reviewed within 24 hours.",
    icon: "M12 3l7 3v6c0 4.2-3 7.6-7 9-4-1.4-7-4.8-7-9V6l7-3Zm-3 9 2 2 4-4",
  },
  {
    title: "Light, dark and private",
    body: "Follows your iPhone's appearance. Sign in with Apple can hide your email, and you can delete your account from Settings at any time.",
    icon: "M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z",
  },
];

export function More() {
  return (
    <section className="relative bg-bg-2 py-[clamp(5rem,9vw,8rem)]">
      <div className="wrap">
        <div className="max-w-[40rem]">
          <Reveal>
            <p className="eyebrow">And also</p>
          </Reveal>
          <h2 className="h2 mt-5">
            <MaskLines lines={["Small things that", "make it yours."]} />
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80} className="card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[var(--accent-soft)] text-accent">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={item.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="h3 mt-5">{item.title}</h3>
              <p className="mt-2.5 text-[0.9688rem] leading-relaxed text-fg-2">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
