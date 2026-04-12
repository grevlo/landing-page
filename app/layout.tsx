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
    "Grevlo is a headless API for web agencies. POST a URL, get back a fully branded white-label PDF performance report covering uptime, PageSpeed, and SSL. From £49/month, no per-data-source fees.",
  openGraph: {
    title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
    description:
      "Grevlo is a headless API for web agencies. POST a URL, get back a fully branded white-label PDF performance report covering uptime, PageSpeed, and SSL. From £49/month, no per-data-source fees.",
    url: "https://grevlo.com",
    siteName: "Grevlo",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grevlo — Automated White-Label PDF Reports for Web Agencies",
    description:
      "Grevlo is a headless API for web agencies. POST a URL, get back a fully branded white-label PDF performance report covering uptime, PageSpeed, and SSL. From £49/month, no per-data-source fees.",
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
