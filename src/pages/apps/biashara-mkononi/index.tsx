import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  WifiOff,
  Printer,
  ScanLine,
  Store,
  PauseCircle,
  Languages,
  BarChart3,
  RotateCcw,
  Percent,
  CloudUpload,
} from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";

const SCREENSHOTS = [
  { src: "/biashara-mkononi/frame1.jpg", alt: "BiasharaMkononi POS screenshot 1" },
  { src: "/biashara-mkononi/frame2.jpg", alt: "BiasharaMkononi POS screenshot 2" },
  { src: "/biashara-mkononi/frame3.png", alt: "BiasharaMkononi POS screenshot 3" },
  { src: "/biashara-mkononi/frame4.png", alt: "BiasharaMkononi POS screenshot 4" },
  { src: "/biashara-mkononi/frame5.png", alt: "BiasharaMkononi POS screenshot 5" },
  { src: "/biashara-mkononi/frame6.png", alt: "BiasharaMkononi POS screenshot 6" },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS";

const FEATURES = [
  {
    icon: WifiOff,
    title: "Offline-first",
    description: "Works without internet, syncs when connected.",
  },
  {
    icon: Printer,
    title: "Thermal receipt printing",
    description: "Print receipts with built-in or Bluetooth thermal printers.",
  },
  {
    icon: ScanLine,
    title: "Barcode scanning",
    description: "Scan products quickly with your phone's camera.",
  },
  {
    icon: Store,
    title: "Multiple shops management",
    description: "Manage several shops from a single account.",
  },
  {
    icon: PauseCircle,
    title: "Held orders",
    description: "Park a sale and come back to it later.",
  },
  {
    icon: Languages,
    title: "Swahili and English support",
    description: "Use the app in the language your team is comfortable with.",
  },
  {
    icon: BarChart3,
    title: "Sales reports and analytics",
    description: "Track performance with clear sales reports.",
  },
  {
    icon: RotateCcw,
    title: "Void sales with stock restoration",
    description: "Cancel a sale and automatically restore stock levels.",
  },
  {
    icon: Percent,
    title: "Discount and tax management",
    description: "Apply discounts and taxes to sales with ease.",
  },
  {
    icon: CloudUpload,
    title: "Secure cloud backup",
    description: "Back up your data securely and sync across multiple devices.",
  },
];

export default function BiasharaMkononi() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="BiasharaMkononi POS — FlavixLabs"
        description="BiasharaMkononi POS is an offline-first point of sale app for small businesses in Tanzania and East Africa. Manage sales, products, receipts, and multiple shops — even without internet."
        path="/apps/biashara-mkononi"
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <SectionWrapper className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">BiasharaMkononi POS</h1>
          <p className="text-base text-foreground font-medium mt-3">
            The smart POS for East African businesses
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-6">
            An offline-first point of sale app built for small businesses in
            Tanzania and East Africa. Manage sales, products, receipts, and
            multiple shops — even without internet.
          </p>
          <div className="mt-8">
            <Button asChild className="h-auto py-3 px-6">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                Download on Google Play
              </a>
            </Button>
          </div>
        </SectionWrapper>

        {/* Screenshots */}
        <SectionWrapper>
          <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {SCREENSHOTS.map((shot) => (
              <div
                key={shot.src}
                className="flex-none snap-center w-48 md:w-56 rounded-2xl overflow-hidden border border-border shadow-sm"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={224}
                  height={486}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Features grid */}
        <SectionWrapper>
          <h2 className="text-3xl font-semibold text-foreground text-center mb-12">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* About the app */}
        <SectionWrapper>
          <h2 className="text-3xl font-semibold text-foreground text-center mb-6">About the app</h2>
          <div className="max-w-2xl mx-auto text-base text-muted-foreground space-y-4">
            <p>
              BiasharaMkononi POS is a point-of-sale app that helps small
              business owners run their day-to-day operations from a phone or
              tablet — managing products, recording sales, printing receipts,
              and tracking inventory, even when there&apos;s no internet
              connection.
            </p>
            <p>
              It&apos;s built for small businesses, shops, kiosks, and vendors
              across Tanzania and East Africa who need a fast, reliable POS
              that works in real-world conditions.
            </p>
            <p>
              The app is available in both English and Swahili, so you and
              your staff can use it in the language you&apos;re most
              comfortable with.
            </p>
          </div>
        </SectionWrapper>

        {/* Legal links */}
        <SectionWrapper className="text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Legal</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link
              href="/apps/biashara-mkononi/en/privacy"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/apps/biashara-mkononi/en/terms"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
