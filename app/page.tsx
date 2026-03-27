import { FooterSection } from "@/components/layout/sections/footer";
import { FoundingPartnerSection } from "@/components/layout/sections/founding-partner";
import { HeroSection } from "@/components/layout/sections/hero";
import { HowItWorksSection } from "@/components/layout/sections/how-it-works";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ProblemSection } from "@/components/layout/sections/problem";
import { WorksWithSection } from "@/components/layout/sections/works-with";

export const metadata = {
  title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
  description:
    "Grevlo is a headless API for web agencies. Give us your client's URL. Get back a fully branded PDF performance report covering uptime, PageSpeed, and SSL. Automatically.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PricingSection />
      <FoundingPartnerSection />
      <WorksWithSection />
      <FooterSection />
    </>
  );
}
