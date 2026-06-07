import Head from "next/head";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  description?: string;
  lang?: "en" | "sw";
  privacyHref?: string;
  termsHref?: string;
  children: React.ReactNode;
}

const labels = {
  en: {
    home: "Home",
    langSwitch: "Swahili",
    langPath: "sw",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    lastUpdated: "Last updated",
  },
  sw: {
    home: "Nyumbani",
    langSwitch: "English",
    langPath: "en",
    privacy: "Sera ya Faragha",
    terms: "Sheria na Masharti",
    lastUpdated: "Imesasishwa",
  },
};

export default function LegalLayout({
  title,
  description,
  lang,
  privacyHref,
  termsHref,
  children,
}: LegalLayoutProps) {
  const l = labels[lang ?? "en"];
  const currentPage = title.toLowerCase().includes("privacy") || title.toLowerCase().includes("faragha")
    ? "privacy"
    : "terms";
  const resolvedPrivacyHref = privacyHref ?? (lang ? `/${lang}/privacy` : "/privacy-policy");
  const resolvedTermsHref = termsHref ?? (lang ? `/${lang}/terms` : "/terms-of-service");

  return (
    <>
      <Head>
        <title>{title} — Biashara Mkononi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description && <meta name="description" content={description} />}
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
            {lang && (
              <Link
                href={`/${l.langPath}/${currentPage}`}
                className="text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded px-2 py-1"
              >
                {l.langSwitch}
              </Link>
            )}
          </div>
        </header>

        {/* Nav tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 flex gap-1">
            <Link
              href={resolvedPrivacyHref}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                currentPage === "privacy"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {l.privacy}
            </Link>
            <Link
              href={resolvedTermsHref}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                currentPage === "terms"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {l.terms}
            </Link>
          </div>
        </div>

        {/* Content */}
        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-10 prose prose-gray max-w-none">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Biashara Mkononi
        </footer>
      </div>
    </>
  );
}
