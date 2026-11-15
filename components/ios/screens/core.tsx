import { Avatar, NavBar, StatusBar, type TabKey } from "@/components/ios/ui";
import { u } from "@/components/ios/units";
import {
  BackGlyph,
  BuildingGlyph,
  ChevronRight,
  CodeGlyph,
  PlusGlyph,
  ScribbleGlyph,
} from "@/components/icons";
import { AtomGlyph, UndoGlyph, WaveformGlyph } from "./art";

type Props = { onTab?: (key: TabKey) => void };

/* ================================================================ Canvas */

export function CanvasScreen({ onTab }: Props) {
  return (
    <>
      <StatusBar time="4:38" />
      <div
        className="i-px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: u(2),
        }}
      >
        <button
          type="button"
          className="i-circle"
          onClick={() => onTab?.("feed")}
          aria-label="Back to feed"
          style={{ cursor: onTab ? "pointer" : "default" }}
        >
          <BackGlyph size={20} />
        </button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: u(18),
            height: u(42),
            paddingInline: u(18),
            borderRadius: 999,
            border: "1px solid #ececec",
          }}
        >
          <UndoGlyph size={19} />
          <UndoGlyph size={19} flip />
          <EllipsisGlyph />
        </div>
      </div>

      <div className="i-px" style={{ paddingTop: u(26) }}>
        <h1
          style={{
            fontSize: u(38),
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 1,
          }}
        >
          Two Sum
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: u(28),
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: u(6),
              color: "#f4510d",
              fontSize: u(16),
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            <CodeGlyph size={17} /> Swift
          </span>
          <CopyGlyph />
        </div>

        <pre
          className="i-mono"
          style={{
            margin: u(14) + " 0 0",
            fontSize: u(13.5),
            lineHeight: 1.62,
            color: "#1b1b1e",
          }}
        >
          <span style={{ color: "#7c3aed" }}>arr1</span>
          <span style={{ color: "#6b6b72" }}> = </span>
          <span style={{ color: "#2563eb" }}>[1, 2, 3, 4, 5]</span>
          {"\n"}
          <span style={{ color: "#a16207" }}>target</span>
          <span style={{ color: "#6b6b72" }}> = </span>
          <span style={{ color: "#2563eb" }}>7</span>
        </pre>

        <div
          style={{
            marginTop: u(22),
            borderRadius: u(16),
            background: "#f7f7f8",
            padding: u(14),
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: u(7),
                color: "#4a4a4f",
                fontSize: u(16),
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              <GridGlyph /> Array
            </span>
            <span
              style={{
                height: u(25),
                paddingInline: u(10),
                borderRadius: 999,
                background: "#e9e9eb",
                color: "#6a6a70",
                fontSize: u(11.5),
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              2D
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: u(7),
              marginTop: u(14),
            }}
          >
            {[1, 2, 3, 4, 5].map((value, i) => (
              <div key={value} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: u(12),
                    color: "#9b9ba1",
                    marginBottom: u(5),
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {i}
                </div>
                <div
                  style={{
                    height: u(46),
                    borderRadius: u(3),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: u(19),
                    fontWeight: 500,
                    border: "1px solid",
                    borderColor: i === 3 ? "#f4510d" : "#dededf",
                    background: i === 3 ? "#fff3eb" : "#ededee",
                    color: "#17171a",
                    boxShadow: i === 3 ? "0 0 0 3px rgba(244,81,13,.08)" : "none",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: u(20),
          bottom: u(24),
          height: u(58),
          paddingInline: u(20),
          borderRadius: 999,
          border: "1px solid #ececec",
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(16px)",
          display: "flex",
          alignItems: "center",
          gap: u(20),
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <AtomGlyph size={23} />
        <CodeGlyph size={23} />
        <ScribbleGlyph size={23} />
        <PlusGlyph size={21} />
      </div>
      <span
        className="i-circle"
        style={{
          position: "absolute",
          right: u(20),
          bottom: u(24),
          width: u(58),
          height: u(58),
          boxShadow: "0 8px 24px rgba(0,0,0,.06)",
        }}
      >
        <WaveformGlyph size={24} />
      </span>
    </>
  );
}

/* ================================================================ Experiences */

const experiences = [
  { company: "Amazon", role: "SDE Intern", year: "2026", author: "@devden", rounds: 2, votes: 19, status: "Selected" },
  { company: "Google", role: "SDE-2", year: "2025", author: "Anonymous", rounds: 3, votes: 1, status: "Rejected" },
  { company: "Nimbus Labs", role: "SDE-1", year: "2025", author: "@batsy", rounds: 2, votes: 9, status: "Selected" },
  { company: "Flipkart", role: "SDE-2", year: "2026", author: "@kartik", rounds: 2, votes: 31, status: "Pending" },
  { company: "Microsoft", role: "SDE Intern", year: "2025", author: "Anonymous", rounds: 2, votes: 19, status: "Rejected" },
  { company: "Amazon", role: "SDE-1", year: "2026", author: "@priyanshu_rathour", rounds: 4, votes: 20, status: "Selected" },
];

const statusColor: Record<string, string> = {
  Selected: "#20b85c",
  Rejected: "#f0353b",
  Pending: "#ef8a17",
};

export function ExperiencesScreen() {
  return (
    <>
      <StatusBar time="4:39" />
      <NavBar title="Experiences" />
      <div className="i-scroll">
        <div className="i-px" style={{ marginTop: u(2) }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: u(14),
              paddingBlock: u(12),
              color: "#f4510d",
            }}
          >
            <BuildingGlyph size={26} />
            <span
              style={{
                flex: 1,
                fontSize: u(19),
                fontWeight: 500,
                letterSpacing: "-0.025em",
                color: "#0a0a0b",
              }}
            >
              All Companies
            </span>
            <span style={{ color: "#c4c4c9" }}>
              <ChevronRight size={18} />
            </span>
          </div>
          <div className="i-hair" />

          {experiences.map((item, i) => (
            <div
              key={`${item.company}-${i}`}
              style={{ paddingBlock: u(15), borderBottom: "1px solid #ececec" }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontSize: u(20),
                    fontWeight: 700,
                    letterSpacing: "-0.032em",
                  }}
                >
                  {item.company}
                </span>
                <span
                  style={{
                    fontSize: u(14),
                    fontWeight: 600,
                    color: statusColor[item.status],
                  }}
                >
                  {item.status}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: u(2),
                }}
              >
                <span style={{ fontSize: u(16.5), color: "#8a8a90", letterSpacing: "-0.02em" }}>
                  {item.role} · {item.year}
                </span>
                <span style={{ color: "#c4c4c9" }}>
                  <ChevronRight size={16} />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: u(9),
                  marginTop: u(7),
                  fontSize: u(13.5),
                  color: "#8a8a90",
                }}
              >
                <span>{item.author}</span>
                <span>·</span>
                <span>{item.rounds} rounds</span>
                <span>·</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: u(4) }}>
                  <UpArrow /> {item.votes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: u(96),
          background: "linear-gradient(to top, #fff 40%, rgba(255,255,255,0))",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

function UpArrow() {
  return (
    <svg width="13" height="15" viewBox="0 0 14 16" fill="none" aria-hidden="true">
      <path
        d="M7 14V2.5M7 2.5 2.8 6.7M7 2.5l4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ================================================================ Communities */

export function CommunitiesScreen() {
  return (
    <>
      <StatusBar time="4:35" />
      <div className="i-scroll">
        <div className="i-px" style={{ paddingTop: u(4) }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 className="i-large">Communities</h1>
            <span className="i-circle">
              <PlusGlyph size={20} />
            </span>
          </div>

          <div style={{ marginTop: u(16) }}>
            <div
              style={{
                borderRadius: u(20),
                padding: u(16),
                background: "linear-gradient(150deg, #17171a 0%, #26262b 100%)",
                color: "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: u(10) }}>
                <Avatar initials="DC" size={40} tone="solid" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: u(17), fontWeight: 600, letterSpacing: "-0.025em" }}>
                    DevDen Community
                  </div>
                  <div style={{ fontSize: u(12.5), color: "rgba(255,255,255,.55)", marginTop: u(1) }}>
                    24.8k developers · 312 online
                  </div>
                </div>
                <span
                  style={{
                    height: u(30),
                    paddingInline: u(12),
                    borderRadius: 999,
                    background: "rgba(255,255,255,.12)",
                    border: "1px solid rgba(255,255,255,.16)",
                    fontSize: u(12.5),
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Joined
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: u(6),
                  marginTop: u(14),
                  fontSize: u(12),
                  color: "rgba(255,255,255,.62)",
                }}
              >
                {["#swift", "#system-design", "#dsa"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      height: u(24),
                      paddingInline: u(9),
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,.14)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="i-title3" style={{ marginTop: u(22) }}>
            Your spaces
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: u(10), marginTop: u(12) }}>
            <CommunityRow
              initials="IIT"
              tone={2}
              name="IIT Delhi · CSE"
              meta="1,248 members · Campus"
              joined
            />
            <CommunityRow
              initials="SD"
              tone={1}
              name="Systems Design Club"
              meta="8,402 members · Interest"
            />
            <CommunityRow
              initials="OS"
              tone={4}
              name="Open Source India"
              meta="12.6k members · Global"
            />
            <CommunityRow
              initials="CP"
              tone={3}
              name="Competitive Programming"
              meta="6.1k members · Interest"
            />
          </div>

          <div className="i-title3" style={{ marginTop: u(22) }}>
            Suggested for you
          </div>
          <div
            className="i-card"
            style={{ marginTop: u(12), padding: u(13), display: "flex", alignItems: "center", gap: u(12) }}
          >
            <div
              style={{
                width: u(58),
                height: u(44),
                borderRadius: u(10),
                background: "linear-gradient(140deg,#ffe1cf,#f7b892)",
                flex: "none",
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: u(15), fontWeight: 600, letterSpacing: "-0.02em" }}>
                Interview Prep Circle
              </div>
              <div className="i-sub" style={{ fontSize: u(12.5), marginTop: u(2) }}>
                3.4k members · Weekly mocks
              </div>
            </div>
            <span className="i-chip" style={{ height: u(32), fontWeight: 600 }}>
              Join
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function CommunityRow({
  initials,
  tone,
  name,
  meta,
  joined = false,
}: {
  initials: string;
  tone: number;
  name: string;
  meta: string;
  joined?: boolean;
}) {
  return (
    <div
      className="i-card"
      style={{ padding: u(12), display: "flex", alignItems: "center", gap: u(11) }}
    >
      <Avatar initials={initials} size={38} tone={tone} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: u(15), fontWeight: 600, letterSpacing: "-0.02em" }}>{name}</div>
        <div className="i-sub" style={{ fontSize: u(12.5), marginTop: u(1) }}>
          {meta}
        </div>
      </div>
      <span
        className="i-chip"
        style={{
          height: u(30),
          fontSize: u(12.5),
          fontWeight: 600,
          ...(joined
            ? { borderColor: "#ececec", color: "#8a8a90" }
            : { borderColor: "#f4510d", color: "#f4510d" }),
        }}
      >
        {joined ? "Joined" : "Join"}
      </span>
    </div>
  );
}

function GridGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.6" y="1.6" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.4" y="1.6" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1.6" y="10.4" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.4" y="10.4" width="6" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CopyGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="6.5" y="6.5" width="10" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M13.5 4.2A2 2 0 0 0 11.6 3H6.2A2.2 2.2 0 0 0 4 5.2v7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EllipsisGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}
