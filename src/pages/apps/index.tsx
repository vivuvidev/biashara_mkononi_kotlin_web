import { Store } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import AppCard from "@/components/AppCard";

export default function Apps() {
  return (
    <>
      <Seo
        title="Apps — FlavixLabs"
        description="Explore the apps built by FlavixLabs, including BiasharaMkononi POS — the smart point of sale app for East African businesses."
        path="/apps"
      />
      <Navbar />

      <main>
        <SectionWrapper>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D0D0D] text-center mb-12">Our Apps</h1>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AppCard
              name="BiasharaMkononi POS"
              tagline="The smart POS for East African businesses"
              description="An offline-first point of sale app built for small businesses in Tanzania and East Africa. Manage sales, products, receipts, and multiple shops — even without internet."
              icon={<Store className="w-6 h-6 text-[#7B1C1C]" />}
              playStoreUrl="https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS"
            />

            <div className="bg-[#F5F5F5] border border-[#E5E7EB] rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-60">
              <h2 className="text-xl font-semibold text-[#0D0D0D]">Coming Soon</h2>
              <p className="text-base text-[#6B7280] mt-3">
                We&apos;re working on new tools for businesses and individuals.
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
