import type { ReactNode } from "react";
import { u } from "@/components/ios/units";

/* A hand-drawn warm library scene, used as the photo in the feed post.
   Kept as vector art so it stays crisp and adds no network weight. */
export function LibraryArt({ className = "" }: { className?: string }) {
  const palette = [
    "#8a5a3c",
    "#c99064",
    "#e2b78d",
    "#6d4531",
    "#f0d2b2",
    "#a66c47",
    "#d7a071",
    "#553528",
  ];
  const rand = (n: number) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  const shelves = [36, 96, 156, 216, 274];
  const books: ReactNode[] = [];

  shelves.forEach((y, row) => {
    (["left", "right"] as const).forEach((side) => {
      let x = side === "left" ? 6 : 268;
      const limit = side === "left" ? 132 : 394;
      let i = 0;
      while (x < limit && i < 24) {
        const seed = row * 31 + i * 7 + (side === "left" ? 0 : 3);
        const w = 5 + Math.round(rand(seed) * 8);
        const h = 28 + rand(seed + 1) * 28;
        const shade = palette[Math.floor(rand(seed + 2) * palette.length)];
        books.push(
          <rect
            key={`${side}-${row}-${i}`}
            x={x}
            y={y + 44 - h}
            width={w}
            height={h}
            rx="1"
            fill={shade}
            opacity={0.35 + rand(seed + 3) * 0.5}
          />
        );
        x += w + 1.6;
        i += 1;
      }
    });
  });

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="lib-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a2419" />
          <stop offset="0.45" stopColor="#714832" />
          <stop offset="1" stopColor="#22150f" />
        </linearGradient>
        <linearGradient id="lib-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b98a63" stopOpacity=".5" />
          <stop offset="1" stopColor="#1b110c" stopOpacity=".9" />
        </linearGradient>
        <radialGradient id="lib-glow" cx="50%" cy="42%" r="45%">
          <stop offset="0" stopColor="#ffd9a6" stopOpacity=".85" />
          <stop offset=".55" stopColor="#ffb877" stopOpacity=".28" />
          <stop offset="1" stopColor="#ffb877" stopOpacity="0" />
        </radialGradient>
        <filter id="lib-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="lib-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect width="400" height="300" fill="url(#lib-bg)" />
      <rect y="196" width="400" height="104" fill="url(#lib-floor)" />

      <g opacity=".85">{books}</g>

      <g filter="url(#lib-blur)" opacity=".85">
        <ellipse cx="200" cy="150" rx="58" ry="132" fill="url(#lib-glow)" />
      </g>

      {/* aisle perspective floor lines */}
      <g stroke="#f6d3ab" strokeOpacity=".18" strokeWidth="1">
        <path d="M164 300 190 190M236 300 210 190M120 300 182 196M280 300 218 196" />
      </g>

      {/* pendant lights */}
      <g>
        {[
          [170, 42, 9],
          [186, 74, 7],
          [202, 38, 10],
          [218, 80, 6.5],
          [232, 54, 8],
          [196, 108, 5.5],
        ].map(([cx, cy, r], i) => (
          <g key={i}>
            <line
              x1={cx}
              y1="0"
              x2={cx}
              y2={cy}
              stroke="#f3d0a8"
              strokeOpacity=".35"
              strokeWidth="1"
            />
            <circle cx={cx} cy={cy} r={r * 2.4} fill="#ffdfb4" opacity=".18" filter="url(#lib-blur)" />
            <circle cx={cx} cy={cy} r={r} fill="#fff0d2" filter="url(#lib-soft)" />
          </g>
        ))}
      </g>

      <rect width="400" height="300" fill="url(#lib-glow)" opacity=".35" />
      <rect width="400" height="300" fill="url(#lib-bg)" opacity=".12" />
    </svg>
  );
}

/* ---------------------------------------------------------------- heatmap */

export function Heatmap({
  rows = 7,
  cols = 22,
  cell = 8,
  gap = 2.6,
  dark = false,
  pixel = false,
}: {
  rows?: number;
  cols?: number;
  cell?: number;
  gap?: number;
  dark?: boolean;
  pixel?: boolean;
}) {
  const level = (r: number, c: number) => {
    const n = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
    const v = n - Math.floor(n);
    if (v > 0.82) return 4;
    if (v > 0.62) return 3;
    if (v > 0.42) return 2;
    if (v > 0.24) return 1;
    return 0;
  };
  const colors = dark
    ? ["#1b1b1f", "#3d2016", "#6e2c12", "#c24314", "#ff5a1e"]
    : ["#f0eee8", "#ffe0cd", "#ffc29c", "#ff9560", "#f4510d"];
  const size = (n: number) => (pixel ? `${n}px` : u(n));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${size(cell)})`,
        gridTemplateRows: `repeat(${rows}, ${size(cell)})`,
        gap: size(gap),
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, idx) => {
        const r = idx % rows;
        const c = Math.floor(idx / rows);
        return (
          <span
            key={idx}
            style={{
              background: colors[level(r, c)],
              borderRadius: size(1.6),
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- sparkline */

export function Sparkline({
  points = "0,38 14,34 26,36 40,27 52,29 66,20 78,23 92,14 106,17 120,8 134,11 148,4",
  width = 148,
  height = 42,
  stroke = "currentColor",
  fill = false,
  className = "",
}: {
  points?: string;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      aria-hidden="true"
      style={{ width: "100%", height: "auto" }}
    >
      {fill && (
        <defs>
          <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={stroke} stopOpacity=".26" />
            <stop offset="1" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      {fill && (
        <polygon points={`0,${height} ${points} ${width},${height}`} fill="url(#spark-fill)" />
      )}
      <polyline
        points={points}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------- misc marks */

export function BriefcaseGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2.5" y="7.2" width="19" height="12.6" rx="3.2" fill="currentColor" />
      <path
        d="M8.6 7V5.6c0-1 .8-1.8 1.8-1.8h3.2c1 0 1.8.8 1.8 1.8V7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M2.8 12.6h18.4" stroke="#fff" strokeWidth="1.5" opacity=".8" />
    </svg>
  );
}

export function WaveformGlyph({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  const bars = [7, 12, 17, 10, 20, 14, 8, 16, 6];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={2 + i * 2.4}
          y={12 - h / 2}
          width="1.5"
          height={h}
          rx=".75"
          fill={color}
        />
      ))}
    </svg>
  );
}

export function AtomGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function UndoGlyph({ size = 20, flip = false }: { size?: number; flip?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M9.5 5 4 10l5.5 5M4.4 10H14a5.6 5.6 0 0 1 0 11.2h-1.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
