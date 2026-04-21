import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_1fr_1fr] gap-12 items-start">

          {/* Col 1 — identity */}
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.png"
              alt="Grevlo"
              style={{ height: "28px", width: "auto", marginBottom: "8px" }}
            />
            <p className="text-sm text-gray-500 leading-relaxed mt-1">
              Grevlo Ltd
              <br />
              Saddleworth, Greater Manchester
              <br />
              Company No. 17121751
            </p>
            <Link
              href="https://www.grevlo.com/#founding-partner"
              className="inline-block mt-4 text-sm font-semibold bg-[#A3E635] text-[#1E3A8A] px-3 py-1 rounded-full hover:bg-[#92d120] transition-colors"
            >
              Apply for Access
            </Link>
          </div>

          {/* Col 2 — navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
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
                <Link href="/whitepaper" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="https://api.grevlo.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/#founding-partner" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                  Founding Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Contact &amp; Docs
            </p>
            <ul className="flex flex-col gap-2.5">
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
              <li>
                <Link href="https://api.grevlo.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors">
                  api.grevlo.com/docs
                </Link>
              </li>
            </ul>
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
