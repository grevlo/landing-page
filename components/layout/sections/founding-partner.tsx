import { Check } from "lucide-react";
import Link from "next/link";

// TODO: Replace TALLY_FORM_ID below with your actual Tally form ID.
// Create your form at https://tally.so — takes ~5 minutes.
// Your form ID is the short code in the form URL: tally.so/r/XXXXXX
const TALLY_FORM_ID = "dWjbEz";

const benefits = [
  "3 months free access — no card required",
  "Permanent £99/month rate lock",
  "Concierge onboarding — we do the integration work for you",
  "Direct input into the product roadmap",
  "Your logo on the Grevlo website",
];

export const FoundingPartnerSection = () => {
  return (
    <section
      id="founding-partner"
      className="py-24 sm:py-32 bg-[#1E3A8A]"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join the Founding 5.
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-10">
            We are looking for 5 UK web agencies to help shape Grevlo before
            public launch. As a founding partner you get full API access free
            for 3 months, a permanent rate lock at £99 per month afterwards,
            and concierge onboarding — we set up your branding, build your
            first report template, and write your integration script. In
            exchange we ask for an honest testimonial, a backlink from your
            website, and permission to feature your logo on this page.
          </p>

          <ul className="text-left inline-flex flex-col gap-3 mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#A3E635] mt-0.5 shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-3">
            <button
              data-tally-open={TALLY_FORM_ID}
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-bold text-base px-10 py-4 rounded-md transition-colors cursor-pointer"
            >
              Apply for a Founding Partner Spot
            </button>
            <p className="text-sm text-white/60">
              3 of 5 spots remaining.
            </p>
          </div>

          {/* Founder profile */}
          <div className="mt-12 pt-10 border-t border-white/15 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/LinkedInProfileImage.jpg"
                alt="Dom Howarth"
                className="rounded-full object-cover border-2 border-white/20 w-16 h-16 md:w-20 md:h-20"
              />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm md:text-base leading-tight">Dom Howarth</p>
                  <Link
                    href="https://linkedin.com/in/dominichowarth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dom Howarth on LinkedIn"
                    className="text-[#A3E635] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
                <p className="text-white/60 text-xs md:text-sm">Founder, Grevlo Ltd</p>
              </div>
            </div>
            <p className="text-white/50 text-xs">Built in Saddleworth, Greater Manchester.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
