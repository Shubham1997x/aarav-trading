import Link from "next/link";
import { LuMenu, LuSearch, LuSparkles } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, buildWhatsappUrl } from "@/lib/site-config";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Image src="/logo.png" alt="Logo" width={300} height={300} className="rounded-lg" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              {siteConfig.companyName}
            </span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">

          <Button
            nativeButton={false}
            render={
              <a
                href={buildWhatsappUrl(
                  `Hi ${siteConfig.companyName}, I'd like to know more about your products.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="h-10 gap-2 rounded-full bg-emerald-600 px-4 text-base text-white hover:bg-emerald-700"
          >
            <FaWhatsapp className="size-4" />
            WhatsApp Us
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="outline" size="icon" className="lg:hidden" />}
          >
            <LuMenu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg">
                {siteConfig.companyName}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 p-4">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={buildWhatsappUrl(
                      `Hi ${siteConfig.companyName}, I'd like to know more about your products.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                className="h-11 w-full gap-2 rounded-full bg-emerald-600 text-base text-white hover:bg-emerald-700"
              >
                <FaWhatsapp className="size-4" />
                WhatsApp Us
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
