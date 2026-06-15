import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const SITE_NAME = "FlavixLabs";
const BASE_URL = "https://flavixlabs.com";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/og-image.png",
}: SeoProps) {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${BASE_URL}${image}`} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
