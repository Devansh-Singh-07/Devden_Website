"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Phone } from "@/components/ios/ui";
import type { TabKey } from "@/components/ios/ui";
import { ForYouScreen, DoubtsScreen, LearnScreen } from "@/components/ios/screens/feed";
import { CanvasScreen } from "@/components/ios/screens/core";
import { Sparkline } from "@/components/ios/screens/art";
import { ArrowRight, FlameGlyph } from "@/components/icons";

export function Hero() {
  const [tab, setTab] = useState<TabKey>("feed");
  const [touched, setTouched] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || window.innerWidth < 900) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const el = stageRef.current;
        if (el) {
          const y = Math.min(Math.max(window.scrollY * 0.045, 0), 46);
          el.style.transform = `translate3d(0, ${y}px, 0)`;
        }
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const handleTab = (key: TabKey) => {
    setTab(key);
    setTouched(true);
  };

  const screens: Record<TabKey, ReactNode> = {
    feed: <ForYouScreen onTab={handleTab} />,
    discussion: <DoubtsScreen onTab={handleTab} />,
    canvas: <CanvasScreen onTab={handleTab} />,
    learn: <LearnScreen onTab={handleTab} />,
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-4 pt-[96px] sm:pt-[108px] lg:pt-[116px]"
    >
      {/* light + depth */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-warm left-1/2 top-[46%] h-[820px] w-[1180px] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,255,255,0.075),transparent_62%)]" />
        <div className="absolute inset-x-0 top-[54%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute bottom-0 left-1/2 h-[440px] w-[880px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(255,90,30,0.10),transparent_70%)]" />
      </div>

      <div className="wrap relative">
        <div className="mx-auto max-w-[1080px] text-center">
          <h1 className="display text-paper">
            <span className="hero-rise block" style={{ animationDelay: "180ms" }}>
              Built for developers.
            </span>
            <span className="hero-rise block" style={{ animationDelay: "300ms" }}>
              By developers<span className="text-accent">.</span>
            </span>
          </h1>

          <p
            className="hero-rise-soft lede mx-auto mt-8 max-w-[34rem]"
            style={{ animationDelay: "460ms" }}
          >
            Your ideas, your progress, your people. Everything that makes you a better
            developer, in one place.
          </p>

          <div
            className="hero-rise mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "600ms" }}
          >
            <a href="#about" className="btn btn-primary">
              Explore DevDen
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a href="#features" className="btn btn-quiet">
              Discover the features
            </a>
          </div>
        </div>

        {/* device stage */}
        <div className="relative mx-auto mt-9 max-w-[1160px] lg:mt-12">
          <div className="pointer-events-none absolute inset-x-6 bottom-16 top-8 hidden lg:block">
            <div className="glow-warm left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-70" />
          </div>

          <FloatCard
            className="left-2 top-[16%] hidden w-[196px] lg:block xl:left-8"
            label="Codeforces"
            badge="Expert"
            value="1842"
            caption="Peak 1,978 · 42 contests"
            delay="0s"
          >
            <Sparkline className="mt-3 text-accent/80" />
          </FloatCard>

          <FloatCard
            className="bottom-[18%] right-2 hidden w-[212px] lg:block xl:right-8"
            label="Current streak"
            badge="128"
            badgeIcon={<FlameGlyph size={11} />}
            value="128 days"
            caption="Longest 214 · 312 submissions"
            delay="-4.5s"
          >
            <StreakBars />
          </FloatCard>

          <div className="relative mx-auto w-[min(342px,80vw)] sm:w-[356px]">
            <div
              ref={stageRef}
              className="will-change-transform"
              style={{ transition: "transform 60ms linear" }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-x-16 bottom-0 top-16 -z-10 opacity-80"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,90,30,.22), rgba(255,90,30,.05) 45%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />

                <Phone className="hero-device" style={{ animationDelay: "320ms" }}>
                  <div key={tab} className="screen-swap">
                    {screens[tab]}
                  </div>
                </Phone>

                <div
                  className={`pointer-events-none absolute -bottom-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap transition-all duration-700 ${
                    touched
                      ? "translate-y-2 opacity-0"
                      : "opacity-100"
                  }`}
                  aria-hidden={touched}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[0.5625rem] font-medium uppercase tracking-[0.19em] text-white/45 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-[soft-pulse_2.6s_ease-in-out_infinite] rounded-full bg-accent" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    Tap the tabs
                  </span>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="mx-auto mt-10 h-24 w-[78%] rounded-[50%] bg-black/70 blur-2xl"
            />
          </div>
        </div>

        <div className="mt-2 flex items-center gap-4 border-t border-white/8 pb-8 pt-6">
          <span className="mono-label text-[0.5625rem] text-white/30">Scroll</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/12 via-white/5 to-transparent" />
          <span className="mono-label text-[0.5625rem] text-white/20">The story</span>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className = "",
  label,
  badge,
  badgeIcon,
  value,
  caption,
  delay,
}: {
  children: ReactNode;
  className?: string;
  label: string;
  badge: string;
  badgeIcon?: ReactNode;
  value: string;
  caption: string;
  delay: string;
}) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-white/10 bg-[#101013]/75 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl ${className}`}
      style={{ animation: `drift 11s ease-in-out infinite`, animationDelay: delay }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/40">
          {label}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[0.5625rem] font-medium text-white/60">
          {badgeIcon}
          {badge}
        </span>
      </div>
      <div className="mt-1 text-[1.375rem] font-semibold tracking-[-0.03em] text-paper">
        {value}
      </div>
      {children}
      <div className="mt-2 text-[0.625rem] text-white/30">{caption}</div>
    </div>
  );
}

function StreakBars() {
  return (
    <div className="mt-3 flex items-end gap-[5px]" aria-hidden="true">
      {[10, 16, 8, 22, 14, 26, 18, 30, 22, 34, 26, 38, 30, 42].map((h, i) => (
        <span
          key={i}
          className="w-[7px] rounded-sm"
          style={{
            height: `${h}px`,
            background:
              i > 9 ? "rgba(255,90,30,0.9)" : "rgba(255,90,30,0.3)",
          }}
        />
      ))}
    </div>
  );
}
