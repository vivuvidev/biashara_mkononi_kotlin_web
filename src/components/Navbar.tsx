import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="FlavixLabs"
            width={28}
            height={28}
            className="h-7 w-7 dark:invert"
          />
          <span className="text-lg font-semibold text-foreground">FlavixLabs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="h-auto py-2.5 px-6">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Get on Play Store
            </a>
          </Button>
        </div>

        {/* Mobile — Sheet slide-in */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 flex flex-col gap-0 p-0">
              <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
                <Image
                  src="/logo.svg"
                  alt="FlavixLabs"
                  width={24}
                  height={24}
                  className="h-6 w-6 dark:invert"
                />
                <span className="text-base font-semibold text-foreground">FlavixLabs</span>
              </div>
              <nav className="flex flex-col px-4 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:bg-muted px-3 py-2.5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto px-4 pb-6">
                <Button asChild className="w-full h-auto py-3 px-6">
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    Get on Play Store
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
