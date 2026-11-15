import type { ReactNode } from "react";
import { Phone } from "@/components/ios/ui";
import { ForYouScreen, DoubtsScreen } from "@/components/ios/screens/feed";
import { CommunitiesScreen, ExperiencesScreen } from "@/components/ios/screens/core";
import { Heatmap, Sparkline } from "@/components/ios/screens/art";
import {
  CheckBadge,
  CheckGlyph,
  FlameGlyph,
  UpvoteGlyph,
} from "@/components/icons";

/* ---------------------------------------------------------------- helpers */

const dotGrid =
  "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)";

export function MiniAvatar({
  initials,
  className = "",
  tone = "warm",
}: {
  initials: string;
  className?: string;
  tone?: "warm" | "mint" | "sand" | "ink";
}) {
  const tones = {
    warm: "bg-[#ffe6d6] text-[#c2510e]",
    mint: "bg-[#dff3e8] text-[#1d8f55]",
    sand: "bg-[#f3e7d3] text-[#8a6733]",
    ink: "bg-white/10 text-white/70",
  };
  return (
    <span
      className={`inline-flex select-none items-center justify-center rounded-full font-semibold tracking-[-0.02em] ${tones[tone]} ${className}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

export function GlassNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#101013]/80 p-3.5 shadow-[0_24px_60px_rgba(0,0,0,.55)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function LightNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/[0.07] bg-white/95 p-4 shadow-[0_24px_60px_rgba(23,18,12,.12)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

/* ================================================================ 01 feed */

export function FeedVisual() {
  return (
    <div className="relative flex min-h-[680px] items-center justify-center px-2 py-4 sm:min-h-[720px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-4 top-4 overflow-hidden rounded-[38px] border border-white/[0.07] bg-[#0b0b0e]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,90,30,0.22),transparent_58%)]" />
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
          style={{ backgroundImage: dotGrid, backgroundSize: "26px 26px" }}
        />
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-x-10 bottom-10 h-24 rounded-[50%] bg-black/70 blur-2xl" />
      </div>

      <div className="relative z-10 w-[286px] sm:w-[302px]">
        <Phone>
          <ForYouScreen />
        </Phone>
      </div>

      <GlassNote className="absolute left-0 top-[16%] z-20 hidden w-[184px] lg:block xl:-left-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(255,90,30,.55)]" />
          <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/40">
            Live in your feed
          </span>
        </div>
        <p className="mt-2 text-[0.75rem] leading-snug text-white/70">
          “Found this gem in the library” — shared with DevDen Community.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex">
            <MiniAvatar initials="D" tone="ink" className="h-5 w-5 border border-[#101013] text-[8px]" />
            <MiniAvatar
              initials="B"
              tone="ink"
              className="-ml-1.5 h-5 w-5 border border-[#101013] text-[8px]"
            />
          </div>
          <span className="text-[0.625rem] text-white/30">2 developers replied</span>
        </div>
      </GlassNote>

      <GlassNote className="absolute bottom-[15%] right-0 z-20 hidden w-[168px] lg:block xl:-right-2">
        <div className="flex items-center justify-between">
          <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/40">
            Top post
          </span>
          <span className="text-[0.625rem] text-accent">Today</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[1.6rem] font-semibold leading-none tracking-[-0.04em]">
            270
          </span>
          <span className="text-[0.6875rem] text-white/35">upvotes</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-accent" />
        </div>
        <div className="mt-2 text-[0.625rem] text-white/30">
          Most upvoted recently
        </div>
      </GlassNote>
    </div>
  );
}

/* ================================================================ 02 communities */

const communityCards = [
  {
    label: "Campus",
    name: "IIT Delhi · CSE",
    meta: "1,248 members",
    initials: "IIT",
    action: "Joined",
    joined: true,
  },
  {
    label: "Interest",
    name: "Systems Design Club",
    meta: "8,402 members",
    initials: "SD",
    action: "Join",
    joined: false,
  },
  {
    label: "Global",
    name: "DevDen Community",
    meta: "24.8k members",
    initials: "DC",
    action: "Joined",
    joined: true,
  },
];

export function CommunitiesVisual() {
  return (
    <div className="relative mx-auto min-h-[620px] w-full max-w-[640px] lg:min-h-[660px]">
      <div
        aria-hidden="true"
        className="absolute right-0 top-8 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,90,30,.16),transparent_66%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto w-[288px] rotate-[2.2deg] transition-transform duration-700 hover:rotate-0 hover:scale-[1.01] lg:ml-auto lg:mr-2 lg:w-[296px]">
        <Phone>
          <CommunitiesScreen />
        </Phone>
      </div>

      <div className="relative z-20 mx-auto mt-10 grid max-w-[560px] gap-3 sm:grid-cols-3 lg:hidden">
        {communityCards.map((card) => (
          <CommunityCard key={card.name} {...card} />
        ))}
      </div>

      <div className="absolute -left-2 top-[13%] z-20 hidden w-[232px] -rotate-2 lg:block">
        <CommunityCard {...communityCards[0]} />
      </div>
      <div className="absolute -left-6 bottom-[16%] z-20 hidden w-[218px] rotate-[1.6deg] lg:block">
        <CommunityCard {...communityCards[1]} />
      </div>
    </div>
  );
}

function CommunityCard({
  label,
  name,
  meta,
  initials,
  action,
  joined,
}: {
  label: string;
  name: string;
  meta: string;
  initials: string;
  action: string;
  joined: boolean;
}) {
  return (
    <div className="rounded-2xl border border-black/[0.07] bg-white/95 p-4 shadow-[0_20px_50px_rgba(40,28,18,.10)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {label}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[0.5625rem] font-medium ${
            joined ? "bg-black/[0.045] text-black/40" : "bg-accent/10 text-accent"
          }`}
        >
          {action}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fbf0e7] text-[0.625rem] font-semibold tracking-[-0.02em] text-[#b5541b]">
          {initials}
        </span>
        <div className="min-w-0">
          <div className="truncate text-[0.8125rem] font-semibold tracking-[-0.02em]">
            {name}
          </div>
          <div className="mt-0.5 text-[0.6875rem] text-black/40">{meta}</div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================ 03 progress */

const platformRows = [
  { short: "LC", name: "LeetCode", value: "2,418", unit: "solved", pct: 82, tint: "bg-[#fdf0e4] text-[#c2510e]" },
  { short: "CF", name: "Codeforces", value: "1842", unit: "Expert", pct: 64, tint: "bg-[#e9eefb] text-[#3457b2]" },
  { short: "CC", name: "CodeChef", value: "1734", unit: "3 star", pct: 57, tint: "bg-[#f2ede5] text-[#7b5a33]" },
  { short: "AC", name: "AtCoder", value: "1128", unit: "Green", pct: 41, tint: "bg-[#e8f2ec] text-[#31704e]" },
];

export function ProgressVisual() {
  return (
    <div className="relative mx-auto max-w-[610px] px-1 py-8">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,30,.13),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0e0e11] p-5 shadow-[0_40px_100px_rgba(0,0,0,.6)] sm:p-7">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,.05),transparent)]" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div>
              <div className="text-[0.625rem] uppercase tracking-[0.17em] text-white/35">
                Developer record
              </div>
              <div className="mt-0.5 text-[0.75rem] text-white/60">@devden</div>
            </div>
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.5625rem] text-white/40">
            Synced 2h ago
          </span>
        </div>

        <div className="relative mt-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-[0.5625rem] uppercase tracking-[0.17em] text-white/35">
              Codeforces rating
            </div>
            <div className="mt-2 flex items-baseline gap-2.5">
              <span className="text-[3.1rem] font-semibold leading-none tracking-[-0.055em] sm:text-[3.5rem]">
                1842
              </span>
              <span className="rounded-full bg-[#3ddc84]/10 px-2 py-0.5 text-[0.6875rem] font-medium text-[#66e29c]">
                +38
              </span>
            </div>
            <div className="mt-2 text-[0.6875rem] text-white/35">
              Expert · peak 1,978
            </div>
          </div>
          <div className="hidden w-[46%] shrink-0 pb-1 sm:block">
            <Sparkline className="text-accent" fill />
          </div>
        </div>

        <div className="relative mt-7 space-y-0.5">
          {platformRows.map((row) => (
            <div
              key={row.short}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-white/[0.06] py-2.5 first:border-t-0"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-lg text-[0.5625rem] font-bold tracking-[-0.02em] ${row.tint}`}
              >
                {row.short}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[0.75rem] text-white/65">{row.name}</span>
                  <span className="text-[0.5625rem] text-white/25 sm:hidden">
                    {row.value} {row.unit}
                  </span>
                </div>
                <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#ff8a4f] to-accent"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
              <div className="hidden text-right sm:block">
                <div className="text-[1rem] font-semibold leading-none tracking-[-0.03em]">
                  {row.value}
                </div>
                <div className="mt-1 text-[0.5625rem] text-white/30">{row.unit}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-6 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[0.5625rem] uppercase tracking-[0.17em] text-white/35">
              This year
            </div>
            <div className="mt-2.5">
              <Heatmap dark pixel cols={22} rows={7} cell={7} gap={2.6} />
            </div>
          </div>
          <div className="sm:text-right">
            <div className="flex items-center gap-1.5 text-[1.5rem] font-semibold leading-none tracking-[-0.04em] sm:justify-end">
              <span className="text-accent">
                <FlameGlyph size={18} />
              </span>
              128
            </div>
            <div className="mt-1 text-[0.6875rem] text-white/35">day streak</div>
          </div>
        </div>
      </div>

      <div className="absolute -top-1 right-4 z-20 rounded-full border border-accent/30 bg-[#160f0c] px-3 py-1.5 text-[0.625rem] font-medium text-accent shadow-[0_10px_30px_rgba(0,0,0,.4)]">
        Top 2% this week
      </div>
    </div>
  );
}

/* ================================================================ 04 discussions */

export function DiscussionVisual() {
  return (
    <div className="relative flex min-h-[660px] items-center justify-center px-2 py-6">
      <div
        aria-hidden="true"
        className="absolute inset-x-2 bottom-10 top-10 rounded-[40px] border border-black/[0.055] bg-[linear-gradient(170deg,#fbf8f2,#f4efe6)]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[40px]">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/[0.07]" />
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.05]" />
        </div>
      </div>

      <div className="relative z-10 w-[284px] sm:w-[300px]">
        <Phone>
          <DoubtsScreen />
        </Phone>
      </div>

      <LightNote className="absolute -left-5 bottom-[9%] z-20 hidden w-[208px] -rotate-1 lg:block xl:-left-7">
        <div className="flex items-center gap-1.5 text-[0.5625rem] font-semibold uppercase tracking-[0.14em] text-[#1d8f55]">
          <CheckBadge size={13} /> Accepted answer
        </div>
        <p className="mt-2 text-[0.75rem] leading-snug text-black/65">
          “Path compression alone is enough. Union by rank only changes the shape of
          the tree — not the asymptotic bound.”
        </p>
        <div className="mt-3 flex items-center gap-2 border-t border-black/[0.06] pt-2.5">
          <MiniAvatar initials="B" className="h-5 w-5 text-[0.5625rem]" />
          <span className="text-[0.625rem] text-black/40">@batsy · 12 min ago</span>
        </div>
      </LightNote>

      <div className="absolute right-1 top-[17%] z-20 hidden rounded-full border border-black/[0.08] bg-white px-3 py-1.5 text-[0.625rem] text-black/45 shadow-sm lg:block">
        #system-design
      </div>
    </div>
  );
}

/* ================================================================ 05 interview teaser */

export function InterviewVisual() {
  return (
    <div className="relative flex min-h-[680px] items-center justify-center px-2 py-6">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 top-8 overflow-hidden rounded-[38px] border border-white/[0.07] bg-[#0b0b0e]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,90,30,.24),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{ backgroundImage: dotGrid, backgroundSize: "30px 30px" }}
        />
        <div className="absolute left-1/2 top-1/2 h-[580px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/[0.05]" />
      </div>

      <div className="relative z-10 w-[286px] sm:w-[300px]">
        <Phone>
          <ExperiencesScreen />
        </Phone>
      </div>

      <GlassNote className="absolute left-0 top-[14%] z-20 hidden w-[196px] lg:block xl:-left-2">
        <div className="flex items-center justify-between">
          <span className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
            Outcome
          </span>
          <span className="rounded-full bg-[#3ddc84]/10 px-2 py-0.5 text-[0.5625rem] font-medium text-[#66e29c]">
            Selected
          </span>
        </div>
        <div className="mt-2 text-[0.9375rem] font-semibold tracking-[-0.02em]">
          Nimbus Labs
        </div>
        <div className="mt-0.5 text-[0.6875rem] text-white/35">SDE-1 · 2025</div>
        <div className="mt-3 flex items-center gap-1.5 text-[0.625rem] text-white/45">
          <span className="h-1 w-1 rounded-full bg-accent" /> 2 rounds documented
        </div>
      </GlassNote>

      <GlassNote className="absolute bottom-[13%] right-0 z-20 hidden w-[186px] lg:block xl:-right-2">
        <div className="text-[0.5625rem] uppercase tracking-[0.16em] text-white/35">
          Community signal
        </div>
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-[1.5rem] font-semibold leading-none tracking-[-0.04em]">
            31
          </span>
          <span className="text-[0.625rem] text-white/35">upvotes</span>
        </div>
        <p className="mt-2 text-[0.6875rem] leading-snug text-white/45">
          “The OA was harder than the rounds. Practice timed sets.”
        </p>
        <div className="mt-2.5 text-[0.5625rem] text-white/25">— @kartik, Flipkart</div>
      </GlassNote>
    </div>
  );
}

/* ================================================================ 06 canvas */

const cursorLabel =
  "rounded-md px-1.5 py-0.5 text-[0.5625rem] font-medium text-white shadow-sm";

export function CanvasVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[660px] py-6">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,90,30,.12),transparent_68%)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0b0e] shadow-[0_40px_100px_rgba(24,18,12,.28)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="truncate text-[0.75rem] font-medium text-white/75">
              two-sum.canvas
            </span>
            <span className="hidden text-[0.625rem] text-white/25 sm:inline">
              Edited just now
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center">
              <MiniAvatar
                initials="M"
                tone="ink"
                className="h-6 w-6 border-2 border-[#0b0b0e] text-[0.5625rem]"
              />
              <MiniAvatar
                initials="A"
                tone="ink"
                className="-ml-2 h-6 w-6 border-2 border-[#0b0b0e] text-[0.5625rem]"
              />
            </div>
            <span className="rounded-full bg-white/[0.08] px-3 py-1 text-[0.625rem] text-white/60">
              Share
            </span>
          </div>
        </div>

        <div className="relative h-[420px] overflow-hidden sm:h-[466px]">
          <div
            className="absolute inset-0 opacity-50"
            style={{ backgroundImage: dotGrid, backgroundSize: "22px 22px" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,.04),transparent_70%)]" />

          <svg
            viewBox="0 0 700 466"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* array */}
            <text x="58" y="70" fill="rgba(255,255,255,.32)" fontSize="11" fontFamily="ui-monospace, monospace">
              nums
            </text>
            {[2, 7, 11, 15].map((v, i) => (
              <g key={v}>
                <rect
                  x={58 + i * 72}
                  y="86"
                  width="62"
                  height="62"
                  rx="8"
                  fill={i === 0 ? "rgba(255,90,30,.14)" : "rgba(255,255,255,.035)"}
                  stroke={i === 0 ? "rgba(255,90,30,.85)" : "rgba(255,255,255,.18)"}
                  strokeWidth="1.4"
                />
                <text
                  x={89 + i * 72}
                  y="125"
                  textAnchor="middle"
                  fill={i === 0 ? "#ff8a4f" : "rgba(255,255,255,.7)"}
                  fontSize="22"
                  fontFamily="-apple-system, sans-serif"
                  fontWeight="500"
                >
                  {v}
                </text>
                <text
                  x={89 + i * 72}
                  y="170"
                  textAnchor="middle"
                  fill="rgba(255,255,255,.3)"
                  fontSize="10"
                  fontFamily="ui-monospace, monospace"
                >
                  {i}
                </text>
              </g>
            ))}

            <path
              d="M58 200h214"
              stroke="rgba(255,90,30,.6)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <text x="58" y="222" fill="rgba(255,255,255,.35)" fontSize="11">
              i = 0 · need 7
            </text>

            {/* arrow to map */}
            <path
              d="M290 122c52 0 52 34 98 34"
              stroke="rgba(255,90,30,.55)"
              strokeWidth="1.6"
              strokeDasharray="4 5"
              strokeLinecap="round"
            />
            <path
              d="m379 150 9 6-9 6"
              stroke="rgba(255,90,30,.75)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* hash map */}
            <rect
              x="398"
              y="72"
              width="232"
              height="150"
              rx="12"
              fill="rgba(255,255,255,.025)"
              stroke="rgba(255,255,255,.14)"
              strokeWidth="1.2"
            />
            <text x="416" y="98" fill="rgba(255,255,255,.32)" fontSize="10" fontFamily="ui-monospace, monospace">
              seen
            </text>
            <rect x="416" y="110" width="88" height="28" rx="7" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.15)" />
            <text x="460" y="129" textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="11" fontFamily="ui-monospace, monospace">
              2 → 0
            </text>
            <text x="416" y="168" fill="rgba(255,255,255,.25)" fontSize="10">
              complement = target − x
            </text>
            <text x="416" y="188" fill="rgba(255,90,30,.8)" fontSize="10" fontFamily="ui-monospace, monospace">
              target = 9
            </text>

            {/* note */}
            <rect
              x="58"
              y="270"
              width="252"
              height="96"
              rx="10"
              fill="rgba(255,255,255,.03)"
              stroke="rgba(255,255,255,.12)"
              strokeDasharray="5 5"
            />
            <text x="76" y="296" fill="rgba(255,255,255,.55)" fontSize="12">
              O(n) time · O(n) space
            </text>
            <text x="76" y="318" fill="rgba(255,255,255,.3)" fontSize="11">
              one pass, hash what you&apos;ve seen
            </text>
            <path d="M76 336h96" stroke="rgba(255,90,30,.5)" strokeWidth="1.4" strokeLinecap="round" />

            {/* little flow */}
            <g opacity=".8">
              <circle cx="452" cy="322" r="22" stroke="rgba(123,192,154,.75)" strokeWidth="1.4" />
              <text x="452" y="327" textAnchor="middle" fill="rgba(255,255,255,.6)" fontSize="11">
                n
              </text>
              <path
                d="M474 322h44"
                stroke="rgba(255,255,255,.25)"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="542" cy="322" r="22" stroke="rgba(255,255,255,.2)" strokeWidth="1.4" />
              <text x="542" y="327" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="11">
                n−1
              </text>
              <text x="452" y="368" fill="rgba(255,255,255,.25)" fontSize="10">
                recursion depth
              </text>
            </g>
          </svg>

          {/* live cursors */}
          <div className="absolute left-[38%] top-[46%] z-10">
            <div style={{ animation: "cursor-a 13s ease-in-out infinite" }}>
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path d="M1 1.2 13.4 8 7.6 9.9 5.5 16.7 1 1.2Z" fill="#ff5a1e" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
              </svg>
              <span className={`${cursorLabel} ml-3 -mt-1 inline-block bg-accent`}>Maya</span>
            </div>
          </div>
          <div className="absolute right-[30%] top-[30%] z-10">
            <div style={{ animation: "cursor-b 16s ease-in-out infinite" }}>
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
                <path d="M1 1.2 13.4 8 7.6 9.9 5.5 16.7 1 1.2Z" fill="#7bc09a" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
              </svg>
              <span className={`${cursorLabel} ml-3 -mt-1 inline-block bg-[#4f8a6b]`}>Arjun</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-full border border-white/10 bg-[#151518]/90 px-4 py-2.5 text-white/60 backdrop-blur-md">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="m4 16 4.5-1 7-7a1.8 1.8 0 0 0 0-2.5L14 4a1.8 1.8 0 0 0-2.5 0l-7 7L3.5 15.5 4 16Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-5 right-4 text-[0.5625rem] text-white/25">
            100%
          </div>
        </div>
      </div>
    </div>
  );
}


