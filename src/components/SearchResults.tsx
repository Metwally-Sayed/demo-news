'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { searchArticles } from '@/lib/data/articles';
import { Article } from '@/types/article';
import { formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

interface SearchResultsProps {
  query: string;
  locale: string;
}

export default function SearchResults({ query, locale }: SearchResultsProps) {
  const t = useTranslations('search');
  const [results, setResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        const searchResults = searchArticles(query);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.trim()) {
      performSearch();
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery.trim()) return text;
    
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const dateLocale = locale === 'ar' ? ar : enUS;
    return formatDistanceToNow(date, { addSuffix: true, locale: dateLocale });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse w-64"></div>
        <div className="grid gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!query.trim()) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('enterQuery')}
        </h2>
        <p className="text-gray-600">
          {t('enterQueryDescription')}
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {t('resultsFor')} &ldquo;{query}&rdquo;
        </h1>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t('noResults')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('noResultsDescription')}
          </p>
          <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">
              {t('searchTips')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• {t('tip1')}</li>
              <li>• {t('tip2')}</li>
              <li>• {t('tip3')}</li>
              <li>• {t('tip4')}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          {t('resultsFor')} &ldquo;{query}&rdquo;
        </h1>
        <p className="text-gray-600">
          {t('resultsCount', { count: results.length })}
        </p>
      </div>

      <div className="grid gap-6">
        {results.map((article) => (
          <article key={article.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <Link 
              href={`/${locale}/articles/${article.slug}`}
              className="block space-y-3"
            >
              <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {highlightText(article.title, query)}
              </h2>
              
              <p className="text-gray-600 line-clamp-2">
                {highlightText(article.excerpt, query)}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {article.category.name}
                </span>
                <span>{t('by')} {article.author.name}</span>
                <span>{formatDate(article.publishedAt)}</span>
                <span>{article.readingTime} {t('minRead')}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {results.length > 0 && (
        <div className="text-center py-6">
          <p className="text-gray-600">
            {t('endOfResults')}
          </p>
        </div>
      )}
    </div>
  );
}