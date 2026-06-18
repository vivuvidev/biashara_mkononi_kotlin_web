import fs from "fs";
import path from "path";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { marked } from "marked";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

type Locale = "en" | "sw";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Terms of Service",
    description: "FlavixLabs terms of service for BiasharaMkononi POS.",
  },
  sw: {
    title: "Masharti ya Huduma",
    description: "Masharti ya huduma ya FlavixLabs kwa BiasharaMkononi POS.",
  },
};

const labels: Record<Locale, { privacy: string; terms: string; langSwitch: string }> = {
  en: { privacy: "Privacy Policy", terms: "Terms & Conditions", langSwitch: "Swahili" },
  sw: { privacy: "Sera ya Faragha", terms: "Sheria na Masharti", langSwitch: "English" },
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: (["en", "sw"] as Locale[]).map((locale) => ({ params: { locale } })),
  fallback: false,
});

export const getStaticProps = (async ({ params }) => {
  const locale = params!.locale as Locale;
  const file = locale === "sw" ? "terms-of-service-sw.md" : "terms-of-service.md";
  const raw = fs.readFileSync(path.join(process.cwd(), file), "utf-8");
  const html = await marked(raw);
  return { props: { html, locale } };
}) satisfies GetStaticProps<{ html: string; locale: Locale }>;

export default function TermsPage({
  html,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, description } = meta[locale];
  const l = labels[locale];
  const base = `/apps/biashara-mkononi/${locale}`;
  const altLocale: Locale = locale === "en" ? "sw" : "en";

  return (
    <div className="flex flex-col min-h-screen">
      <Seo title={title} description={description} path={`${base}/terms`} />
      <Navbar />

      <main className="flex-1">
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-border pb-4">
              <div className="flex gap-2">
                <Link
                  href={`${base}/privacy`}
                  className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.privacy}
                </Link>
                <Link
                  href={`${base}/terms`}
                  className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium"
                >
                  {l.terms}
                </Link>
              </div>
              <Link
                href={`/apps/biashara-mkononi/${altLocale}/terms`}
                className="inline-flex items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.langSwitch}
              </Link>
            </div>

            <article
              className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-foreground prose-table:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
