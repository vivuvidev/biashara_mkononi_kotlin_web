import { ReactNode } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/appRegistry";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  path: string;
  slug: string;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  page: "privacy" | "terms";
  hasSw: boolean;
  children: ReactNode;
}

const labels = {
  en: { privacy: "Privacy Policy", terms: "Terms & Conditions", switchLabel: "Swahili" },
  sw: { privacy: "Sera ya Faragha", terms: "Sheria na Masharti", switchLabel: "English" },
};

export default function LegalPageLayout({
  title,
  description,
  path,
  slug,
  lang,
  onLangChange,
  page,
  hasSw,
  children,
}: LegalPageLayoutProps) {
  const l = labels[lang];

  return (
    <div className="flex flex-col min-h-screen">
      <Seo title={title} description={description} path={path} />
      <Navbar />

      <main className="flex-1">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border pb-4">
              <div className="flex gap-2">
                <Button
                  asChild
                  variant={page === "privacy" ? "default" : "ghost"}
                  className="h-auto py-1.5 px-3 text-sm"
                >
                  <Link href={`/apps/${slug}/privacy`}>{l.privacy}</Link>
                </Button>
                <Button
                  asChild
                  variant={page === "terms" ? "default" : "ghost"}
                  className="h-auto py-1.5 px-3 text-sm"
                >
                  <Link href={`/apps/${slug}/terms`}>{l.terms}</Link>
                </Button>
              </div>
              {hasSw && (
                <Button
                  variant="outline"
                  className="h-auto py-1.5 px-3 text-sm"
                  onClick={() => onLangChange(lang === "en" ? "sw" : "en")}
                >
                  {l.switchLabel}
                </Button>
              )}
            </div>

            <article className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-foreground">
              {children}
            </article>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
