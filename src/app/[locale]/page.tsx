import { ArticleGrid } from '@/components/ArticleGrid';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Skeleton } from '@/components/ui/skeleton';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { generateHomeMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { category, page } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;

  return generateHomeMetadata({
    locale,
    category,
    page: pageNumber > 1 ? pageNumber : undefined,
  });
}

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { locale } = await params;
  const { category, page } = await searchParams;
  const t = await getTranslations('home');

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
        </div>

        <div className="mb-8">
          <Suspense fallback={<CategoryFilterSkeleton />}>
            <CategoryFilter selectedCategory={category} />
          </Suspense>
        </div>

        <Suspense fallback={<ArticleGridSkeleton />}>
          <ArticleGrid
            category={category}
            page={page ? parseInt(page) : 1}
            locale={locale}
          />
        </Suspense>
      </main>
    </div>
  );
}

function CategoryFilterSkeleton() {
  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-24" />
      ))}
    </div>
  );
}

function ArticleGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
