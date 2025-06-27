import type { Metadata } from 'next';

const baseUrl = 'https://largolabs.dev';
const siteName = 'Largo Labs';
const defaultDescription = "Justin Largo's personal website, portfolio, and blog featuring research findings, technical discussions, and project demonstrations.";

export function generateMetadata({
  title,
  description = defaultDescription,
  path = '',
  image,
  type = 'website',
  publishedTime,
  tags,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = title.includes('Largo Labs') ? title : `${title} | Largo Labs`;
  const ogImage = image || `${baseUrl}/og-image.png`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@largolabs', // Update with your actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
      types: {
        'application/rss+xml': `${baseUrl}/feed.xml`,
      },
    },
  };

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      authors: ['Justin Largo'],
      section: 'Technology',
      tags,
    };
  }

  return metadata;
}

export const defaultMetadata = generateMetadata({
  title: siteName,
  description: defaultDescription,
});