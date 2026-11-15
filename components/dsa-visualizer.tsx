"use client";

import { useEffect, useRef, useState } from "react";
import { PauseGlyph, PlayGlyph, ResetGlyph, StepGlyph } from "@/components/icons";

const nums = [2, 7, 11, 15];
const target = 9;

const steps = [
  {
    idx: -1,
    map: [] as [number, number][],
    note: "Find two indices whose values add up to 9.",
    activeLine: 0,
    found: false,
  },
  {
    idx: 0,
    map: [] as [number, number][],
    note: "need = 9 − 2 = 7. Nothing in seen yet.",
    activeLine: 3,
    found: false,
  },
  {
    idx: 0,
    map: [[2, 0]] as [number, number][],
    note: "Save 2 → index 0. Move the pointer forward.",
    activeLine: 6,
    found: false,
  },
  {
    idx: 1,
    map: [[2, 0]] as [number, number][],
    note: "need = 9 − 7 = 2. Found at index 0 → return [0, 1].",
    activeLine: 5,
    found: true,
  },
];

const code = [
  "func twoSum(_ nums: [Int], _ target: Int) -> [Int] {",
  "  var seen = [Int: Int]()",
  "  for (i, x) in nums.enumerated() {",
  "    let need = target - x",
  "    if let j = seen[need] {",
  "      return [j, i]",
  "    }",
  "    seen[x] = i",
  "  }",
  "}",
];

export function DSAVisualizer() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  const current = steps[step];
  const last = step === steps.length - 1;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          observer.disconnect();
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.setTimeout(() => setPlaying(true), 900);
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (last) {
      setPlaying(false);
      return;
    }
    const timer = window.setInterval(() => {
      setStep((value) => {
        if (value >= steps.length - 1) return value;
        return value + 1;
      });
    }, 1800);

    return () => window.clearInterval(timer);
  }, [playing, last]);

  const advance = () => {
    setPlaying(false);
    setStep((value) => (value >= steps.length - 1 ? 0 : value + 1));
  };

  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0d0d10] shadow-[0_40px_100px_rgba(0,0,0,.55)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,.05),transparent)]" />

      <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15 text-accent">
            <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1.5" y="1.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
              <rect x="10.5" y="1.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
              <rect x="1.5" y="10.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
              <rect x="10.5" y="10.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <span className="text-[0.75rem] font-medium text-white/70">Two Sum</span>
          <span className="hidden rounded-full bg-white/[0.06] px-2 py-0.5 text-[0.5625rem] text-white/35 sm:inline">
            Array · Two pointers
          </span>
        </div>
        <div className="flex items-center gap-2 text-[0.5625rem] uppercase tracking-[0.14em] text-white/30">
          Step
          <span className="tabular-nums text-white/65">
            {String(step + 1).padStart(2, "0")}
          </span>
          / 04
        </div>
      </div>

      <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7">
        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[0.625rem] uppercase tracking-[0.16em] text-white/35">
              nums · target {target}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[0.625rem] transition-colors duration-500 ${
                current.found
                  ? "bg-[#3ddc84]/10 text-[#66e29c]"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {current.found ? "Pair found" : "Searching"}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 pb-8 pt-7">
            {nums.map((value, i) => {
              const isActive = current.idx === i && !current.found;
              const isPair = current.found && (i === 0 || i === 1);
              return (
                <div key={value} className="relative">
                  {current.idx === i && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[0.625rem] font-medium text-accent">
                      i
                    </span>
                  )}
                  <div
                    className={`flex h-[4.25rem] items-center justify-center rounded-lg border text-[1.35rem] font-medium transition-all duration-500 ${
                      isPair
                        ? "border-[#7bc09a]/70 bg-[#7bc09a]/10 text-[#a8e0c0]"
                        : isActive
                          ? "border-accent/80 bg-accent/10 text-[#ffb08a] shadow-[0_0_0_4px_rgba(255,90,30,.07)]"
                          : "border-white/[0.12] bg-white/[0.03] text-white/65"
                    }`}
                  >
                    {value}
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.625rem] text-white/25">
                    {i}
                  </span>
                </div>
              );
            })}
          </div>

          <p
            className="mt-2 min-h-[2.75rem] text-[0.8125rem] leading-relaxed text-white/50"
            aria-live="polite"
          >
            <span className="mr-2 font-mono text-[0.6875rem] text-accent">
              {String(step + 1).padStart(2, "0")}
            </span>
            {current.note}
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause visualizer" : "Play visualizer"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-[0_8px_24px_-6px_rgba(255,90,30,.7)] transition-transform hover:scale-[1.04] active:scale-95"
            >
              {playing ? <PauseGlyph size={14} /> : <PlayGlyph size={14} />}
            </button>
            <button
              type="button"
              onClick={advance}
              className="flex h-10 items-center gap-2 rounded-full border border-white/12 px-4 text-[0.75rem] text-white/60 transition-colors hover:border-white/25 hover:text-white/85"
            >
              <StepGlyph size={13} />
              Step
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/50 transition-colors hover:border-white/25 hover:text-white/80"
              aria-label="Reset visualizer"
            >
              <ResetGlyph size={14} />
            </button>

            <div className="ml-auto flex items-center gap-1.5" aria-hidden="true">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === step
                      ? "w-4 bg-accent"
                      : i < step
                        ? "w-1.5 bg-white/35"
                        : "w-1.5 bg-white/12"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <div className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/30">
                seen
              </span>
              <span className="text-[0.5625rem] text-white/20">hash map</span>
            </div>
            <div className="mt-2.5 flex min-h-[1.75rem] flex-wrap items-center gap-1.5">
              {current.map.length === 0 ? (
                <span className="font-mono text-[0.6875rem] text-white/25">
                  {"{ }"}
                </span>
              ) : (
                current.map.map(([value, index]) => (
                  <span
                    key={value}
                    className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 font-mono text-[0.6875rem] text-white/65"
                  >
                    {value} → {index}
                  </span>
                ))
              )}
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#0a0a0d] p-3.5">
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/30">
                Swift
              </span>
              <span className="font-mono text-[0.5625rem] text-white/20">O(n)</span>
            </div>
            <pre className="code-scroll overflow-x-auto font-mono text-[0.625rem] leading-[1.85] text-white/45 sm:text-[0.6875rem]">
              {code.map((line, i) => (
                <div
                  key={line + i}
                  className={`whitespace-pre-wrap break-words rounded-sm px-1.5 transition-colors duration-500 lg:whitespace-pre ${
                    current.activeLine === i
                      ? "bg-accent/10 text-[#ffb08a]"
                      : ""
                  }`}
                >
                  {line || " "}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
