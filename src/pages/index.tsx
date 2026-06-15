import Link from "next/link";
import Image from "next/image";
import { Shield, Users, Zap, Store, Mail, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import AppCard from "@/components/AppCard";
import FeatureCard from "@/components/FeatureCard";
import { GithubIcon, YoutubeIcon, FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS";

const SOCIAL_LINKS = [
  { href: "https://github.com/flavixlabs", label: "GitHub", icon: GithubIcon },
  { href: "https://youtube.com/@flavixlabs", label: "YouTube", icon: YoutubeIcon },
  { href: "https://facebook.com/flavixlabs", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/flavixlabs", label: "Instagram", icon: InstagramIcon },
];

export default function Home() {
  return (
    <>
      <Seo
        title="FlavixLabs — Building useful apps for everyday life"
        description="FlavixLabs creates simple, powerful mobile apps for businesses and individuals across East Africa."
        path="/"
      />
      <Navbar />

      <main>
        {/* Hero */}
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left column */}
            <div className="text-center lg:text-left">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E7EB] hover:border-[#7B1C1C] rounded-full px-4 py-1.5 text-sm font-medium text-[#6B7280] hover:text-[#0D0D0D] transition-colors"
              >
                Now on Google Play
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D0D0D] mt-6 leading-tight">
                Building useful apps for{" "}
                <span className="font-normal italic font-[family-name:var(--font-display)]">
                  everyday
                </span>{" "}
                life
              </h1>

              <p className="text-base text-[#6B7280] max-w-xl mx-auto lg:mx-0 mt-6">
                FlavixLabs creates simple, powerful mobile apps for businesses
                and individuals across East Africa.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-8">
                <Link
                  href="/apps"
                  className="inline-flex items-center justify-center gap-2 bg-[#7B1C1C] hover:bg-[#6B1A1A] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto text-center"
                >
                  Explore Apps
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto text-center"
                >
                  <Play className="w-4 h-4" />
                  Download on Play Store
                </a>
              </div>

              <p className="text-sm text-[#9CA3AF] mt-4">Available on Android</p>
            </div>

            {/* Right column - phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#7B1C1C]/20 blur-3xl rounded-full" />

                {/* Phone mockup */}
                <div className="relative">
                  <Image
                    src="/mockup-left.png"
                    alt="BiasharaMkononi POS app running on a phone"
                    width={2505}
                    height={2116}
                    quality={100}
                    preload
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="relative w-full h-auto animate-[float_6s_ease-in-out_infinite]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none" />
                </div>

                {/* Floating card - offline first */}
                <div className="absolute -left-4 sm:-left-8 top-6 bg-white rounded-xl shadow-md px-4 py-3 animate-[float_6s_ease-in-out_infinite]">
                  <p className="text-lg font-bold text-[#0D0D0D]">Offline First</p>
                  <p className="text-xs text-[#6B7280]">Works anywhere</p>
                </div>

                {/* Floating card - sales synced */}
                <div className="absolute -right-4 sm:-right-8 bottom-10 bg-white rounded-xl shadow-md px-4 py-3 animate-[float_6s_ease-in-out_infinite_1s]">
                  <p className="text-2xl font-bold text-[#0D0D0D]">1,200+</p>
                  <p className="text-xs text-[#6B7280]">Sales recorded</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Apps */}
        <SectionWrapper id="apps">
          <h2 className="text-3xl font-semibold text-[#0D0D0D] text-center mb-12">Our Apps</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AppCard
              name="BiasharaMkononi POS"
              tagline="The smart POS for East African businesses"
              description="An offline-first point of sale app built for small businesses in Tanzania and East Africa. Manage sales, products, receipts, and multiple shops — even without internet."
              icon={<Store className="w-6 h-6 text-[#7B1C1C]" />}
              playStoreUrl="https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS"
            />
            <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-60">
              <h3 className="text-xl font-semibold text-[#0D0D0D]">More apps coming soon</h3>
              <p className="text-base text-[#6B7280] mt-3">
                We&apos;re working on new tools for businesses and individuals.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Features */}
        <SectionWrapper>
          <h2 className="text-3xl font-semibold text-[#0D0D0D] text-center mb-12">Why FlavixLabs</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <FeatureCard
              icon={Shield}
              title="Reliable"
              description="Built to work offline. Your data is always safe and available."
            />
            <FeatureCard
              icon={Users}
              title="User-focused"
              description="Designed for real people running real businesses in East Africa."
            />
            <FeatureCard
              icon={Zap}
              title="Modern technology"
              description="Built with the latest tools for fast, smooth experiences."
            />
          </div>
        </SectionWrapper>

        {/* About */}
        <SectionWrapper id="about">
          <h2 className="text-3xl font-semibold text-[#0D0D0D] text-center mb-6">About FlavixLabs</h2>
          <p className="text-base text-[#6B7280] max-w-2xl mx-auto text-center">
            FlavixLabs is an independent software company building practical
            mobile apps for everyday use. We focus on simplicity, reliability,
            and making technology accessible to businesses across East Africa.
          </p>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper id="contact" className="text-center">
          <h2 className="text-3xl font-semibold text-[#0D0D0D] mb-6">Get in touch</h2>
          <a
            href="mailto:support@flavixlabs.com"
            className="inline-flex items-center gap-2 text-[#7B1C1C] hover:text-[#6B1A1A] font-medium transition-colors"
          >
            <Mail className="w-5 h-5" />
            support@flavixlabs.com
          </a>
          <div className="flex items-center justify-center gap-4 mt-6">
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
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
