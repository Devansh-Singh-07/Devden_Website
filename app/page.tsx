import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Features } from "@/components/sections/features";
import { More } from "@/components/sections/more";
import { Gallery } from "@/components/sections/gallery";
import { Faq } from "@/components/sections/faq";
import { Closing } from "@/components/sections/closing";
import { Footer } from "@/components/sections/footer";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "DevDen",
  applicationCategory: "EducationalApplication",
  operatingSystem: "iOS 26.2 or later",
  description:
    "A study community for computer-science students: campus doubts, real interview experiences, and a canvas for explaining algorithms.",
  url: SITE.url,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
        <Features />
        <More />
        <Gallery />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
