import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";


export const metadata: Metadata = {
  title:
    "The True Cost of Client Reporting in UK Web Agencies — Free Report | Grevlo",
  description:
    "Free research report: UK web agencies managing 20 retainer clients lose over £115,000 per year in billable capacity to manual reporting. Download the 2026 analysis.",
  openGraph: {
    title:
      "The True Cost of Client Reporting in UK Web Agencies — Free Report | Grevlo",
    description:
      "Free research report: UK web agencies managing 20 retainer clients lose over £115,000 per year in billable capacity to manual reporting. Download the 2026 analysis.",
    url: "https://grevlo.com/whitepaper",
    siteName: "Grevlo",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The True Cost of Client Reporting in UK Web Agencies — Free Report | Grevlo",
    description:
      "Free research report: UK web agencies managing 20 retainer clients lose over £115,000 per year in billable capacity to manual reporting. Download the 2026 analysis.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "The True Cost of Client Reporting in UK Web Agencies",
  description:
    "Research report analysing the financial impact of manual client reporting on UK web agencies",
  datePublished: "2026-04-01",
  publisher: {
    "@type": "Organization",
    name: "Grevlo Ltd",
    url: "https://grevlo.com",
  },
  author: {
    "@type": "Person",
    name: "Dom Howarth",
  },
};

const stats = [
  {
    number: "£115,200",
    label: "Annual billable capacity lost to manual reporting",
    source: "Based on 20 clients at £80/hr blended rate",
  },
  {
    number: "57%",
    label: "of client churn caused by poor communication",
    source: "Focus Digital, 2025",
  },
  {
    number: "<40%",
    label: "Average UK agency gross profit — lowest on record",
    source: "BenchPress 2025",
  },
];

const bullets = [
  "Why UK agency margins fell below 40% for the first time",
  "Real cost breakdown at 10, 25 and 50 clients across AgencyAnalytics, DashThis and Swydo",
  "Why 57% of client churn is caused by poor communication not poor results",
  "The automation dividend — what agencies actually save",
];

export default function WhitepaperPage() {
  notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#1E3A8A] py-16 md:py-24">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <p className="text-[#A3E635] text-sm font-semibold uppercase tracking-widest mb-4">
              Free Research Report — 2026
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              The True Cost of Client Reporting in UK Web Agencies
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
              We analysed the UK web agency sector to quantify exactly what
              manual client reporting is costing agencies in lost billable
              capacity, software overhead, and client churn.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container max-w-4xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.number}
                className="rounded-xl bg-[#1E3A8A] p-6 text-center"
                style={{ boxShadow: "0 4px 20px rgba(30,58,138,0.15)" }}
              >
                <p className="text-4xl font-bold text-[#A3E635] mb-2">
                  {stat.number}
                </p>
                <p className="text-white text-sm font-medium leading-snug mb-3">
                  {stat.label}
                </p>
                <p className="text-blue-300 text-xs">{stat.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's inside */}
        <section className="container max-w-3xl mx-auto px-6 pb-14">
          <div className="rounded-xl border border-gray-200 bg-white p-8"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-6">
              What&apos;s Inside
            </h2>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#A3E635] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[#1E3A8A]"
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
        </section>

        {/* Download form */}
        <section className="bg-gray-50 border-t border-gray-200 py-14">
          <div className="container max-w-2xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-2">
                Download the Free Report
              </h2>
              <p className="text-gray-500 text-sm">
                Enter your details to get instant access. No spam — just the
                report.
              </p>
            </div>

            <iframe
              src="https://tally.so/embed/RGJZJP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="300"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Download the Free Report"
              style={{ border: "none", minHeight: "300px" }}
            />

            <p className="mt-6 text-xs text-gray-400 text-center">
              By downloading this report you agree to receive occasional emails
              from Grevlo Ltd. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Page footer */}
        <footer className="border-t border-gray-200 py-6">
          <p className="text-center text-xs text-gray-400">
            Published by Grevlo Ltd · Company No. 17121751 · April 2026 ·{" "}
            <Link
              href="https://grevlo.com"
              className="underline hover:text-[#1E3A8A] transition-colors"
            >
              grevlo.com
            </Link>
          </p>
        </footer>
      </main>
    </>
  );
}
