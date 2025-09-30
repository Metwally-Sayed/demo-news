'use client';

import { SITE_CONFIG } from '@/lib/metadata';

interface OrganizationSchemaProps {
  locale: string;
}

interface ArticleSchemaProps {
  article: {
    title: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    author: {
      name: string;
    };
    category: {
      name: string;
    };
    publishedAt: string;
    tags: string[];
  };
  slug: string;
  locale: string;
}

interface WebsiteSchemaProps {
  locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    description: SITE_CONFIG.siteDescription,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.twitterHandle.replace('@', '')}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    foundingDate: '2024',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-50',
    },
    knowsAbout: [
      'News',
      'Technology',
      'Business',
      'Sports',
      'Politics',
      'Health',
      'Science',
      'Entertainment',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function WebsiteSchema({ locale }: WebsiteSchemaProps) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.baseUrl,
    description: SITE_CONFIG.siteDescription,
    inLanguage: locale === 'ar' ? 'ar' : 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.baseUrl}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

export function ArticleSchema({ article, slug, locale }: ArticleSchemaProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: {
      '@type': 'ImageObject',
      url: article.coverImage || `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultImage}`,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.siteName,
      url: SITE_CONFIG.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.baseUrl}/${locale}/articles/${slug}`,
    },
    url: `${SITE_CONFIG.baseUrl}/${locale}/articles/${slug}`,
    inLanguage: locale === 'ar' ? 'ar' : 'en',
    articleSection: article.category.name,
    keywords: article.tags.join(', '),
    wordCount: article.content.replace(/<[^>]*>/g, '').split(' ').length,
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}