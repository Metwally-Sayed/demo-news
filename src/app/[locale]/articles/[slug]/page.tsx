import { getArticleBySlug, getRelatedArticles } from '@/lib/data/articles';
import { Article } from '@/types/article';
import RelatedArticles from '@/components/RelatedArticles';
import { CalendarIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateArticleMetadata } from '@/lib/metadata';

interface ArticlePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return generateArticleMetadata({
    locale,
    slug,
    article,
  });
}



export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations('article');
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  
  // Use Arabic content when locale is Arabic
  const title = locale === 'ar' ? article.titleAr : article.title;
  const excerpt = locale === 'ar' ? article.excerptAr : article.excerpt;
  const content = locale === 'ar' ? article.contentAr : article.content;
  const authorName = locale === 'ar' ? article.author.nameAr : article.author.name;
  const authorBio = locale === 'ar' ? article.author.bioAr : article.author.bio;
  const categoryName = locale === 'ar' ? article.category.nameAr : article.category.name;
  const tags = locale === 'ar' ? article.tagsAr : article.tags;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Link
              href={`/${locale}/categories/${article.category.slug}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: article.category.color + '20',
                color: article.category.color,
              }}
            >
              <TagIcon className="h-4 w-4 mr-1" />
              {categoryName}
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            {title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Image
                src={article.author.avatar || '/images/default-avatar.svg'}
                alt={authorName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {authorName}
                </p>
                <p className="text-xs">{authorBio}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString(
                  locale,
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                )}
              </time>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
          <Image
            src={
              article.coverImage ||
              'https://source.unsplash.com/1200x630/?news,article'
            }
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('tags')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RelatedArticles articles={relatedArticles} locale={locale} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { getAllArticleSlugs } = await import('@/lib/data/articles');
  const slugs = getAllArticleSlugs();
  
  // Generate params for both locales
  const params = [];
  const locales = ['en', 'ar'];
  
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({
        locale,
        slug,
      });
    }
  }
  
  return params;
}

// Enable ISR with 60 second revalidation
export const revalidate = 60;
