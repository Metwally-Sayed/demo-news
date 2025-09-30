'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArticleCard } from '@/components/ArticleCard';
import { Pagination } from '@/components/Pagination';
import { ArticleGridSkeleton } from '@/components/ArticleGridSkeleton';
import { Article, PaginatedResponse } from '@/types/article';

interface ArticleGridProps {
  category?: string;
  page: number;
  locale: string;
}

export function ArticleGrid({ category, page, locale }: ArticleGridProps) {
  const [data, setData] = useState<PaginatedResponse<Article> | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('articles');

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        params.append('page', page.toString());
        params.append('limit', '9');
        params.append('locale', locale);

        const response = await fetch(`/api/articles?${params}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, page]);

  if (loading) {
    return <ArticleGridSkeleton />;
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">{t('noArticles')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            locale={locale}
          />
        ))}
      </div>

      {/* Pagination */}
      {data.pagination.totalPages > 1 && (
        <Pagination
          currentPage={data.pagination.page}
          totalPages={data.pagination.totalPages}
          locale={locale}
          category={category}
        />
      )}
    </div>
  );
}