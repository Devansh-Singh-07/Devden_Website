import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

const description =
  "DevDen is a free iPhone app for computer-science students: ask doubts, read real interview experiences from your campus, and explain solutions on a shared canvas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "DevDen — Learn to code, together.",
    template: "%s · DevDen",
  },
  description,
  applicationName: "DevDen",
  keywords: [
    "DevDen",
    "DSA",
    "coding doubts",
    "interview experiences",
    "placement preparation",
    "campus coding community",
    "algorithm canvas",
    "iOS app for students",
  ],
  authors: [{ name: "DevDen" }],
  creator: "DevDen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DevDen",
    title: "DevDen — Learn to code, together.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDen — Learn to code, together.",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

// Runs before first paint so a saved Light or Dark choice never flashes the
// other theme. "system" (the default) leaves data-theme unset and the CSS
// follows the OS.
const themeScript = `(function(){try{var t=localStorage.getItem("devden-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Browser extensions (e.g. Grammarly) add attributes to <body> before
          React loads; this stops that from being reported as a mismatch. */}
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
