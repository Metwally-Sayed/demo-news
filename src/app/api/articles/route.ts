import { NextRequest, NextResponse } from 'next/server';
import { mockArticles, getArticlesByCategory, searchArticles } from '@/lib/data/articles';
import { PaginatedResponse, Article } from '@/types/article';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const locale = searchParams.get('locale') || 'en';

  let articles: Article[] = mockArticles;

  // Filter by category if specified
  if (category && category !== 'all') {
    articles = getArticlesByCategory(category);
  }

  // Filter by search query if specified
  if (search) {
    const lowercaseQuery = search.toLowerCase();
    articles = articles.filter((article) => {
      if (locale === 'ar') {
        // Search in Arabic content
        return (
          (article.titleAr && article.titleAr.toLowerCase().includes(lowercaseQuery)) ||
          (article.excerptAr && article.excerptAr.toLowerCase().includes(lowercaseQuery)) ||
          (article.contentAr && article.contentAr.toLowerCase().includes(lowercaseQuery)) ||
          (article.tagsAr && article.tagsAr.some((tag) => tag.toLowerCase().includes(lowercaseQuery))) ||
          // Also search in English as fallback
          article.title.toLowerCase().includes(lowercaseQuery) ||
          article.excerpt.toLowerCase().includes(lowercaseQuery) ||
          article.content.toLowerCase().includes(lowercaseQuery) ||
          article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
        );
      } else {
        // Search in English content
        return (
          article.title.toLowerCase().includes(lowercaseQuery) ||
          article.excerpt.toLowerCase().includes(lowercaseQuery) ||
          article.content.toLowerCase().includes(lowercaseQuery) ||
          article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
        );
      }
    });
  }

  // Sort by published date (newest first)
  articles = articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Transform articles based on locale
  const localizedArticles = articles.map(article => {
    if (locale === 'ar') {
      return {
        ...article,
        title: article.titleAr || article.title,
        excerpt: article.excerptAr || article.excerpt,
        content: article.contentAr || article.content,
        tags: article.tagsAr || article.tags,
        author: {
          ...article.author,
          name: article.author.nameAr || article.author.name,
          bio: article.author.bioAr || article.author.bio,
        },
        category: {
          ...article.category,
          name: article.category.nameAr || article.category.name,
        },
      };
    }
    return article;
  });

  // Calculate pagination
  const total = localizedArticles.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedArticles = localizedArticles.slice(startIndex, endIndex);

  const response: PaginatedResponse<Article> = {
    data: paginatedArticles,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };

  return NextResponse.json(response);
}