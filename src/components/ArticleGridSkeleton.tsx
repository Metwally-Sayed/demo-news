import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface ArticleGridSkeletonProps {
  count?: number;
}

export function ArticleGridSkeleton({ count = 9 }: ArticleGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <div className="h-48 bg-muted animate-pulse" />
          <CardHeader className="space-y-2">
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="h-3 bg-muted animate-pulse rounded" />
            <div className="h-3 bg-muted animate-pulse rounded" />
            <div className="h-3 bg-muted animate-pulse rounded w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}