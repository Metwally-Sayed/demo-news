import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { mockArticles } from '@/lib/data/articles';
import { categories } from '@/lib/data/categories';

// Mock messages for testing
const mockMessages = {
  en: {
    articles: {
      by: 'by',
      readMore: 'Read More',
      relatedArticles: 'Related Articles',
      noResults: 'No articles found',
      loading: 'Loading...',
    },
    categories: {
      all: 'All',
      technology: 'Technology',
      business: 'Business',
      sports: 'Sports',
      entertainment: 'Entertainment',
      health: 'Health',
      science: 'Science',
      politics: 'Politics',
      world: 'World',
    },
    search: {
      placeholder: 'Search articles...',
      results: 'Search Results',
      noResults: 'No results found',
      enterQuery: 'Enter a search query',
      enterQueryDescription: 'Type something to search for articles',
      resultsFor: 'Results for',
      foundResults: 'Found {count} results',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Try again',
    },
  },
  ar: {
    articles: {
      by: 'بواسطة',
      readMore: 'اقرأ المزيد',
      relatedArticles: 'مقالات ذات صلة',
      noResults: 'لم يتم العثور على مقالات',
      loading: 'جاري التحميل...',
    },
    categories: {
      all: 'الكل',
      technology: 'التكنولوجيا',
      business: 'الأعمال',
      sports: 'الرياضة',
      entertainment: 'الترفيه',
      health: 'الصحة',
      science: 'العلوم',
      politics: 'السياسة',
      world: 'العالم',
    },
    search: {
      placeholder: 'البحث في المقالات...',
      results: 'نتائج البحث',
      noResults: 'لم يتم العثور على نتائج',
      enterQuery: 'أدخل استعلام البحث',
      enterQueryDescription: 'اكتب شيئاً للبحث عن المقالات',
      resultsFor: 'نتائج لـ',
      foundResults: 'تم العثور على {count} نتيجة',
    },
    common: {
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      retry: 'حاول مرة أخرى',
    },
  },
};

// Mock Next.js Image component
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { alt: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

// Mock Next.js Link component
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock date-fns locales
vi.mock('date-fns/locale', () => ({
  ar: {},
  enUS: {},
}));

// Custom render function with internationalization
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: 'en' | 'ar';
  messages?: Record<string, Record<string, string | Record<string, string>>>;
}

function customRender(
  ui: ReactElement,
  {
    locale = 'en',
    messages = mockMessages[locale],
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Use actual article data for testing
export const mockArticle = mockArticles[0]; // First article from actual data

// Use actual categories for testing
export const mockCategories = categories;

// Use actual search results for testing
export const mockSearchResults = mockArticles.slice(0, 3); // First 3 articles

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override render method
export { customRender as render };