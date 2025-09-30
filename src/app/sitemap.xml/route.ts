import { getAllArticleSlugs } from '@/lib/data/articles';
import { SITE_CONFIG } from '@/lib/metadata';

export async function GET() {
  const baseUrl = SITE_CONFIG.baseUrl;
  const locales = ['en', 'ar'];
  const articleSlugs = getAllArticleSlugs();
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/articles',
    '/categories',
  ];

  const categories = [
    'technology',
    'business',
    'sports',
    'entertainment',
    'health',
    'science',
    'politics',
    'world',
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Add static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      const url = `${baseUrl}/${locale}${page}`;
      const alternateLocale = locale === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLocale}${page}`;
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${alternateUrl}" />
  </url>`;
    }
  }

  // Add category pages for each locale
  for (const locale of locales) {
    for (const category of categories) {
      const url = `${baseUrl}/${locale}/categories/${category}`;
      const alternateLocale = locale === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLocale}/categories/${category}`;
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${alternateUrl}" />
  </url>`;
    }
  }

  // Add article pages for each locale
  for (const locale of locales) {
    for (const slug of articleSlugs) {
      const url = `${baseUrl}/${locale}/articles/${slug}`;
      const alternateLocale = locale === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLocale}/articles/${slug}`;
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${alternateUrl}" />
  </url>`;
    }
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}