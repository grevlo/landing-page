import { Check } from "lucide-react";

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
              Or email{" "}
              <a
                href="mailto:dom@grevlo.com"
                className="text-white/80 underline hover:text-white transition-colors"
              >
                dom@grevlo.com
              </a>{" "}
              directly. 3 of 5 spots remaining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
