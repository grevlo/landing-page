"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: string; node?: React.ReactNode }[] = [
  {
    q: "What is Grevlo?",
    a: "Grevlo is a headless REST API for UK web agencies. You send a client URL, we return a fully branded white-label PDF report covering uptime, PageSpeed scores and SSL certificate status — automatically.",
  },
  {
    q: "How does Grevlo work?",
    a: "Set up your agency branding once via the API. Then send a client URL with each request. Grevlo runs a live Lighthouse audit, checks the SSL certificate, and pulls 30 days of uptime data. The result is a branded PDF ready to send to your client.",
  },
  {
    q: "Do I need to write code to use Grevlo?",
    a: "No. You can generate a report from the Try It Now form on this page in 45 seconds without any code. For automated monthly reporting, a simple API call or cron job is all that's needed — full documentation at api.grevlo.com/docs.",
    node: (
      <>
        No. You can generate a report from the Try It Now form on this page in
        45 seconds without any code. For automated monthly reporting, a simple
        API call or cron job is all that&apos;s needed — full documentation at{" "}
        <Link
          href="https://api.grevlo.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1E3A8A] underline hover:text-[#92d120] transition-colors"
        >
          api.grevlo.com/docs
        </Link>
        .
      </>
    ),
  },
  {
    q: "How is Grevlo different from AgencyAnalytics or DashThis?",
    a: "Grevlo is headless — there's no dashboard for your clients to log into. It generates a static PDF that you send directly. Pricing is a flat rate (from £49/month) with no per-client fees, unlike AgencyAnalytics (~$749/month for 25 clients) or Swydo (~$474/month).",
  },
  {
    q: "Does Grevlo include uptime monitoring?",
    a: "Yes. Grevlo includes native uptime monitoring — something none of the major dashboard-based competitors offer. The report includes a 30-day availability log alongside PageSpeed scores and SSL status.",
  },
  {
    q: "What does the PDF report include?",
    a: "Each report covers three areas: uptime (30-day availability log), PageSpeed (Core Web Vitals — mobile and desktop), and SSL (certificate validity, expiry date, issuer). Your agency logo, colours and contact details appear on every page.",
  },
  {
    q: "How much does Grevlo cost?",
    a: "Starter plan is £49/month for up to 15 client domains. Standard plan is £99/month for unlimited domains. No per-client fees, no per-source charges. Founding partners lock in their chosen rate permanently.",
  },
  {
    q: "What is the founding partner programme?",
    a: "We're offering 5 UK agencies 3 months of free access in exchange for honest feedback and a backlink. After the trial, your rate is permanently locked — £49 or £99 depending on your chosen plan.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-10 leading-snug">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              {/* Mobile: accordion */}
              <button
                className="md:hidden w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-[#1E3A8A]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`shrink-0 w-5 h-5 text-[#1E3A8A] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`md:hidden pb-5 ${
                  openIndex === i ? "block" : "hidden"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">{faq.node ?? faq.a}</p>
              </div>

              {/* Desktop: always expanded */}
              <div className="hidden md:block py-6">
                <h3 className="text-base font-semibold text-[#1E3A8A] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {faq.node ?? faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
