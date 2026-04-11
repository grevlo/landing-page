import { Check } from "lucide-react";

const TALLY_FORM_ID = "dWjbEz";

const starterFeatures = [
  "Up to 15 client domains",
  "Uptime, PageSpeed and SSL reports",
  "Your agency branding on every PDF",
  "Full API access",
  "Email support",
];

const standardFeatures = [
  "Unlimited client domains",
  "Uptime, PageSpeed and SSL reports",
  "Your agency branding on every PDF",
  "Full API access",
  "Priority support",
  "Permanent rate lock (founding partners only)",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
        Simple, flat pricing.
      </h2>
      <p className="text-center text-muted-foreground mb-16">
        No per-client fees. No per-source charges. Cancel anytime.
      </p>

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
                <td className="py-3 px-4 text-[#2F3E46]">Per dashboard</td>
                <td className="py-3 px-4 text-[#2F3E46]">No</td>
                <td className="py-3 px-4 text-[#2F3E46]">Dashboard</td>
              </tr>
              <tr className="bg-[#1E3A8A]">
                <td className="py-3 px-4 text-white font-semibold">Grevlo</td>
                <td className="py-3 px-4 text-white font-semibold">from £49/month</td>
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
            { name: "DashThis",        cost: "Per dashboard", uptime: "No", arch: "Dashboard", grevlo: false },
            { name: "Grevlo",          cost: "from £49/month", uptime: "Yes", arch: "Headless API", grevlo: true },
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

      {/* Two-tier pricing cards */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Starter */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Starter</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-[#1E3A8A]">£49</span>
                <span className="text-muted-foreground mb-1">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">Perfect for growing agencies</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {starterFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3E635] mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              data-tally-open={TALLY_FORM_ID}
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="w-full bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-bold text-sm py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Apply for Access
            </button>
          </div>

          {/* Standard — visually dominant */}
          <div
            className="rounded-2xl bg-[#1E3A8A] p-8 flex flex-col relative overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(30,58,138,0.3)" }}
          >
            {/* Most Popular badge */}
            <span className="absolute top-4 right-4 bg-[#A3E635] text-[#1E3A8A] text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">Standard</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">£99</span>
                <span className="text-white/60 mb-1">/month</span>
              </div>
              <p className="text-sm text-white/70">For established agencies</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {standardFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#A3E635] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              data-tally-open={TALLY_FORM_ID}
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="w-full bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-bold text-sm py-3 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Apply for Access
            </button>
          </div>
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

        <p className="text-center text-xs text-muted-foreground mt-2">
          Founding partner rate lock applies to your chosen tier permanently. Standard pricing may increase after the founding partner programme closes.
        </p>
      </div>
    </section>
  );
};
