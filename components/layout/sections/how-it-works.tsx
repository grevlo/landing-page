const steps = [
  {
    number: "01",
    title: "Set up once",
    description:
      "Upload your agency branding and connect your UptimeRobot account. Takes five minutes.",
  },
  {
    number: "02",
    title: "Point us at a URL",
    description:
      "At the end of each month, POST your client's website URL to the Grevlo API. That is it.",
  },
  {
    number: "03",
    title: "Receive a branded PDF",
    description:
      "Grevlo fetches live PageSpeed scores from Google, checks the SSL certificate, pulls uptime data from UptimeRobot, and returns a fully branded PDF report ready to send to your client. No dashboard. No login. No manual work.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-16">
        Three steps. One API call. One professional PDF.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {steps.map(({ number, title, description }) => (
          <div key={number} className="relative">
            <div className="text-5xl font-bold text-[#1E3A8A] mb-4 leading-none">
              {number}
            </div>
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* Code block */}
      <div className="max-w-2xl mx-auto">
        <div className="rounded-xl border border-[#1E3A8A]/20 bg-[#1E3A8A] text-white shadow-xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#1E3A8A]/80">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-white/40 font-mono">
              POST https://api.grevlo.com/v1/reports/generate
            </span>
          </div>
          <pre className="p-6 text-sm font-mono text-white/90 leading-relaxed overflow-x-auto">
            <code>{`POST https://api.grevlo.com/v1/reports/generate
{
  "brandingId": "ag_abc123",
  "clientName": "Acme Corporation",
  "websiteUrl": "https://acmecorp.co.uk",
  "period": {
    "start": "2026-02-01",
    "end": "2026-02-28"
  }
}`}</code>
          </pre>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Returns a branded PDF in milliseconds.
        </p>
        <p className="text-center text-xs text-muted-foreground/70 mt-2 italic">
          API currently in private beta — endpoint provided on founding partner onboarding.
        </p>
      </div>
    </section>
  );
};
