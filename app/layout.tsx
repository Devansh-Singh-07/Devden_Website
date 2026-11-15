import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ios.css";

const description =
  "DevDen is a native iOS app for developers. A feed built around code, communities that feel like yours, real interview experiences, progress that's yours to keep, a collaborative canvas, and interactive DSA visualizers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devden.app"),
  title: "DevDen — Built for developers. By developers.",
  description,
  applicationName: "DevDen",
  keywords: [
    "DevDen",
    "developer community",
    "iOS app for developers",
    "coding community",
    "interview experiences",
    "DSA visualizer",
    "LeetCode",
    "Codeforces",
    "SwiftUI app",
  ],
  authors: [{ name: "DevDen" }],
  creator: "DevDen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DevDen",
    title: "DevDen — Built for developers. By developers.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDen — Built for developers. By developers.",
    description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
