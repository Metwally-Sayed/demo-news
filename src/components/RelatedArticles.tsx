import { Article } from '@/types/article';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedArticlesProps {
  articles: Article[];
  locale: string;
}

export default async function RelatedArticles({
  articles,
  locale,
}: RelatedArticlesProps) {
  const t = await getTranslations('article');

  if (articles.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {t('relatedArticles')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          // Use Arabic content when locale is Arabic
          const title = locale === 'ar' ? article.titleAr : article.title;
          const excerpt = locale === 'ar' ? article.excerptAr : article.excerpt;
          const authorName = locale === 'ar' ? article.author.nameAr : article.author.name;
          
          return (
            <Link
              key={article.id}
              href={`/${locale}/articles/${article.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                  {excerpt}
                </p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    {new Date(article.publishedAt).toLocaleDateString(locale)}
                  </span>
                  <span className="flex items-center gap-1">
                    <UserIcon className="h-3 w-3" />
                    {authorName}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}