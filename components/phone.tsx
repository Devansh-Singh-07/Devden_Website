import type { CSSProperties } from "react";

export type Screen =
  | "feed"
  | "doubts"
  | "doubt-detail"
  | "experiences"
  | "experience-detail"
  | "canvas"
  | "learn";

export const SCREEN_ALT: Record<Screen, string> = {
  feed: "DevDen For You feed with Doubts and Interviews shortcuts and top posts",
  doubts: "Doubts list showing questions from students, with accepted answers marked",
  "doubt-detail": "A doubt about Union-Find with an answer from another student",
  experiences: "Interview experiences list by company, role, year and outcome",
  "experience-detail": "An Amazon SDE intern interview experience, round by round",
  canvas: "Canvas tutorial explaining Two Sum with an array block and pointers",
  learn: "Learn tab with top picks, categories and articles",
};

/**
 * A real app screenshot in an iPhone frame. Both the light and dark captures
 * are in the page; CSS shows the one that matches the site's theme.
 */
export function Phone({
  screen,
  priority = false,
  className = "",
  style,
}: {
  screen: Screen;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const loading = priority ? "eager" : "lazy";
  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone-screen">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="shot-light"
          src={`/screens/${screen}-light.jpg`}
          alt={SCREEN_ALT[screen]}
          width={860}
          height={1869}
          loading={loading}
          decoding="async"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="shot-dark"
          src={`/screens/${screen}-dark.jpg`}
          alt={SCREEN_ALT[screen]}
          width={860}
          height={1869}
          loading={loading}
          decoding="async"
        />
      </div>
    </div>
  );
}
