import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-16 sm:py-20">
      <div className="p-8 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: company info */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src="/grevlo-logo.png"
                alt="Grevlo"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Grevlo Ltd
              <br />
              Oldham, Greater Manchester
            </p>
          </div>

          {/* Middle: contact */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              <Link
                href="mailto:dom@grevlo.com"
                className="hover:text-foreground transition-colors"
              >
                dom@grevlo.com
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              <Link
                href="https://grevlo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                grevlo.com
              </Link>
            </p>
          </div>

          {/* Right: tagline */}
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              Built for web agencies who&apos;d rather write a script than fill
              in a form.
            </p>
          </div>
        </div>

        <Separator className="mb-6" />

        <p className="text-sm text-muted-foreground text-center">
          © 2026 Grevlo Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
