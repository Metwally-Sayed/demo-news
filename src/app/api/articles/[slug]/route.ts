import { NextRequest, NextResponse } from 'next/server';
import { getArticleBySlug, getRelatedArticles } from '@/lib/data/articles';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  const article = getArticleBySlug(slug);

  if (!article) {
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    );
  }

  const relatedArticles = getRelatedArticles(article, 3);

  return NextResponse.json({
    article,
    relatedArticles,
  });
}

export async function generateStaticParams() {
  // This will be used for static generation
  return [];
}