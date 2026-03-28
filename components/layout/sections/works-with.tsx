import Link from "next/link";

export const WorksWithSection = () => {
  return (
    <section className="container py-10 sm:py-12">
      <h2 className="text-lg font-semibold text-[#1E3A8A] text-center mb-6 tracking-wider uppercase">
        Works great with
      </h2>

      <div className="max-w-[480px] mx-auto">
        <div className="rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">UptimeRobot</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We recommend UptimeRobot for uptime monitoring. Free for up to 50
              monitors.{" "}
              <span className="text-muted-foreground/70 text-xs">
                Affiliate link — we earn a small commission at no cost to you.
              </span>
            </p>
          </div>
          <Link
            href="https://uptimerobot.com/?red=grevlo"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium text-[#1E3A8A] border border-[#1E3A8A] rounded-lg px-4 py-2 hover:bg-[#1E3A8A] hover:text-white transition-colors"
          >
            Try free →
          </Link>
        </div>
      </div>
    </section>
  );
};
