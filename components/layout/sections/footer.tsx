import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Left column */}
          <div>
            <span
              className="block mb-3"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: "#1E3A8A",
                letterSpacing: "-0.5px",
              }}
            >
              GREVLO
            </span>
            <p className="text-sm text-gray-600">
              Grevlo Ltd
              <br />
              Oldham, Greater Manchester
              <br />
              Company No. 17121751
            </p>
          </div>

          {/* Centre column */}
          <div className="text-center">
            <Link
              href="mailto:dom@grevlo.com"
              className="block text-sm text-gray-600 hover:text-[#1E3A8A] mb-1 transition-colors"
            >
              dom@grevlo.com
            </Link>
            <Link
              href="https://grevlo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
            >
              grevlo.com
            </Link>
          </div>

          {/* Right column */}
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 italic">
              Built for web agencies who&apos;d rather write a script than fill
              in a form.
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
