import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="border-t-2 border-[#1E3A8A]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Left: logo + company details */}
          <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
            <Link href="/">
              <Image
                src="/grevlo-logo.png"
                alt="Grevlo"
                width={110}
                height={28}
                className="w-auto brightness-0"
                style={{ height: "28px" }}
              />
            </Link>
            <p className="text-sm text-[#2F3E46] leading-relaxed">
              Grevlo Ltd
              <br />
              Oldham, Greater Manchester
              <br />
              Company No. 17121751
            </p>
          </div>

          {/* Centre: contact links */}
          <div className="flex flex-col gap-2 items-center text-center">
            <Link
              href="mailto:dom@grevlo.com"
              className="text-sm text-[#2F3E46] hover:text-[#1E3A8A] transition-colors"
            >
              dom@grevlo.com
            </Link>
            <Link
              href="https://grevlo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2F3E46] hover:text-[#1E3A8A] transition-colors"
            >
              grevlo.com
            </Link>
          </div>

          {/* Right: tagline */}
          <div className="flex items-start justify-center md:justify-end">
            <p className="text-sm text-[#2F3E46] leading-relaxed italic text-center md:text-right max-w-[220px]">
              Built for web agencies who&apos;d rather write a script than fill
              in a form.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-[#2F3E46]/60 text-center">
            © 2026 Grevlo Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
