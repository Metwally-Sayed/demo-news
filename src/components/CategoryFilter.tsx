'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data/categories';

interface CategoryFilterProps {
  selectedCategory?: string;
}

export function CategoryFilter({ selectedCategory }: CategoryFilterProps) {
  const locale = useLocale();
  const t = useTranslations('categories');

  return (
    <div className="flex flex-wrap gap-2">
      <Link href={`/${locale}`}>
        <Badge
          variant={!selectedCategory ? 'default' : 'secondary'}
          className="cursor-pointer hover:bg-primary/80 transition-colors"
        >
          {t('all')}
        </Badge>
      </Link>
      
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${locale}?category=${category.slug}`}
        >
          <Badge
            variant={selectedCategory === category.slug ? 'default' : 'secondary'}
            className="cursor-pointer hover:bg-primary/80 transition-colors"
            style={{
              backgroundColor: selectedCategory === category.slug ? category.color : undefined,
            }}
          >
            {t(category.slug)}
          </Badge>
        </Link>
      ))}
    </div>
  );
}