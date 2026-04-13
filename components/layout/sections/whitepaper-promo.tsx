import Link from "next/link";

const stats = [
  {
    number: "£115,200*",
    label: "Average annual cost of manual reporting*",
  },
  {
    number: "57%",
    label: "of client churn linked to poor communication",
  },
  {
    number: "<40%",
    label: "Average UK agency gross profit in 2025",
  },
];

const bullets = [
  "Why UK agency margins fell below 40% for the first time",
  "Real cost breakdown across AgencyAnalytics, DashThis and Swydo at multiple scales",
  "Why 57% of client churn is caused by poor communication not poor results",
  "How automation converts a variable reporting cost into a fixed infrastructure cost",
];

export const WhitepaperPromoSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 sm:py-20">
      <div className="container max-w-4xl mx-auto px-6">

        {/* Label + heading */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#A3E635] mb-3">
          Free Research Report
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] leading-tight mb-3">
          The True Cost of Client Reporting in UK Web Agencies
        </h2>
        <p className="text-base text-[#2F3E46] mb-10">
          We analysed the data so you don&apos;t have to.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="rounded-xl bg-[#1E3A8A] p-6 text-center"
              style={{ boxShadow: "0 4px 20px rgba(30,58,138,0.12)" }}
            >
              <p className="text-3xl font-bold text-[#A3E635] mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-white leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Small print — asterisk disclosure, legal requirement */}
        <p className="text-xs text-gray-500 mb-10">
          *Illustrative calculation, 2026 — based on 20 clients at £80/hr. See full report for methodology.
        </p>

        {/* What's inside */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 mb-8"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            What&apos;s Inside
          </p>
          <ul className="space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#A3E635] flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-[#1E3A8A]"
                    fill="none"
                    viewBox="0 0 12 12"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 6l3 3 5-5"
                    />
                  </svg>
                </span>
                <span className="text-sm text-[#2F3E46] leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/whitepaper"
            className="inline-block bg-[#A3E635] text-[#1E3A8A] font-bold text-sm px-8 py-3 rounded-lg hover:bg-[#92d120] transition-colors"
          >
            Download the Free Report
          </Link>
          <p className="mt-3 text-xs text-gray-400">No spam. Instant access.</p>
        </div>

      </div>
    </section>
  );
};
