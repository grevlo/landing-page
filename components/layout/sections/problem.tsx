const oldWay = [
  "Manually pulling uptime logs",
  "Paying £300/month for dashboards clients ignore",
  "Spending Sunday compiling spreadsheets",
  "Data scattered across 5 different tools",
];

const newWay = [
  "One API call generates the full report",
  "£99/month flat, no per-client fees",
  "Branded PDF delivered automatically",
  "PageSpeed, SSL and uptime in one place",
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 leading-snug">
          Your retainer clients deserve better than a spreadsheet.
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            Web agencies spend 3 to 4 hours every month manually pulling uptime
            logs, running PageSpeed audits, and checking SSL certificates. The
            tools that exist were built for marketing agencies tracking ad spend,
            not developers proving infrastructure value.
          </p>
          <p>
            You are either paying £300 per month for a dashboard your clients
            never log into, or spending Sunday afternoon copying numbers into a
            Word document.
          </p>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* The old way */}
          <div className="rounded-xl border border-red-200 bg-red-50/50 p-6">
            <h3 className="font-semibold text-[#1E3A8A] mb-4 text-base">
              The old way
            </h3>
            <ul className="space-y-3">
              {oldWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-base leading-snug mt-0.5">❌</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Grevlo way */}
          <div className="rounded-xl border border-green-200 bg-green-50/50 p-6">
            <h3 className="font-semibold text-[#1E3A8A] mb-4 text-base">
              The Grevlo way
            </h3>
            <ul className="space-y-3">
              {newWay.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-base leading-snug mt-0.5">
                    ✓
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
