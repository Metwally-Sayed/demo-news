import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Base configuration for the site
export const SITE_CONFIG = {
  baseUrl: 'https://demo-news-virid.vercel.app',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@demonews',
  siteName: 'Demo News Portal',
  siteDescription: 'Your trusted source for the latest breaking news and updates from around the world.',
} as const;

// TypeScript interfaces for metadata parameters
export interface BaseMetadataParams {
  locale: string;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export interface ArticleMetadataParams extends BaseMetadataParams {
  slug: string;
  article: {
    title: string;
    excerpt: string;
    coverImage?: string;
    tags: string[];
    author: {
      name: string;
    };
    category: {
      name: string;
    };
    publishedAt: string;
  };
}

export interface SearchMetadataParams extends BaseMetadataParams {
  query?: string;
}

export interface HomeMetadataParams extends BaseMetadataParams {
  category?: string;
  page?: number;
}

// Utility function to generate canonical URLs
export function generateCanonicalUrl(locale: string, path: string = '', params?: Record<string, string>): string {
  let url = `${SITE_CONFIG.baseUrl}/${locale}`;
  
  if (path) {
    url += `/${path}`;
  }
  
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }
  
  return url;
}

// Utility function to generate alternate language URLs
export function generateAlternateUrls(path: string = '', params?: Record<string, string>): Record<string, string> {
  const locales = ['en', 'ar'];
  const alternates: Record<string, string> = {};
  
  locales.forEach(locale => {
    alternates[locale] = generateCanonicalUrl(locale, path, params);
  });
  
  return alternates;
}

// Utility function to generate OpenGraph images
export function generateOpenGraphImages(imageUrl?: string, title?: string) {
  const finalImageUrl = imageUrl || SITE_CONFIG.defaultImage;
  
  return [
    {
      url: finalImageUrl,
      width: 1200,
      height: 630,
      alt: title || 'Demo News Portal',
      type: 'image/jpeg',
    },
    {
      url: finalImageUrl,
      width: 800,
      height: 600,
      alt: title || 'Demo News Portal',
      type: 'image/jpeg',
    },
  ];
}

// Base metadata generator
export async function generateBaseMetadata(params: BaseMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  
  const title = params.title || t('defaultTitle');
  const description = params.description || t('defaultDescription');
  const canonicalUrl = generateCanonicalUrl(params.locale);
  
  return {
    title,
    description,
    keywords: params.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateUrls(),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: t('siteName'),
      images: generateOpenGraphImages(params.image, title),
      type: 'website',
      locale: params.locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: params.locale === 'ar' ? ['en_US'] : ['ar_SA'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [params.image || SITE_CONFIG.defaultImage],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: params.noIndex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Home page metadata generator
export async function generateHomeMetadata(params: HomeMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  
  let title = params.title || t('defaultTitle');
  let description = params.description || t('defaultDescription');
  
  // Handle category filtering
  if (params.category) {
    title = `${params.category.charAt(0).toUpperCase() + params.category.slice(1)} News | ${t('siteName')}`;
    description = `Latest ${params.category} news and articles from ${t('siteName')}`;
  }
  
  // Handle pagination
  if (params.page && params.page > 1) {
    title = `${title} - Page ${params.page}`;
  }
  
  const urlParams: Record<string, string> = {};
  if (params.category) urlParams.category = params.category;
  if (params.page && params.page > 1) urlParams.page = params.page.toString();
  
  const canonicalUrl = generateCanonicalUrl(params.locale, '', Object.keys(urlParams).length > 0 ? urlParams : undefined);
  
  return {
    title,
    description,
    keywords: params.keywords || ['news', 'breaking news', 'latest updates', params.category].filter((item): item is string => Boolean(item)),
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateUrls('', Object.keys(urlParams).length > 0 ? urlParams : undefined),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: t('siteName'),
      images: generateOpenGraphImages(params.image, title),
      type: 'website',
      locale: params.locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: params.locale === 'ar' ? ['en_US'] : ['ar_SA'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [params.image || SITE_CONFIG.defaultImage],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Article page metadata generator
export async function generateArticleMetadata(params: ArticleMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  
  const title = `${params.article.title} | ${t('siteName')}`;
  const description = params.article.excerpt;
  const canonicalUrl = generateCanonicalUrl(params.locale, `articles/${params.slug}`);
  const imageUrl = params.article.coverImage || SITE_CONFIG.defaultImage;
  
  return {
    title,
    description,
    keywords: params.article.tags,
    authors: [{ 
      name: params.article.author.name, 
      url: generateCanonicalUrl(params.locale, `authors/${params.article.author.name.toLowerCase().replace(/\s+/g, '-')}`)
    }],
    creator: params.article.author.name,
    publisher: t('siteName'),
    category: params.article.category.name,
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateUrls(`articles/${params.slug}`),
    },
    openGraph: {
      title: params.article.title,
      description,
      url: canonicalUrl,
      siteName: t('siteName'),
      images: generateOpenGraphImages(imageUrl, params.article.title),
      type: 'article',
      locale: params.locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: params.locale === 'ar' ? ['en_US'] : ['ar_SA'],
      publishedTime: params.article.publishedAt,
      authors: [params.article.author.name],
      section: params.article.category.name,
      tags: params.article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: params.article.title,
      description,
      images: [imageUrl],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Search page metadata generator
export async function generateSearchMetadata(params: SearchMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'search' });
  const metaT = await getTranslations({ locale: params.locale, namespace: 'meta' });
  
  const title = params.query ? t('resultsTitle', { query: params.query }) : t('title');
  const description = params.query 
    ? `Search results for "${params.query}" on ${metaT('siteName')}` 
    : t('description');
  
  const urlParams = params.query ? { q: params.query } : undefined;
  const canonicalUrl = generateCanonicalUrl(params.locale, 'search', urlParams);
  
  return {
    title: `${title} | ${metaT('siteName')}`,
    description,
    keywords: params.keywords || ['search', 'articles', 'news', params.query].filter((item): item is string => Boolean(item)),
    alternates: {
      canonical: canonicalUrl,
      languages: generateAlternateUrls('search', urlParams),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: metaT('siteName'),
      images: generateOpenGraphImages(params.image, title),
      type: 'website',
      locale: params.locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: params.locale === 'ar' ? ['en_US'] : ['ar_SA'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [params.image || SITE_CONFIG.defaultImage],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: params.query ? {
      index: false, // Don't index search result pages
      follow: true,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Layout metadata generator (for locale-specific layouts)
export async function generateLayoutMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      default: t('defaultTitle'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('defaultDescription'),
    alternates: {
      canonical: generateCanonicalUrl(locale),
      languages: generateAlternateUrls(),
    },
    openGraph: {
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_SA'],
    },
  };
}