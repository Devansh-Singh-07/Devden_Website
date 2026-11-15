import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  focusable: "false" as const,
});

/* ------------------------------------------------ iOS tab glyphs (filled) */

export function StarGlyph({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
        d="M12 3.35c.42 0 .72.26.9.65l2.13 4.55 4.82.63c.84.11 1.16 1.05.54 1.6l-3.6 3.2 1 4.75c.17.8-.7 1.4-1.4.97L12 17.35l-4.39 2.35c-.7.43-1.57-.17-1.4-.97l1-4.75-3.6-3.2c-.62-.55-.3-1.49.54-1.6l4.82-.63L11.1 4c.18-.39.48-.65.9-.65Z"
      />
    </svg>
  );
}

export function PeopleGlyph({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="9.2" cy="7.7" r="3.5" fill="currentColor" />
      <path
        fill="currentColor"
        d="M2.4 18.4c0-3.4 3-5.5 6.8-5.5s6.8 2.1 6.8 5.5c0 1-.7 1.5-1.7 1.5H4.1c-1 0-1.7-.5-1.7-1.5Z"
      />
      <circle cx="17.4" cy="8.5" r="2.75" fill="currentColor" />
      <path
        fill="currentColor"
        d="M17 12.9c2.9 0 4.9 1.6 4.9 4.2 0 .75-.55 1.15-1.35 1.15h-2.7c.15-.35.25-.75.25-1.2 0-1.6-.55-2.95-1.5-3.95.13-.13.27-.2.4-.2Z"
      />
    </svg>
  );
}

export function ScribbleGlyph({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M3.6 16.9c1.9-4.6 4.8-9.2 7.5-10.6 2.6-1.35 3.7.9 2.2 3-1.5 2.05-4.6 4.4-6.5 5.15-1.5.6-1.55-.55-.5-1.55 1.55-1.5 4.35-2.75 7.3-2.6 2.15.1 3.55 1.3 3.55 3.05 0 .8-.4 1.5-1.1 2"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookGlyph({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        fill="currentColor"
        d="M5.3 3h12.1C19 3 20 4 20 5.6v12.9c0 1.5-1 2.5-2.6 2.5H5.3c-1.2 0-2.1-.9-2.1-2.1V5.1C3.2 3.9 4.1 3 5.3 3Z"
      />
      <path d="M7.4 3v18" stroke="#fff" strokeWidth="1.15" opacity=".9" />
      <path
        d="M10.5 7.6h5.9M10.5 10.9h5.9M10.5 14.2h3.6"
        stroke="#fff"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity=".92"
      />
    </svg>
  );
}

/* ------------------------------------------------ iOS utility glyphs */

export function BackGlyph({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M14.5 5 8.2 11.3a1 1 0 0 0 0 1.4l6.3 6.3"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusGlyph({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M12 4.8v14.4M4.8 12h14.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronRight({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="m9 5.5 6 6.5-6 6.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WifiGlyph({ size = 17, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} viewBox="0 0 20 16">
      <path
        d="M10 13.1a1.5 1.5 0 1 0 0-.01Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.7 9.2a6.4 6.4 0 0 1 8.6 0M3.1 6.1a10.2 10.2 0 0 1 13.8 0M8.2 11.4a3 3 0 0 1 3.6 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BatteryGlyph({ size = 26, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} viewBox="0 0 28 14">
      <rect
        x="1"
        y="1.2"
        width="23.2"
        height="11.6"
        rx="3.4"
        stroke="currentColor"
        strokeOpacity=".38"
        strokeWidth="1.2"
        fill="none"
      />
      <rect x="2.8" y="3" width="19.6" height="8" rx="2.1" fill="currentColor" />
      <path
        d="M25.8 5.2v3.6c.9-.25 1.4-.9 1.4-1.8s-.5-1.55-1.4-1.8Z"
        fill="currentColor"
        opacity=".4"
      />
    </svg>
  );
}

export function SearchGlyph({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="10.6" cy="10.6" r="6.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m15.4 15.4 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookmarkGlyph({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M6.2 4.6c0-1 .8-1.8 1.8-1.8h8c1 0 1.8.8 1.8 1.8V20l-5.8-4-5.8 4V4.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComposeGlyph({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M20.2 4.6a2 2 0 0 1 0 2.8l-9.3 9.3-4.3 1.1 1.1-4.3 9.3-9.3a2 2 0 0 1 2.8 0l.4.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 13.5v4.2a1.8 1.8 0 0 0 1.8 1.8h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UpvoteGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M12 4.5v15M12 4.5 6.5 10M12 4.5 17.5 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CommentGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M4 11.4c0-4.1 3.6-7.1 8-7.1s8 3 8 7.1-3.6 7.1-8 7.1c-1 0-2-.15-2.9-.43L4.6 19.5l.8-3.5A7 7 0 0 1 4 11.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SendGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="m20.5 4.2-7.1 16-2.6-6.3L4.5 11l16-6.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m20.5 4.2-9.7 9.7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function BuildingGlyph({ size = 24, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M4.5 20V4.8c0-.7.6-1.3 1.3-1.3h8.4c.7 0 1.3.6 1.3 1.3V20M15.5 9.5h3.2c.7 0 1.3.6 1.3 1.3V20M2.8 20h18.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 6.9h2M7.6 10h2M7.6 13.1h2M11.4 6.9h2M11.4 10h2M11.4 13.1h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckBadge({ size = 22, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        fill="currentColor"
        d="M12 2.2c1.4 0 2.6.75 3.4 1.8.7-.1 1.5-.05 2.2.25a5.3 5.3 0 0 1 2.2 2.2c.3.7.35 1.5.25 2.2A4.6 4.6 0 0 1 21.8 12c0 1.4-.75 2.6-1.8 3.4.1.7.05 1.5-.25 2.2a5.3 5.3 0 0 1-2.2 2.2c-.7.3-1.5.35-2.2.25A4.6 4.6 0 0 1 12 21.8a4.6 4.6 0 0 1-3.4-1.8c-.7.1-1.5.05-2.2-.25a5.3 5.3 0 0 1-2.2-2.2 4.9 4.9 0 0 1-.25-2.2A4.6 4.6 0 0 1 2.2 12c0-1.4.75-2.6 1.8-3.4a4.9 4.9 0 0 1 .25-2.2 5.3 5.3 0 0 1 2.2-2.2c.7-.3 1.5-.35 2.2-.25A4.6 4.6 0 0 1 12 2.2Z"
      />
      <path
        d="m8.6 12.2 2.4 2.4 4.6-5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------ site UI glyphs (stroke) */

export function ArrowRight({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="M7 17 17 7M8.5 7H17v8.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuGlyph({ size = 22, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="M3.5 8h17M3.5 16h17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseGlyph({ size = 22, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="m5 5 14 14M19 5 5 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckGlyph({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="m4.5 12.5 5 5 10-11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkGlyph({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="M12 3.5c.6 4.3 2.2 6 6.5 6.5-4.3.6-6 2.2-6.5 6.5-.6-4.3-2.2-6-6.5-6.5 4.3-.5 6-2.2 6.5-6.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor">
      <path d="M7 4.6c0-.8.9-1.3 1.6-.9l10.2 6.6c.7.4.7 1.4 0 1.8L8.6 18.7c-.7.4-1.6-.1-1.6-.9V4.6Z" />
    </svg>
  );
}

export function PauseGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor">
      <rect x="6" y="4.5" width="4" height="15" rx="1.3" />
      <rect x="14" y="4.5" width="4" height="15" rx="1.3" />
    </svg>
  );
}

export function StepGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor">
      <path d="M6 5.4c0-.8.9-1.3 1.6-.9l8 5.6c.6.4.6 1.4 0 1.8l-8 5.6c-.7.4-1.6-.1-1.6-.9V5.4Z" />
      <rect x="17" y="4.5" width="2.6" height="15" rx="1.2" />
    </svg>
  );
}

export function ResetGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="M4.5 10.5A7.5 7.5 0 1 1 6 17.4M4.5 5.5v5h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlameGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor">
      <path d="M12.6 2.4c.2 3.5 3.4 4.7 4.6 7.5 1.6 3.9-.4 8.6-5 9.5-4 .8-7.6-2.2-6.9-6.4.5-2.7 2.8-4.4 4-6.7.4 2 1.5 2.9 2.4 3.3.7-2.3.3-4.7.9-7.2Z" />
    </svg>
  );
}

export function CodeGlyph({ size = 18, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="none">
      <path
        d="m8 7-5 5 5 5M16 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppleGlyph({ size = 16, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p} fill="currentColor">
      <path d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2.1.8-1.2 1.1-2.4 1.2-2.4-.1-.1-2.6-1-2.6-3.4ZM14.3 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.3Z" />
    </svg>
  );
}
