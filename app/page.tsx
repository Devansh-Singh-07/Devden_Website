import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Features } from "@/components/sections/features";
import { InterviewDeepDive } from "@/components/sections/interview-deep-dive";
import { Identity } from "@/components/sections/identity";
import { Closing } from "@/components/sections/closing";
import { Footer } from "@/components/sections/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DevDen",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "iOS",
  description:
    "A peer-driven knowledge-sharing platform for developers: a developer feed, communities, progress profiles, technical discussions, real interview experiences, a collaborative canvas, and interactive DSA visualizers.",
  url: "https://devden.app",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Developers",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <Philosophy />
        <div id="features">
          <Features />
        </div>
        <InterviewDeepDive />
        <Identity />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
