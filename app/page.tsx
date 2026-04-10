import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { FoundingPartnerSection } from "@/components/layout/sections/founding-partner";
import { FromTheBlogSection } from "@/components/layout/sections/from-the-blog";
import { HeroSection } from "@/components/layout/sections/hero";
import { HowItWorksSection } from "@/components/layout/sections/how-it-works";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ProblemSection } from "@/components/layout/sections/problem";
import { WhatYouGetSection } from "@/components/layout/sections/what-you-get";
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
      <WhatYouGetSection />
      <ProblemSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <FoundingPartnerSection />
      <WorksWithSection />
      <FromTheBlogSection />
      <FooterSection />
    </>
  );
}
