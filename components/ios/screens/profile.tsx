import { Avatar, NavBar, StatusBar } from "@/components/ios/ui";
import { u } from "@/components/ios/units";
import { ChevronRight } from "@/components/icons";
import { EllipsisGlyphLocal } from "./glyphs";
import { Heatmap, Sparkline } from "./art";
import { FlameGlyph } from "@/components/icons";

const platforms = [
  { short: "LC", name: "LeetCode", value: "2,418", unit: "solved", tint: "#fdf0e4", ink: "#c2510e" },
  { short: "CF", name: "Codeforces", value: "1842", unit: "Expert", tint: "#e9eefb", ink: "#3457b2" },
  { short: "CC", name: "CodeChef", value: "1734", unit: "3 star", tint: "#f2ede5", ink: "#7b5a33" },
  { short: "AC", name: "AtCoder", value: "1128", unit: "Green", tint: "#e8f2ec", ink: "#31704e" },
];

export function ProfileScreen() {
  return (
    <>
      <StatusBar time="4:36" />
      <div
        className="i-px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: u(52),
        }}
      >
        <span className="i-circle">
          <ChevronRight size={20} style={{ transform: "rotate(180deg)" }} />
        </span>
        <span className="i-circle">
          <EllipsisGlyphLocal />
        </span>
      </div>

      <div className="i-scroll" style={{ paddingBottom: u(20) }}>
        <div className="i-px" style={{ paddingTop: u(4) }}>
          <div style={{ display: "flex", alignItems: "center", gap: u(14) }}>
            <Avatar
              initials="DS"
              size={76}
              tone={0}
              style={{ fontSize: u(28), letterSpacing: "-0.04em" }}
            />
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontSize: u(25), fontWeight: 700, letterSpacing: "-0.035em" }}>
                Devansh Singh
              </h1>
              <div className="i-sub" style={{ marginTop: u(3), fontSize: u(13.5) }}>
                @devden · IIT Delhi
              </div>
              <div
                style={{
                  marginTop: u(7),
                  display: "inline-flex",
                  alignItems: "center",
                  gap: u(5),
                  height: u(24),
                  paddingInline: u(9),
                  borderRadius: 999,
                  background: "#f4f4f5",
                  fontSize: u(11.5),
                  fontWeight: 600,
                  color: "#5f5f66",
                }}
              >
                CSE &apos;27
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: u(13),
              fontSize: u(14),
              lineHeight: 1.42,
              color: "#63636a",
              letterSpacing: "-0.012em",
            }}
          >
            Building tools for developers. Writing about the parts that are hard.
          </p>

          <div
            style={{
              marginTop: u(16),
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              border: "1px solid #ecebe9",
              borderRadius: u(16),
              paddingBlock: u(12),
              background: "#fcfbfa",
            }}
          >
            <Stat value="1842" label="Peak rating" />
            <Stat value="2,418" label="Problems" divider />
            <Stat value="128" label="Day streak" divider />
          </div>

          <div
            style={{
              marginTop: u(14),
              borderRadius: u(18),
              padding: u(14),
              background: "linear-gradient(150deg,#fff8f3 0%,#fdece1 100%)",
              border: "1px solid #f8ded0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: u(7) }}>
                <span style={{ color: "#f4510d" }}>
                  <FlameGlyph size={16} />
                </span>
                <span style={{ fontSize: u(13.5), fontWeight: 600, letterSpacing: "-0.015em" }}>
                  128 day streak
                </span>
              </div>
              <span style={{ fontSize: u(11.5), color: "#a1765f" }}>2026</span>
            </div>
            <div style={{ marginTop: u(10) }}>
              <Heatmap rows={7} cols={20} cell={7} gap={2.6} />
            </div>
            <div
              style={{
                marginTop: u(10),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: u(11.5), color: "#a1765f" }}>
                312 submissions this year
              </span>
              <span style={{ color: "#f4510d", display: "flex", alignItems: "center", gap: u(1) }}>
                <span style={{ fontSize: u(12), fontWeight: 600 }}>Activity</span>
                <ChevronRight size={12} />
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginTop: u(20),
            }}
          >
            <span className="i-title3">Platforms</span>
            <span style={{ fontSize: u(12.5), color: "#8a8a90" }}>Synced 2h ago</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: u(9),
              marginTop: u(11),
            }}
          >
            {platforms.map((p) => (
              <div
                key={p.short}
                className="i-card"
                style={{ padding: u(11), borderRadius: u(16) }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: u(7) }}>
                  <span
                    style={{
                      width: u(26),
                      height: u(26),
                      borderRadius: u(8),
                      background: p.tint,
                      color: p.ink,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: u(10.5),
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.short}
                  </span>
                  <span style={{ fontSize: u(12), color: "#77777e", fontWeight: 500 }}>
                    {p.name}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: u(4),
                    marginTop: u(7),
                  }}
                >
                  <span style={{ fontSize: u(19), fontWeight: 700, letterSpacing: "-0.03em" }}>
                    {p.value}
                  </span>
                  <span style={{ fontSize: u(11), color: "#9a9aa0" }}>{p.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="i-title3" style={{ marginTop: u(20) }}>
            Achievements
          </div>
          <div style={{ display: "flex", gap: u(7), marginTop: u(10), overflow: "hidden" }}>
            {["Top 2% weekly", "500 problems", "Contest 42"].map((a, i) => (
              <span
                key={a}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: u(5),
                  height: u(30),
                  paddingInline: u(10),
                  borderRadius: 999,
                  border: "1px solid #ecebe9",
                  fontSize: u(11.5),
                  fontWeight: 500,
                  color: i === 0 ? "#c2510e" : "#55555c",
                  background: i === 0 ? "#fff5ee" : "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: u(5),
                    height: u(5),
                    borderRadius: 999,
                    background: i === 0 ? "#f4510d" : "#c9c9ce",
                  }}
                />
                {a}
              </span>
            ))}
          </div>

          <div
            className="i-card"
            style={{
              marginTop: u(18),
              padding: u(12),
              display: "flex",
              alignItems: "center",
              gap: u(10),
            }}
          >
            <div style={{ display: "flex" }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    marginLeft: i === 0 ? 0 : u(-8),
                    border: `${u(2)} solid #fff`,
                    borderRadius: 999,
                    display: "inline-flex",
                  }}
                >
                  <Avatar
                    initials={["DC", "SD", "CP"][i]}
                    size={26}
                    tone={[1, 0, 4][i]}
                  />
                </span>
              ))}
            </div>
            <span style={{ flex: 1, fontSize: u(13), color: "#5c5c63" }}>
              4 communities · 12 discussions
            </span>
            <ChevronRight size={14} />
          </div>

          <div style={{ marginTop: u(16), opacity: 0.9 }}>
            <Sparkline
              points="0,32 12,30 24,33 36,26 48,27 60,21 72,24 84,16 96,18 108,10 120,13 132,6 144,8"
              height={34}
              width={144}
              stroke="#f4510d"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Stat({ value, label, divider }: { value: string; label: string; divider?: boolean }) {
  return (
    <div
      style={{
        textAlign: "center",
        borderLeft: divider ? "1px solid #ecebe9" : undefined,
      }}
    >
      <div style={{ fontSize: u(20), fontWeight: 700, letterSpacing: "-0.035em" }}>{value}</div>
      <div style={{ fontSize: u(10.5), color: "#8a8a90", marginTop: u(2), letterSpacing: 0 }}>
        {label}
      </div>
    </div>
  );
}
