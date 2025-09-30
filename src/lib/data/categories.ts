import { Category } from '@/types/article';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    nameAr: 'التكنولوجيا',
    slug: 'technology',
    color: '#3B82F6',
  },
  {
    id: '2',
    name: 'Business',
    nameAr: 'الأعمال',
    slug: 'business',
    color: '#10B981',
  },
  {
    id: '3',
    name: 'Sports',
    nameAr: 'الرياضة',
    slug: 'sports',
    color: '#F59E0B',
  },
  {
    id: '4',
    name: 'Entertainment',
    nameAr: 'الترفيه',
    slug: 'entertainment',
    color: '#EF4444',
  },
  {
    id: '5',
    name: 'Health',
    nameAr: 'الصحة',
    slug: 'health',
    color: '#8B5CF6',
  },
  {
    id: '6',
    name: 'Science',
    nameAr: 'العلوم',
    slug: 'science',
    color: '#06B6D4',
  },
  {
    id: '7',
    name: 'Politics',
    nameAr: 'السياسة',
    slug: 'politics',
    color: '#84CC16',
  },
  {
    id: '8',
    name: 'World',
    nameAr: 'العالم',
    slug: 'world',
    color: '#F97316',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};