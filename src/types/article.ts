export interface Article {
  id: string;
  title: string;
  titleAr: string;
  slug: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  coverImage: string;
  author: {
    name: string;
    nameAr: string;
    avatar?: string;
    bio?: string;
    bioAr?: string;
  };
  category: Category;
  tags: string[];
  tagsAr: string[];
  publishedAt: string;
  readingTime: number; 
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  color?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchResult {
  articles: Article[];
  total: number;
  query: string;
}

export type CategorySlug = 
  | 'technology' 
  | 'business' 
  | 'sports' 
  | 'entertainment' 
  | 'health' 
  | 'science' 
  | 'politics' 
  | 'world';