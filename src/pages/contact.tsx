import { Mail } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { GithubIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const SOCIAL_LINKS = [
  { href: "https://github.com/flavixlabs", label: "GitHub", icon: GithubIcon },
  { href: "https://youtube.com/@flavixlabs", label: "YouTube", icon: YoutubeIcon },
  { href: "https://facebook.com/flavixlabs", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/flavixlabs", label: "Instagram", icon: InstagramIcon },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Contact — FlavixLabs"
        description="Get in touch with FlavixLabs. Reach us by email or follow us on social media."
        path="/contact"
      />
      <Navbar />

      <main className="flex-1">
        <SectionWrapper className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Contact FlavixLabs</h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
            Have a question, feedback, or need support with one of our apps?
            We&apos;d love to hear from you.
          </p>

          <Button asChild className="h-auto py-3 px-6">
            <a href="mailto:support@flavixlabs.com">
              <Mail className="w-5 h-5" />
              support@flavixlabs.com
            </a>
          </Button>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-foreground mb-4">Follow us</h2>
            <div className="flex items-center justify-center gap-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <Button key={social.href} asChild variant="ghost" size="icon">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
