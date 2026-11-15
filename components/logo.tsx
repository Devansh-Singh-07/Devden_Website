import type { SVGProps } from "react";

export function LogoMark({
  size = 26,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect width="32" height="32" rx="9.4" fill="currentColor" />
      <path
        d="M10.4 24V14.35a5.6 5.6 0 0 1 11.2 0V24"
        stroke="#fff"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <circle cx="16" cy="18.9" r="1.75" fill="#fff" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  markClass = "text-accent",
  showMark = true,
}: {
  className?: string;
  markClass?: string;
  showMark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {showMark && <LogoMark size={26} className={markClass} />}
      <span className="text-[1.0625rem] font-semibold tracking-[-0.035em]">
        DevDen
      </span>
    </span>
  );
}
