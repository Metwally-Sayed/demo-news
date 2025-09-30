import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  locale: string;
  category?: string;
  baseUrl?: string;
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  locale, 
  category,
  baseUrl = `/${locale}`
}: PaginationProps) {
  const t = useTranslations('articles');

  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (page > 1) params.append('page', page.toString());
    
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };

  const getVisiblePages = () => {
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        asChild={currentPage > 1}
      >
        {currentPage > 1 ? (
          <Link href={buildUrl(currentPage - 1)}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            {t('previous')}
          </Link>
        ) : (
          <>
            <ChevronLeft className="h-4 w-4 mr-1" />
            {t('previous')}
          </>
        )}
      </Button>

      <div className="flex items-center space-x-1">
        {getVisiblePages().map((pageNum) => {
          const isActive = pageNum === currentPage;
          
          return (
            <Button
              key={pageNum}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              asChild={!isActive}
            >
              {isActive ? (
                <span>{pageNum}</span>
              ) : (
                <Link href={buildUrl(pageNum)}>
                  {pageNum}
                </Link>
              )}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        asChild={currentPage < totalPages}
      >
        {currentPage < totalPages ? (
          <Link href={buildUrl(currentPage + 1)}>
            {t('next')}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        ) : (
          <>
            {t('next')}
            <ChevronRight className="h-4 w-4 ml-1" />
          </>
        )}
      </Button>
    </div>
  );
}