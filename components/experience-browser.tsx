"use client";

import { useState } from "react";
import { BuildingGlyph, CheckBadge, UpvoteGlyph } from "@/components/icons";

type Round = {
  name: string;
  meta: string;
  questions: string[];
};

type Experience = {
  company: string;
  role: string;
  year: string;
  status: "Selected" | "Rejected" | "Pending";
  difficulty: "Moderate" | "Hard";
  author: string;
  votes: number;
  rounds: Round[];
};

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "SDE Intern",
    year: "2026",
    status: "Selected",
    difficulty: "Moderate",
    author: "@devden",
    votes: 19,
    rounds: [
      {
        name: "Online Assessment",
        meta: "90 min · 2 problems · DSA",
        questions: ["Number of Islands", "Merge Intervals"],
      },
      {
        name: "Technical Interview",
        meta: "60 min · live coding · DSA + behavioural",
        questions: ["LRU Cache", "Tell me about a time you disagreed"],
      },
    ],
  },
  {
    company: "Google",
    role: "SDE-2",
    year: "2025",
    status: "Rejected",
    difficulty: "Hard",
    author: "Anonymous",
    votes: 1,
    rounds: [
      {
        name: "Phone Screen",
        meta: "45 min · live coding",
        questions: ["Longest Substring Without Repeating Characters"],
      },
      {
        name: "Coding",
        meta: "45 min · algorithms",
        questions: ["Serialize and Deserialize Binary Tree", "Course Schedule II"],
      },
      {
        name: "System Design",
        meta: "60 min · design",
        questions: ["Design a distributed rate limiter"],
      },
    ],
  },
  {
    company: "Nimbus Labs",
    role: "SDE-1",
    year: "2025",
    status: "Selected",
    difficulty: "Moderate",
    author: "@batsy",
    votes: 9,
    rounds: [
      {
        name: "DSA Round",
        meta: "60 min · live coding",
        questions: ["Top K Frequent Elements", "Clone Graph"],
      },
      {
        name: "Founder Round",
        meta: "30 min · product + culture",
        questions: ["Why an early-stage team?", "Walk us through your side project"],
      },
    ],
  },
  {
    company: "Flipkart",
    role: "SDE-2",
    year: "2026",
    status: "Pending",
    difficulty: "Hard",
    author: "@kartik",
    votes: 31,
    rounds: [
      {
        name: "Machine Coding",
        meta: "90 min · working code",
        questions: ["Build a parking lot — running, tested code"],
      },
      {
        name: "Design Round",
        meta: "60 min · system design",
        questions: ["Design an order tracking system"],
      },
    ],
  },
  {
    company: "Microsoft",
    role: "SDE Intern",
    year: "2025",
    status: "Rejected",
    difficulty: "Hard",
    author: "Anonymous",
    votes: 19,
    rounds: [
      {
        name: "Online Assessment",
        meta: "90 min · 2 problems",
        questions: ["Max Slice Sum", "String Symmetry"],
      },
      {
        name: "Technical Round",
        meta: "60 min · DSA + design",
        questions: ["Binary Tree Zigzag Level Order", "Design a URL shortener"],
      },
    ],
  },
];

const statusStyles: Record<Experience["status"], string> = {
  Selected: "bg-[#1d8f55]/10 text-[#1d8f55] border-[#1d8f55]/20",
  Rejected: "bg-[#e5484d]/10 text-[#d33a3f] border-[#e5484d]/20",
  Pending: "bg-[#c2740d]/10 text-[#b4680c] border-[#c2740d]/20",
};

const dotStyles: Record<Experience["status"], string> = {
  Selected: "bg-[#1d8f55]",
  Rejected: "bg-[#e5484d]",
  Pending: "bg-[#e08a1e]",
};

export function ExperienceBrowser() {
  const [active, setActive] = useState(0);
  const selected = experiences[active];

  return (
    <div className="overflow-hidden rounded-[26px] border border-black/[0.09] bg-white shadow-[0_40px_100px_rgba(40,28,18,.12)]">
      <div className="grid lg:grid-cols-[268px_1fr]">
        {/* index */}
        <div className="relative bg-[#0b0b0e] px-5 py-6 text-white sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[0.5625rem] uppercase tracking-[0.19em] text-white/30">
                The archive
              </div>
              <div className="mt-1.5 text-[0.9375rem] font-medium tracking-[-0.02em]">
                All companies
              </div>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-accent">
              <BuildingGlyph size={17} />
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Interview experiences by company"
            aria-orientation="vertical"
            className="mt-6 flex gap-1 overflow-x-auto pb-1 lg:block lg:overflow-visible lg:pb-0"
          >
            {experiences.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.company + item.year}
                  type="button"
                  role="tab"
                  id={`exp-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="exp-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      setActive((index + 1) % experiences.length);
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      setActive((index - 1 + experiences.length) % experiences.length);
                    }
                  }}
                  className={`group relative flex w-[152px] shrink-0 flex-col items-start gap-1 rounded-xl border px-3.5 py-3 text-left transition-all duration-300 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-3 ${
                    isActive
                      ? "border-white/12 bg-white/[0.07]"
                      : "border-transparent hover:bg-white/[0.035]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotStyles[item.status]}`}
                    />
                    <span
                      className={`text-[0.8125rem] font-medium tracking-[-0.015em] ${
                        isActive ? "text-white/90" : "text-white/55 group-hover:text-white/80"
                      }`}
                    >
                      {item.company}
                    </span>
                  </span>
                  <span className="text-[0.625rem] text-white/25">
                    {item.role} · {item.year}
                  </span>
                  {isActive && (
                    <span className="absolute -left-5 top-3 hidden h-6 w-[2px] rounded-full bg-accent sm:-left-6 lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 hidden border-t border-white/[0.07] pt-4 text-[0.625rem] leading-relaxed text-white/25 lg:block">
            Experiences are written by the developers who interviewed. Nothing here
            is scraped or rewritten.
          </div>
        </div>

        {/* detail */}
        <div
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={`exp-tab-${active}`}
          className="relative px-5 py-6 sm:px-8 sm:py-8"
        >
          <div key={active} className="fade-up">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[1.65rem] font-semibold tracking-[-0.035em] sm:text-[1.9rem]">
                    {selected.company}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[0.625rem] font-medium ${
                      statusStyles[selected.status]
                    }`}
                  >
                    {selected.status}
                  </span>
                </div>
                <p className="mt-1 text-[0.9375rem] text-black/45">
                  {selected.role} · {selected.year} · {selected.difficulty}
                </p>
              </div>
              <div className="flex items-center gap-3 text-[0.6875rem] text-black/40">
                <span className="inline-flex items-center gap-1.5">
                  <UpvoteGlyph size={13} />
                  {selected.votes}
                </span>
                <span className="h-3 w-px bg-black/10" />
                <span>{selected.rounds.length} rounds</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] text-black/35">
              <span>Shared by {selected.author}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1 text-[#1d8f55]">
                <CheckBadge size={12} /> Community verified
              </span>
            </div>

            <div className="mt-6 h-px w-full bg-black/[0.07]" />

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[0.625rem] uppercase tracking-[0.17em] text-black/35">
                Round by round
              </span>
              <span className="text-[0.625rem] text-black/25">
                {selected.difficulty} difficulty
              </span>
            </div>

            <ol className="mt-4 space-y-3">
              {selected.rounds.map((round, i) => (
                <li
                  key={round.name}
                  className="relative rounded-2xl border border-black/[0.07] bg-[#fbf9f5] px-4 py-3.5"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[0.6875rem] font-medium text-white">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <span className="text-[0.875rem] font-semibold tracking-[-0.02em]">
                          {round.name}
                        </span>
                        <span className="text-[0.625rem] text-black/35">
                          {round.meta}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {round.questions.map((question) => (
                          <span
                            key={question}
                            className="rounded-md border border-black/[0.07] bg-white px-2 py-1 text-[0.6875rem] leading-none text-black/55"
                          >
                            {question}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-[#fff4ec] px-3.5 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/12 text-accent">
                <CheckBadge size={14} />
              </span>
              <p className="text-[0.6875rem] leading-snug text-[#8a4a24]">
                Reported by the person who sat through it — questions, rounds, and
                outcome included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
