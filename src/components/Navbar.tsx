import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E5E7EB] transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="FlavixLabs" width={28} height={28} className="h-7 w-7" />
          <span className="text-lg font-semibold text-[#0D0D0D]">FlavixLabs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0D0D0D] hover:text-[#7B1C1C] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D0D0D] hover:bg-[#7B1C1C] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
          >
            Get on Play Store
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-[#0D0D0D]"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#FFFFFF] px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0D0D0D] hover:text-[#7B1C1C] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D0D0D] hover:bg-[#7B1C1C] text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm text-center"
          >
            Get on Play Store
          </a>
        </div>
      )}
    </header>
  );
}
