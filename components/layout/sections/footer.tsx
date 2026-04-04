import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">

          {/* Left column — identity */}
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.png"
              alt="Grevlo"
              style={{ height: "28px", width: "auto", marginBottom: "12px" }}
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Grevlo Ltd
              <br />
              Saddleworth, Greater Manchester
              <br />
              Company No. 17121751
            </p>
          </div>

          {/* Centre column — links */}
          <div className="flex flex-col items-center gap-1">
            <Link
              href="mailto:dom@grevlo.com"
              className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
            >
              dom@grevlo.com
            </Link>
            <Link
              href="https://grevlo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
            >
              grevlo.com
            </Link>
            <Link
              href="https://api.grevlo.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
            >
              api.grevlo.com/docs
            </Link>
          </div>

          {/* Right column — tagline + affiliate */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-gray-500 italic md:text-right">
              Built for web agencies who&apos;d rather write a script than fill
              in a form.
            </p>
            <p className="text-xs text-gray-400 md:text-right leading-relaxed">
              We recommend{" "}
              <Link
                href="https://uptimerobot.com/?red=grevlo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1E3A8A] transition-colors"
              >
                UptimeRobot
              </Link>{" "}
              for uptime monitoring. Affiliate link — we earn a small commission
              at no cost to you.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Grevlo Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
