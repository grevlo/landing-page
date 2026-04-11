import { DemoForm } from "@/components/demo-form";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="demo" className="container w-full">
      <div className="mx-auto py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:max-w-screen-xl">

        {/* Left: headline + subheadline */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight">
            Automate Web Agency Reporting with One API Call
          </h1>
          <h2 className="max-w-[560px] mx-auto lg:mx-0 text-xl text-muted-foreground leading-relaxed font-normal">
            Stop compiling monthly reports manually. Grevlo is a headless API
            for web agencies — give us your client&apos;s URL, get back a fully
            branded white-label PDF covering uptime, PageSpeed, and SSL.
            Automatically.
          </h2>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 pt-2">
            <Link
              href="/#founding-partner"
              className="inline-block bg-[#A3E635] text-[#1E3A8A] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#92d120] transition-colors"
            >
              Apply for Founding Partner Access
            </Link>
          </div>
        </div>

        {/* Right: Try It Now form */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
          <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">See it in action</h3>
          <p className="text-sm text-gray-500 mb-6">
            Generate a real report for your agency in 45 seconds. No signup needed.
          </p>
          <DemoForm />
          <p className="mt-4 text-xs text-gray-400 text-center">
            Generating real reports since April 2026 ·{" "}
            <Link
              href="https://api.grevlo.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1E3A8A] transition-colors underline"
            >
              api.grevlo.com/docs
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
