import { useState } from "react";
import { appRegistry } from "@/lib/appRegistry";
import type { Lang } from "@/lib/appRegistry";
import LegalPageLayout from "@/components/LegalPageLayout";

const SLUG = "biashara-mkononi";

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("en");
  const app = appRegistry[SLUG];
  const doc = lang === "sw" && app.privacy.sw ? app.privacy.sw : app.privacy.en;
  const Content = doc.content;

  return (
    <LegalPageLayout
      slug={SLUG}
      title={doc.title}
      description={doc.description}
      path={`/apps/${SLUG}/privacy`}
      lang={lang}
      onLangChange={setLang}
      page="privacy"
      hasSw={!!app.privacy.sw}
    >
      <Content />
    </LegalPageLayout>
  );
}
