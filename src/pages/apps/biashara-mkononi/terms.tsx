import { useState } from "react";
import { appRegistry } from "@/lib/appRegistry";
import type { Lang } from "@/lib/appRegistry";
import LegalPageLayout from "@/components/LegalPageLayout";

const SLUG = "biashara-mkononi";

export default function TermsPage() {
  const [lang, setLang] = useState<Lang>("en");
  const app = appRegistry[SLUG];
  const doc = lang === "sw" && app.terms.sw ? app.terms.sw : app.terms.en;
  const Content = doc.content;

  return (
    <LegalPageLayout
      slug={SLUG}
      title={doc.title}
      description={doc.description}
      path={`/apps/${SLUG}/terms`}
      lang={lang}
      onLangChange={setLang}
      page="terms"
      hasSw={!!app.terms.sw}
    >
      <Content />
    </LegalPageLayout>
  );
}
