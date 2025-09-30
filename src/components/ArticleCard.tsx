import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
  locale: string;
}

export function ArticleCard({ article, locale }: ArticleCardProps) {
  const t = useTranslations('articles');

  const formatDate = (date: string) => {
    const dateLocale = locale === 'ar' ? ar : enUS;
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: dateLocale,
    });
  };

  const articleCategory = article.category;
  
  // Use Arabic content when locale is Arabic
  const title = locale === 'ar' ? article.titleAr : article.title;
  const excerpt = locale === 'ar' ? article.excerptAr : article.excerpt;
  const authorName = locale === 'ar' ? article.author.nameAr : article.author.name;
  const categoryName = locale === 'ar' ? articleCategory?.nameAr : articleCategory?.name;
  const tags = locale === 'ar' ? article.tagsAr : article.tags;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={article.coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {articleCategory && (
          <Badge
            className="absolute top-2 left-2"
            style={{ backgroundColor: articleCategory.color }}
          >
            {categoryName}
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <Link
          href={`/${locale}/articles/${article.slug}`}
          className="hover:text-primary transition-colors"
        >
          <h3 className="font-semibold text-lg line-clamp-2">
            {title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{t('by')} {authorName}</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}