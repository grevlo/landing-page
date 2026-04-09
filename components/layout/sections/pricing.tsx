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

      {/* Competitor comparison — table on desktop, cards on mobile */}
      <div className="max-w-3xl mx-auto mb-16 overflow-x-auto">

        {/* Desktop table (sm and up) */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1E3A8A]">
                <th className="text-left py-3 px-4 font-semibold text-[#1E3A8A]">Platform</th>
                <th className="text-left py-3 px-4 font-semibold text-[#1E3A8A]">Monthly Cost (25 clients)</th>
                <th className="text-left py-3 px-4 font-semibold text-[#1E3A8A]">Native Uptime / SSL</th>
                <th className="text-left py-3 px-4 font-semibold text-[#1E3A8A]">Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-[#2F3E46]">AgencyAnalytics</td>
                <td className="py-3 px-4 text-[#2F3E46]">~$749/month</td>
                <td className="py-3 px-4 text-[#2F3E46]">No</td>
                <td className="py-3 px-4 text-[#2F3E46]">Dashboard</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-[#2F3E46]">Swydo</td>
                <td className="py-3 px-4 text-[#2F3E46]">~$474/month</td>
                <td className="py-3 px-4 text-[#2F3E46]">No</td>
                <td className="py-3 px-4 text-[#2F3E46]">Dashboard</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-[#2F3E46]">DashThis</td>
                <td className="py-3 px-4 text-[#2F3E46]">Variable</td>
                <td className="py-3 px-4 text-[#2F3E46]">No</td>
                <td className="py-3 px-4 text-[#2F3E46]">Dashboard</td>
              </tr>
              <tr className="bg-[#1E3A8A]">
                <td className="py-3 px-4 text-white font-semibold">Grevlo</td>
                <td className="py-3 px-4 text-white font-semibold">£99/month</td>
                <td className="py-3 px-4 text-[#A3E635] font-semibold">Yes</td>
                <td className="py-3 px-4 text-white font-semibold">Headless API</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile cards (below sm) */}
        <div className="flex flex-col gap-3 sm:hidden">
          {[
            { name: "AgencyAnalytics", cost: "~$749/month", uptime: "No", arch: "Dashboard", grevlo: false },
            { name: "Swydo",           cost: "~$474/month", uptime: "No", arch: "Dashboard", grevlo: false },
            { name: "DashThis",        cost: "Variable",    uptime: "No", arch: "Dashboard", grevlo: false },
            { name: "Grevlo",          cost: "£99/month",   uptime: "Yes", arch: "Headless API", grevlo: true },
          ].map((row) => (
            <div
              key={row.name}
              className={`rounded-xl p-4 border ${row.grevlo ? "bg-[#1E3A8A] border-[#1E3A8A]" : "bg-white border-gray-100"}`}
              style={row.grevlo ? {} : { boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            >
              <p className={`text-base font-bold mb-2 ${row.grevlo ? "text-white" : "text-[#1E3A8A]"}`}>
                {row.name}
              </p>
              <div className={`text-sm space-y-1 ${row.grevlo ? "text-white/90" : "text-[#2F3E46]"}`}>
                <p><span className="font-medium">Cost:</span> {row.cost}</p>
                <p>
                  <span className="font-medium">Native Uptime / SSL:</span>{" "}
                  <span className={row.grevlo ? "text-[#A3E635] font-semibold" : ""}>{row.uptime}</span>
                </p>
                <p><span className="font-medium">Architecture:</span> {row.arch}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-3 text-center max-w-xl mx-auto">
          Competitor pricing estimated based on publicly available information, April 2026. Actual costs vary by usage. All competitor prices shown in USD.
        </p>
      </div>

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
            <Link href="/#founding-partner">Apply for Founding Partner Access</Link>
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
