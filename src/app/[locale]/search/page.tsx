import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import SearchResults from '@/components/SearchResults';
import { generateSearchMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || '';
  
  return generateSearchMetadata({
    locale: resolvedParams.locale,
    query: query || undefined,
  });
}

export default async function SearchPage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults query={query} locale={resolvedParams.locale} />
      </Suspense>
    </div>
  );
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-8 bg-gray-200 rounded animate-pulse w-64"></div>
      <div className="grid gap-6 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="flex space-x-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}