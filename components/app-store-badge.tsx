import { SITE } from "@/lib/site";
import { AppleGlyph } from "@/components/icons";

/**
 * Links to the App Store once SITE.appStoreUrl is set; until then it says
 * "Coming soon" and points to the download section.
 */
export function AppStoreBadge({ className = "" }: { className?: string }) {
  const live = Boolean(SITE.appStoreUrl);
  return (
    <a
      href={SITE.appStoreUrl ?? "/#download"}
      {...(live ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex h-[3.25rem] items-center gap-3 rounded-[14px] px-5 app-badge transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      aria-label={live ? "Download DevDen on the App Store" : "DevDen is coming soon to the App Store"}
    >
      <AppleGlyph size={24} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.6875rem] font-medium opacity-80">
          {live ? "Download on the" : "Coming soon on the"}
        </span>
        <span className="mt-1 text-[1.1875rem] font-semibold tracking-[-0.02em]">App Store</span>
      </span>
    </a>
  );
}
