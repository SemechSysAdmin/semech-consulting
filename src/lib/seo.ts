const SITE_URL = "https://semechconsult.ng";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
type SeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  jsonLd?: Record<string, unknown>;
};

export function buildHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image,
  jsonLd,
}: SeoInput) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? "/assets/hero-skyscraper.jpg");
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: ogTitle ?? title },
      { property: "og:description", content: ogDescription ?? description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle ?? title },
      { name: "twitter:description", content: ogDescription ?? description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  };
}
