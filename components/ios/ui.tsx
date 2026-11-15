import type { CSSProperties, ReactNode } from "react";
import { u } from "./units";
import {
  BackGlyph,
  BatteryGlyph,
  BookGlyph,
  PeopleGlyph,
  PlusGlyph,
  ScribbleGlyph,
  StarGlyph,
  WifiGlyph,
} from "@/components/icons";

/* ------------------------------------------------------------------ device */

export function Phone({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`device ${className}`} style={style}>
      <div className="device-bezel" aria-hidden="true" />
      <div className="device-btn device-btn--mute" aria-hidden="true" />
      <div className="device-btn device-btn--vol-up" aria-hidden="true" />
      <div className="device-btn device-btn--vol-down" aria-hidden="true" />
      <div className="device-btn device-btn--power" aria-hidden="true" />
      <div className="device-screen">
        <div className="ios">{children}</div>
        <div className="device-island" aria-hidden="true" />
        <div className="device-glare" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ status */

export function StatusBar({ time = "4:35" }: { time?: string }) {
  return (
    <div className="i-status">
      <span className="i-status-time">{time}</span>
      <span className="i-status-right">
        <span className="i-status-dots" aria-hidden="true">
          <i /> <i /> <i /> <i />
        </span>
        <WifiGlyph size={17} />
        <BatteryGlyph size={26} />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ nav */

export function NavBar({
  title,
  leading,
  trailing,
  className = "",
}: {
  title: string;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`i-nav ${className}`}>
      <span className="i-circle" aria-hidden="true">
        {leading ?? <BackGlyph size={20} />}
      </span>
      <span className="i-nav-title">{title}</span>
      <span className="i-circle" aria-hidden="true">
        {trailing ?? <PlusGlyph size={20} />}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ avatar */

const tones = ["i-avatar--warm", "i-avatar--mint", "i-avatar--sand", "i-avatar--blush", "i-avatar--slate"];

export function Avatar({
  initials,
  size = 28,
  tone = 0,
  className = "",
  style,
}: {
  initials: string;
  size?: number;
  tone?: number | "solid";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`i-avatar ${tone === "solid" ? "" : tones[tone % tones.length]} ${className}`}
      style={{
        width: u(size),
        height: u(size),
        fontSize: u(size * 0.4),
        ...style,
      }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

/* ------------------------------------------------------------------ segmented */

export function Segmented({
  items,
  active = 0,
}: {
  items: string[];
  active?: number;
}) {
  return (
    <div className="i-seg" aria-hidden="true">
      {items.map((item, i) => (
        <span key={item} className={`i-seg-item ${i === active ? "is-active" : ""}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ tabs */

export const TABS = [
  { key: "feed", label: "For You", Glyph: StarGlyph },
  { key: "discussion", label: "Discussion", Glyph: PeopleGlyph },
  { key: "canvas", label: "Canvas", Glyph: ScribbleGlyph },
  { key: "learn", label: "Learn", Glyph: BookGlyph },
] as const;

export type TabKey = (typeof TABS)[number]["key"];

export function TabBar({
  active = "feed",
  onChange,
  label,
}: {
  active?: TabKey;
  onChange?: (key: TabKey) => void;
  label?: string;
}) {
  const interactive = Boolean(onChange);

  return (
    <>
      <div className="i-tab-fade" aria-hidden="true" />
      <div
        className="i-tabbar"
        role={interactive ? "tablist" : undefined}
        aria-label={interactive ? label ?? "DevDen tabs" : undefined}
        aria-hidden={interactive ? undefined : true}
      >
        {TABS.map(({ key, label: text, Glyph }) => {
          const isActive = key === active;
          const content = (
            <>
              <Glyph />
              <span className="i-tab-label">{text}</span>
            </>
          );

          return interactive ? (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={text}
              className={`i-tab ${isActive ? "is-active" : ""}`}
              onClick={() => onChange?.(key)}
            >
              {content}
            </button>
          ) : (
            <span key={key} className={`i-tab ${isActive ? "is-active" : ""}`}>
              {content}
            </span>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ helpers */

export function HeadlineRow({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <span className="i-title">{title}</span>
      {action}
    </div>
  );
}

export function SectionTitle({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="i-title" style={{ ...style }}>
      {children}
    </div>
  );
}
