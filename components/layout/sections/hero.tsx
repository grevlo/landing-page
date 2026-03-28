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

      </div>
    </section>
  );
};
