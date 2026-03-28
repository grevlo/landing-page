import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "Unlimited reports — no per-client fees",
  "Full white-label included as standard",
  "API access included — never gated",
  "No per-data-source charges",
  "No seat restrictions",
  "Uptime, PageSpeed, and SSL built in",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-16">
        One price. No surprises.
      </h2>

      <div className="max-w-lg mx-auto">
        <div
          className="rounded-2xl border-2 border-[#1E3A8A] bg-white p-8"
          style={{ boxShadow: "0 8px 32px rgba(30,58,138,0.15)" }}
        >
          {/* Price */}
          <div className="mb-8">
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-bold text-[#1E3A8A]">£99</span>
              <span className="text-muted-foreground mb-2">/month</span>
            </div>
            <p className="text-muted-foreground text-sm">
              or £890/year — save two months
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#A3E635] mt-0.5 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="w-full mt-6 bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-bold text-base"
          >
            <Link href="#founding-partner">Apply for Founding Partner Access</Link>
          </Button>
        </div>

        {/* Comparison callout */}
        <div className="my-8 rounded-r-xl border-l-4 border-l-[#1E3A8A] bg-[#EFF6FF] p-5">
          <p className="text-sm text-[#2F3E46] leading-relaxed">
            <span className="font-bold text-[#1E3A8A]">
              AgencyAnalytics charges £300+/month
            </span>{" "}
            for 20 clients and still does not include native uptime monitoring.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Cheaper than one hour of a junior developer&apos;s billable time.
        </p>
      </div>
    </section>
  );
};
