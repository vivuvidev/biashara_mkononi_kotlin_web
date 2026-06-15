import { ReactNode } from "react";
import Link from "next/link";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  path: string;
  lang: "en" | "sw";
  page: "privacy" | "terms";
  children: ReactNode;
}

const labels = {
  en: {
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    switchLabel: "Swahili",
    switchLangPath: "sw",
  },
  sw: {
    privacy: "Sera ya Faragha",
    terms: "Sheria na Masharti",
    switchLabel: "English",
    switchLangPath: "en",
  },
};

export default function LegalPageLayout({
  title,
  description,
  path,
  lang,
  page,
  children,
}: LegalPageLayoutProps) {
  const l = labels[lang];

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <Navbar />

      <main>
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#E5E7EB] pb-4">
              <div className="flex gap-2">
                <Link
                  href={`/apps/biashara-mkononi/${lang}/privacy`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    page === "privacy"
                      ? "bg-[#7B1C1C] text-white"
                      : "text-[#6B7280] hover:text-[#0D0D0D]"
                  }`}
                >
                  {l.privacy}
                </Link>
                <Link
                  href={`/apps/biashara-mkononi/${lang}/terms`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    page === "terms"
                      ? "bg-[#7B1C1C] text-white"
                      : "text-[#6B7280] hover:text-[#0D0D0D]"
                  }`}
                >
                  {l.terms}
                </Link>
              </div>
              <Link
                href={`/apps/biashara-mkononi/${l.switchLangPath}/${page}`}
                className="text-sm text-[#6B7280] hover:text-[#0D0D0D] border border-[#E5E7EB] rounded-lg px-3 py-1.5 transition-colors"
              >
                {l.switchLabel}
              </Link>
            </div>

            <article className="prose max-w-none prose-headings:text-[#0D0D0D] prose-p:text-[#6B7280] prose-li:text-[#6B7280] prose-strong:text-[#0D0D0D] prose-a:text-[#7B1C1C]">
              {children}
            </article>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
