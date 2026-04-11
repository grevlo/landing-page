"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
  external?: boolean;
}

const routeList: RouteProps[] = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "https://api.grevlo.com/docs", label: "Docs", external: true },
  { href: "/blog", label: "Blog" },
  { href: "/whitepaper", label: "Research" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#founding-partner", label: "Founding Partner" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="flex items-center gap-2 px-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-horizontal.png"
          alt="Grevlo"
          style={{ height: "36px", width: "auto" }}
        />
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo-horizontal.png"
                      alt="Grevlo"
                      style={{ height: "36px", width: "auto" }}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label, external }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <Button
                asChild
                className="w-full bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-semibold"
              >
                <Link href="/#founding-partner" onClick={() => setIsOpen(false)}>
                  Apply for Access
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <nav className="hidden lg:flex items-center gap-6 mx-auto">
        {routeList.map(({ href, label, external }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-2">
        <Button
          asChild
          size="sm"
          className="bg-[#A3E635] text-[#1E3A8A] hover:bg-[#92d120] font-semibold"
        >
          <Link href="/#demo">Try the Demo</Link>
        </Button>
      </div>
    </header>
  );
};
