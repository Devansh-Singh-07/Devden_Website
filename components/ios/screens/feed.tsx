import { Avatar, NavBar, Segmented, StatusBar, TabBar, type TabKey } from "@/components/ios/ui";
import { u } from "@/components/ios/units";
import {
  BookmarkGlyph,
  CheckBadge,
  ChevronRight,
  CommentGlyph,
  ComposeGlyph,
  SearchGlyph,
  SendGlyph,
  SparkGlyph,
  UpvoteGlyph,
} from "@/components/icons";
import { BriefcaseGlyph, LibraryArt } from "./art";

type ScreenProps = { onTab?: (key: TabKey) => void };

/* ================================================================ For You */

export function ForYouScreen({ onTab }: ScreenProps) {
  return (
    <>
      <StatusBar time="4:35" />
      <div className="i-scroll">
        <div className="i-px" style={{ paddingTop: u(2) }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 className="i-large">For You</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: u(11),
                height: u(48),
                paddingInline: u(13),
                borderRadius: 999,
                border: "1px solid #ececec",
                boxShadow: "0 1px 2px rgba(0,0,0,.035)",
              }}
            >
              <ComposeGlyph size={22} />
              <Avatar initials="DS" size={30} tone={0} />
            </div>
          </div>

          <div className="i-title3" style={{ marginTop: u(16) }}>
            Prep
          </div>

          <div style={{ display: "flex", gap: u(12), marginTop: u(12) }}>
            <PrepCard
              eyebrow="Campus Q&A"
              title="Doubts"
              subtitle="Ask your campus"
              watermark="?"
            />
            <PrepCard
              eyebrow="Placements"
              title="Interviews"
              subtitle="What companies asked"
              watermark="case"
            />
          </div>

          <div style={{ display: "flex", gap: u(9), marginTop: u(18) }}>
            {["All", "Image", "Canvas", "Text"].map((chip, i) => (
              <span key={chip} className={`i-chip ${i === 0 ? "is-active" : ""}`}>
                {chip}
              </span>
            ))}
          </div>

          <div className="i-title" style={{ marginTop: u(24) }}>
            Top Posts
          </div>
          <div className="i-sub" style={{ marginTop: u(3) }}>
            Most upvoted recently.
          </div>

          <article
            className="i-card"
            style={{ marginTop: u(14), padding: u(10), borderRadius: u(20) }}
          >
            <div
              style={{
                aspectRatio: "1.72 / 1",
                borderRadius: u(13),
                overflow: "hidden",
                background: "#2a1a12",
              }}
            >
              <LibraryArt />
            </div>
            <h3
              className="i-headline"
              style={{
                paddingInline: u(4),
                marginTop: u(12),
                fontSize: u(17.5),
                letterSpacing: "-0.028em",
              }}
            >
              Found this gem in the library
            </h3>
            <div
              className="i-sub"
              style={{
                paddingInline: u(4),
                marginTop: u(7),
                display: "flex",
                alignItems: "center",
                gap: u(6),
                fontSize: u(13),
              }}
            >
              <Avatar initials="D" size={20} tone={0} />
              <span style={{ color: "#2a2a2c", fontWeight: 600 }}>devden</span>
              <span>· DevDen Community · 1 mo ago</span>
            </div>
            <div style={{ display: "flex", gap: u(8), marginTop: u(12), paddingInline: u(2) }}>
              <SocialPill icon={<UpvoteGlyph size={16} />} label="270" />
              <SocialPill icon={<CommentGlyph size={16} />} label="0" />
              <SocialPill icon={<SendGlyph size={16} />} label="" />
            </div>
          </article>

          <div className="i-title" style={{ marginTop: u(24) }}>
            Communities to Join
          </div>
          <div
            className="i-card"
            style={{
              marginTop: u(12),
              padding: u(14),
              display: "flex",
              alignItems: "center",
              gap: u(12),
              borderRadius: u(20),
            }}
          >
            <Avatar initials="DC" size={44} tone={1} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="i-headline">DevDen Community</div>
              <div className="i-sub" style={{ marginTop: u(2), fontSize: u(12.5) }}>
                24.8k developers · Global
              </div>
            </div>
            <span
              className="i-chip"
              style={{ height: u(32), borderColor: "#f4510d", color: "#f4510d", fontWeight: 600 }}
            >
              Join
            </span>
          </div>
        </div>
      </div>
      <TabBar active="feed" onChange={onTab} />
    </>
  );
}

function PrepCard({
  eyebrow,
  title,
  subtitle,
  watermark,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  watermark: "?" | "case";
}) {
  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        borderRadius: u(20),
        height: u(132),
        background: "linear-gradient(152deg, #fdf2ea 0%, #fbe5d6 100%)",
        padding: u(13),
      }}
    >
      <div className="i-micro" style={{ color: "#f4510d", fontSize: u(9.5), letterSpacing: "0.07em" }}>
        {eyebrow}
      </div>
      <div
        style={{
          fontSize: u(21),
          fontWeight: 700,
          letterSpacing: "-0.032em",
          marginTop: u(5),
          position: "relative",
          zIndex: 2,
        }}
      >
        {title}
      </div>
      <div
        className="i-sub"
        style={{ marginTop: u(2), fontSize: u(12.5), position: "relative", zIndex: 2 }}
      >
        {subtitle}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: u(-10),
          bottom: u(-12),
          width: u(62),
          height: u(62),
          borderRadius: u(16),
          background: "#f9c9ae",
          opacity: 0.62,
          transform: "rotate(-7deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: u(42),
          fontWeight: 700,
        }}
      >
        {watermark === "?" ? (
          "?"
        ) : (
          <BriefcaseGlyph size={34} />
        )}
      </div>
    </div>
  );
}

function SocialPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: u(7),
        height: u(34),
        paddingInline: u(13),
        borderRadius: 999,
        border: "1px solid #ebebe9",
        fontSize: u(14),
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      {icon}
      {label && <span style={{ minWidth: u(8) }}>{label}</span>}
    </span>
  );
}

/* ================================================================ Doubts */

const doubts = [
  {
    title: "SwiftData vs Core Data for a small side project in 2026",
    tags: ["swift", "ios"],
    author: "@priyanshu_rathour",
    meta: "1 answer · 1 mo ago",
  },
  {
    title: "Binary search on answer — how do I know when a problem wants this pattern?",
    tags: ["arrays", "greedy"],
    author: "@batsy",
    meta: "1 answer · 1 mo ago",
    solved: true,
  },
  {
    title: "How do you approach 'design a rate limiter' system design questions?",
    tags: ["system-design"],
    author: "@kartik",
    meta: "1 answer · 1 mo ago",
    solved: true,
  },
  {
    title: "Union-Find (DSU) — is path compression alone enough, or do I need union by rank?",
    tags: ["graphs"],
    author: "@devden",
    meta: "1 answer · 1 mo ago",
  },
  {
    title: "Debugging a retain cycle in a closure-heavy SwiftUI view model",
    tags: ["swift", "ios"],
    author: "@priyanshu_rathour",
    meta: "3 answers · 2 mo ago",
    solved: true,
  },
  {
    title: "Trie vs HashMap for autocomplete — when is the extra memory worth it?",
    tags: ["strings", "trees"],
    author: "@anonymous",
    meta: "2 answers · 2 mo ago",
    solved: true,
  },
];

export function DoubtsScreen({ onTab }: ScreenProps) {
  return (
    <>
      <StatusBar time="4:39" />
      <NavBar title="Doubts" />
      <div className="i-hair" style={{ marginInline: u(20), marginTop: u(2) }} />
      <div className="i-scroll">
        <div className="i-px" style={{ paddingTop: u(12) }}>
          <Segmented items={["My Campus", "Everyone"]} active={1} />

          <div style={{ marginTop: u(6) }}>
            {doubts.map((item) => (
              <div key={item.title} className="i-list-row">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: u(17.5),
                      fontWeight: 600,
                      letterSpacing: "-0.026em",
                      lineHeight: 1.32,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ display: "flex", gap: u(6), marginTop: u(8) }}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="i-tagpill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="i-sub"
                    style={{ marginTop: u(7), fontSize: u(13) }}
                  >
                    {item.author} · {item.meta}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: u(16),
                    paddingTop: u(2),
                    color: "#c9c9ce",
                  }}
                >
                  {item.solved ? (
                    <CheckBadge size={20} style={{ color: "#22b85c" }} />
                  ) : (
                    <span style={{ width: u(20), height: u(20) }} />
                  )}
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active="discussion" onChange={onTab} />
    </>
  );
}

/* ================================================================ Learn */

export function LearnScreen({ onTab }: ScreenProps) {
  return (
    <>
      <StatusBar time="4:38" />
      <div className="i-scroll">
        <div className="i-px">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: u(4),
            }}
          >
            <h1 className="i-large">Learn</h1>
            <span className="i-circle">
              <BookmarkGlyph size={20} />
            </span>
          </div>

          <div
            style={{
              marginTop: u(14),
              height: u(46),
              borderRadius: 999,
              border: "1px solid #ececec",
              display: "flex",
              alignItems: "center",
              gap: u(9),
              paddingInline: u(16),
              color: "#a3a3a8",
            }}
          >
            <SearchGlyph size={18} />
            <span style={{ fontSize: u(16), color: "#b0b0b6" }}>Search resources</span>
          </div>

          <div className="i-title" style={{ marginTop: u(24) }}>
            Top Picks
          </div>
          <div style={{ display: "flex", gap: u(12), marginTop: u(12), marginRight: u(-20) }}>
            <PickCard
              icon="pulse"
              title="Starting Your Codin..."
              source="DevDen"
              desc="Build real projects, master one language, and escape tutorial hell."
            />
            <PickCard
              icon="case"
              title="How to read a JD"
              source="DevDen"
              desc="The signals that actually matter before you apply."
            />
          </div>

          <div className="i-title" style={{ marginTop: u(24) }}>
            Categories
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: u(12),
              marginTop: u(12),
            }}
          >
            <CategoryCard icon="route" label={["DSA", "Fundamentals"]} />
            <CategoryCard icon="layers" label={["Data", "Structures"]} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginTop: u(24),
            }}
          >
            <div className="i-title">Articles</div>
            <span
              style={{
                color: "#f4510d",
                fontSize: u(14),
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: u(2),
              }}
            >
              See All <ChevronRight size={14} />
            </span>
          </div>

          <article
            style={{
              marginTop: u(12),
              borderRadius: u(20),
              border: "1px solid #ecebe8",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: u(14),
                background: "linear-gradient(150deg, #fff4ec 0%, #fde9dc 100%)",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: u(5),
                  height: u(26),
                  paddingInline: u(10),
                  borderRadius: 999,
                  border: "1px solid #f8c3a8",
                  color: "#f4510d",
                  fontSize: u(10),
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "rgba(255,255,255,.35)",
                }}
              >
                <SparkGlyph size={12} /> Getting Started
              </span>
              <div className="i-sub" style={{ marginTop: u(8), fontWeight: 500 }}>
                Developer Foundations
              </div>
              <span
                className="i-circle"
                style={{
                  position: "absolute",
                  top: u(12),
                  right: u(12),
                  width: u(36),
                  height: u(36),
                  background: "rgba(255,255,255,.82)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <BookmarkGlyph size={17} />
              </span>
              <Sparkles />
            </div>
            <div style={{ padding: u(14) }}>
              <h3 className="i-headline" style={{ fontSize: u(18), lineHeight: 1.24 }}>
                Starting Your Coding Journey: 5 Essential Tips
              </h3>
              <p
                className="i-sub"
                style={{ marginTop: u(6), fontSize: u(14), lineHeight: 1.4 }}
              >
                Build real projects, master one language, and escape tutorial hell.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: u(6),
                  marginTop: u(10),
                }}
              >
                <Avatar initials="M" size={20} tone={1} />
                <span className="i-sub" style={{ fontSize: u(12.5) }}>
                  Shared by <span style={{ color: "#3d3d42", fontWeight: 600 }}>Manisha</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <TabBar active="learn" onChange={onTab} />
    </>
  );
}

function Sparkles() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      style={{ position: "absolute", right: 14, bottom: 4, opacity: 0.85 }}
    >
      <path
        d="M30 8c.9 6.4 3.3 8.8 9.6 9.6-6.3.9-8.7 3.3-9.6 9.6-.9-6.3-3.3-8.7-9.6-9.6 6.3-.8 8.7-3.2 9.6-9.6Z"
        fill="#f7c9a9"
      />
      <path
        d="M48 30c.5 3.6 1.9 5 5.4 5.4-3.5.5-4.9 1.9-5.4 5.4-.5-3.5-1.9-4.9-5.4-5.4 3.5-.4 4.9-1.8 5.4-5.4Z"
        fill="#f4a476"
      />
      <circle cx="18" cy="40" r="1.8" fill="#f4b78f" />
      <circle cx="42" cy="14" r="1.2" fill="#f4b78f" />
    </svg>
  );
}

function PickCard({
  icon,
  title,
  source,
  desc,
}: {
  icon: "pulse" | "case";
  title: string;
  source: string;
  desc: string;
}) {
  return (
    <div
      className="i-card"
      style={{
        flex: "0 0 76%",
        padding: u(12),
        display: "flex",
        gap: u(12),
        borderRadius: u(20),
        height: u(126),
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: u(62),
          height: u(62),
          borderRadius: u(18),
          background: "linear-gradient(150deg,#fdf0e8,#fbe0cf)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
          color: "#f4510d",
        }}
      >
        {icon === "pulse" ? <PulseGlyph /> : <BriefcaseGlyph size={30} />}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontSize: u(16.5),
            fontWeight: 600,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: u(13),
            color: "#8a8a90",
            marginTop: u(4),
            fontWeight: 500,
          }}
        >
          {source}
        </div>
        <div
          style={{
            fontSize: u(12.5),
            color: "#8a8a90",
            lineHeight: 1.4,
            marginTop: u(4),
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ icon, label }: { icon: "route" | "layers"; label: string[] }) {
  return (
    <div
      className="i-card"
      style={{
        height: u(76),
        display: "flex",
        alignItems: "center",
        gap: u(10),
        paddingInline: u(12),
        borderRadius: u(18),
      }}
    >
      <div
        style={{
          width: u(38),
          height: u(38),
          borderRadius: u(11),
          background: "#fdeee5",
          color: "#f4510d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        {icon === "route" ? <RouteGlyph /> : <LayersGlyph />}
      </div>
      <div style={{ fontSize: u(15), fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.02em" }}>
        {label.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}

function PulseGlyph() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path
        d="M3 15.5h4.2l2.4-6.4 4 13.2 3.6-9.2 2.1 3.7H27"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 8.6v4.1a3 3 0 0 0 3 3h2.8a3 3 0 0 1 3 3v1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 3.5 8.2 4.2L12 12 3.8 7.7 12 3.5Z"
        fill="currentColor"
        opacity=".9"
      />
      <path
        d="m4.6 12 7.4 3.8 7.4-3.8M4.6 16.2 12 20l7.4-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
