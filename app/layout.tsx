import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
  description:
    "Grevlo automates monthly site health reports for UK web agencies managing maintenance retainers. Uptime, PageSpeed and SSL in a branded PDF. From £49/month flat.",
  openGraph: {
    title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
    description:
      "Grevlo automates monthly site health reports for UK web agencies managing maintenance retainers. Uptime, PageSpeed and SSL in a branded PDF. From £49/month flat.",
    url: "https://grevlo.com",
    siteName: "Grevlo",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
    description:
      "Grevlo automates monthly site health reports for UK web agencies managing maintenance retainers. Uptime, PageSpeed and SSL in a branded PDF. From £49/month flat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background",
          GeistSans.className,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
