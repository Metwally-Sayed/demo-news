import { SITE_CONFIG } from '@/lib/metadata';

export async function GET() {
  const baseUrl = SITE_CONFIG.baseUrl;
  
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow specific API endpoints that should be crawled
Allow: /api/sitemap
Allow: /api/rss

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional - be respectful to servers)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}