import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left column — identity */}
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.png"
              alt="Grevlo"
              style={{ height: "28px", width: "auto", marginBottom: "16px" }}
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Grevlo Ltd
              <br />
              Saddleworth, Greater Manchester
              <br />
              Company No. 17121751
            </p>
          </div>

          {/* Right column — nav + contact */}
          <div className="grid grid-cols-2 gap-8">

            {/* Nav links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://api.grevlo.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="/#founding-partner" className="text-sm text-[#1E3A8A] font-medium hover:underline transition-colors">
                    Apply for Access
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                Contact
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="mailto:dom@grevlo.com" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    dom@grevlo.com
                  </Link>
                </li>
                <li>
                  <Link href="https://grevlo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                    grevlo.com
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Grevlo Ltd. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center md:text-right">
            We recommend{" "}
            <Link
              href="https://uptimerobot.com/?red=grevlo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#1E3A8A] transition-colors"
            >
              UptimeRobot
            </Link>{" "}
            for uptime monitoring — affiliate link, no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};
