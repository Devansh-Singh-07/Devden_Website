/** One place for the details that appear across the site and legal pages. */
export const SITE = {
  name: "DevDen",
  url: "https://devden.app",
  supportEmail: "devdensupport@gmail.com",
  /** Replace with the real App Store link once the app is approved. */
  appStoreUrl: null as string | null,
  legalUpdated: "23 November 2026",
  minimumAge: 16,
} as const;

export const mailto = (subject: string) =>
  `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}`;
