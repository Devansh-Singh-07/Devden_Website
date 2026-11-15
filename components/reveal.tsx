"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

function useReveal<T extends HTMLElement>(active = true) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  return ref;
}

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "fade" | "scale";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={variant === "up" ? undefined : variant}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Line-by-line mask reveal for editorial headlines. */
export function MaskLines({
  lines,
  className = "",
  delay = 0,
  stagger = 110,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useReveal<HTMLSpanElement>();

  return (
    <span ref={ref} data-reveal="mask" className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i}>
          <span style={{ "--reveal-delay": `${delay + i * stagger}ms` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
