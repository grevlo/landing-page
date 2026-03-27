import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A8A] leading-tight">
            Stop compiling monthly reports manually.
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Grevlo is a headless API for web agencies. Give us your client&apos;s
            URL. Get back a fully branded white-label PDF performance report
            covering uptime, PageSpeed, and SSL. Automatically.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-bold text-base px-8 py-6"
            >
              <Link href="#founding-partner">
                Apply for Founding Partner Access
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              5 founding partner spots — 3 months free, permanent rate lock at
              £99/month.
            </p>
          </div>
        </div>

        {/* Visual accent — code preview teaser */}
        <div className="relative w-full max-w-2xl mt-6">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#1E3A8A]/20 rounded-full blur-3xl" />
          <div className="relative rounded-xl border border-[#1E3A8A]/20 bg-[#1E3A8A] text-white shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-[#1E3A8A]/80">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-white/40 font-mono">
                POST /v1/reports/generate
              </span>
            </div>
            <pre className="p-6 text-sm font-mono text-white/90 leading-relaxed overflow-x-auto">
              <code>{`{
  "brandingId": "ag_abc123",
  "clientName": "Acme Corporation",
  "websiteUrl": "https://acmecorp.co.uk"
}

// Returns a branded PDF in milliseconds.`}</code>
            </pre>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-background rounded-b-xl" />
        </div>
      </div>
    </section>
  );
};
