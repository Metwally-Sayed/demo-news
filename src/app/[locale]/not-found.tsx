import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t('description')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              {t('backHome')}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search">
              {t('searchArticles')}
            </Link>
          </Button>
        </div>
        
        <div className="mt-8">
          <svg
            className="mx-auto h-32 w-32 text-gray-300 dark:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}