import React from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO = {
  title: "Abhyudaya Coding Club - Innovation Through Collaboration",
  description:
    "Join Abhyudaya Coding Club to learn, build, and innovate together. Participate in hackathons, workshops, coding competitions, and build real-world projects.",
  keywords:
    "Abhyudaya, Coding Club, SVVV, Hackathons, Web Development, Programming, Software Engineering, Projects, Technical Club",
  image: "https://res.cloudinary.com/djtagt9xw/image/upload/v1758685560/20250822_153145_luobfm.jpg",
  url: "https://abhyudaya-svvv.vercel.app",
  type: "website",
};

/**
 * Returns static React Router meta descriptor tags for use inside route `meta()` functions.
 */
export function getSEOMeta(props?: SEOProps) {
  const meta = {
    title: props?.title
      ? `${props.title} | Abhyudaya Coding Club`
      : defaultSEO.title,
    description: props?.description || defaultSEO.description,
    keywords: props?.keywords || defaultSEO.keywords,
    image: props?.image || defaultSEO.image,
    url: props?.url || defaultSEO.url,
    type: props?.type || defaultSEO.type,
  };

  return [
    { title: meta.title },
    { name: "description", content: meta.description },
    { name: "keywords", content: meta.keywords },
    { property: "og:title", content: meta.title },
    { property: "og:description", content: meta.description },
    { property: "og:image", content: meta.image },
    { property: "og:url", content: meta.url },
    { property: "og:type", content: meta.type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: meta.title },
    { name: "twitter:description", content: meta.description },
    { name: "twitter:image", content: meta.image },
  ];
}

/**
 * SEO Component for rendering Meta head tags directly in HTML / JSX layouts.
 */
export default function SEO(props: SEOProps) {
  const seo = {
    title: props.title
      ? `${props.title} | Abhyudaya Coding Club`
      : defaultSEO.title,
    description: props.description || defaultSEO.description,
    keywords: props.keywords || defaultSEO.keywords,
    image: props.image || defaultSEO.image,
    url: props.url || defaultSEO.url,
    type: props.type || defaultSEO.type,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
}
