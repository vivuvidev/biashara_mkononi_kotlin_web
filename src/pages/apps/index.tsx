import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import AppCard from "@/components/AppCard";
import AnimatedGrid from "@/components/AnimatedGrid";
import Reveal from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";

export default function Apps() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Apps — FlavixLabs"
        description="Explore the apps built by FlavixLabs, including BiasharaMkononi POS — the smart point of sale app for East African businesses."
        path="/apps"
      />
      <Navbar />

      <main className="flex-1">
        <SectionWrapper>
          <Reveal className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Our Apps</h1>
          </Reveal>

          <AnimatedGrid className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AppCard
              name="BiasharaMkononi POS"
              tagline="The smart POS for East African businesses"
              description="An offline-first point of sale app built for small businesses in Tanzania and East Africa. Manage sales, products, receipts, and multiple shops — even without internet."
              iconSrc="/biashara-mkononi/icon.svg"
              href="/apps/biashara-mkononi"
              playStoreUrl="https://play.google.com/store/apps/details?id=com.vivuvidev.biasharaMkononiPOS"
            />

            <Card className="h-full opacity-60 py-0 ring-0 border border-border">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
                <p className="text-base text-muted-foreground mt-3">
                  We&apos;re working on new tools for businesses and individuals.
                </p>
              </CardContent>
            </Card>
          </AnimatedGrid>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
