import Link from "next/link";
import Image from "next/image";
import { GithubIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const SOCIAL_LINKS = [
  { href: "https://github.com/flavixlabs", label: "GitHub", icon: GithubIcon },
  { href: "https://youtube.com/@flavixlabs", label: "YouTube", icon: YoutubeIcon },
  { href: "https://facebook.com/flavixlabs", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/flavixlabs", label: "Instagram", icon: InstagramIcon },
];

const FOOTER_LINKS = [
  { href: "/apps", label: "Apps" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex flex-col gap-3">
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
          <p className="text-sm text-muted-foreground max-w-xs">
            Building useful apps for everyday life
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Links</h3>
          <nav className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Follow us</h3>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8">
        <p className="text-sm text-muted-foreground">
          © 2026 FlavixLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
