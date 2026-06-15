import { Mail } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { GithubIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const SOCIAL_LINKS = [
  { href: "https://github.com/flavixlabs", label: "GitHub", icon: GithubIcon },
  { href: "https://youtube.com/@flavixlabs", label: "YouTube", icon: YoutubeIcon },
  { href: "https://facebook.com/flavixlabs", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/flavixlabs", label: "Instagram", icon: InstagramIcon },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — FlavixLabs"
        description="Get in touch with FlavixLabs. Reach us by email or follow us on social media."
        path="/contact"
      />
      <Navbar />

      <main>
        <SectionWrapper className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D0D0D] mb-6">Contact FlavixLabs</h1>
          <p className="text-base text-[#6B7280] max-w-xl mx-auto mb-8">
            Have a question, feedback, or need support with one of our apps?
            We&apos;d love to hear from you.
          </p>

          <a
            href="mailto:support@flavixlabs.com"
            className="inline-flex items-center gap-2 bg-[#7B1C1C] hover:bg-[#6B1A1A] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Mail className="w-5 h-5" />
            support@flavixlabs.com
          </a>

          <div className="mt-12">
            <h2 className="text-sm font-semibold text-[#0D0D0D] mb-4">Follow us</h2>
            <div className="flex items-center justify-center gap-6">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[#6B7280] hover:text-[#0D0D0D] transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
