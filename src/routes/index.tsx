import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainSection, FlipSection } from "@/components/landing/PainSection";
import { IndustryShowcase } from "@/components/landing/IndustryShowcase";
import { HowItWorks, FeatureGrid } from "@/components/landing/HowAndFeatures";
import { NoyaSection, ResultsStrip } from "@/components/landing/NoyaAndResults";
import { Pricing } from "@/components/landing/Pricing";
import {
  Testimonials,
  Faq,
  FinalCta,
  SiteFooter,
  MobileCtaBar,
} from "@/components/landing/Closing";

const title = "DERSO Social Studio — עובד סושיאל דיגיטלי לעסק שלך";
const description =
  "פוסטים, קרוסלות וסרטונים ממותגים בעברית שמתפרסמים אוטומטית באינסטגרם, פייסבוק, טיקטוק ויוטיוב. מ-249 ₪ בחודש.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <HeroSection />
      <PainSection />
      <FlipSection />
      <IndustryShowcase />
      <HowItWorks />
      <FeatureGrid />
      <NoyaSection />
      <ResultsStrip />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <MobileCtaBar />
    </main>
  );
}
