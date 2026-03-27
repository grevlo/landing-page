export const ProblemSection = () => {
  return (
    <section id="problem" className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 leading-snug">
          Your retainer clients deserve better than a spreadsheet.
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
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
          <p className="text-[#1E3A8A] font-semibold text-xl">
            There is a better way.
          </p>
        </div>
      </div>
    </section>
  );
};
