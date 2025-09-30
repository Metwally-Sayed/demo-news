import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/data/articles';
import { categories } from '@/lib/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://demo-news.vercel.app';
  const locales = ['en', 'ar'];
  
  // Static pages for both locales
  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ]);

  // Category pages for both locales
  const categoryPages = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${baseUrl}/${locale}?category=${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }))
  );

  // Article pages for both locales
  const articles = getAllArticles();
  const articlePages = locales.flatMap((locale) =>
    articles.map((article) => ({
      url: `${baseUrl}/${locale}/articles/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...categoryPages, ...articlePages];
}