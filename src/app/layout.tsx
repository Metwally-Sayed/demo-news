import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://demo-news-virid.vercel.app'),
  title: {
    default: 'Demo News Portal - Latest Breaking News & Updates',
    template: '%s | Demo News Portal',
  },
  description: 'Your trusted source for the latest breaking news and updates from around the world. Stay informed with comprehensive coverage of technology, business, sports, politics, and global events.',
  keywords: ['news', 'breaking news', 'technology', 'business', 'sports', 'world news', 'latest updates', 'politics', 'global events', 'journalism'],
  authors: [{ name: 'Demo News Portal', url: 'https://demo-news-virid.vercel.app' }],
  creator: 'Demo News Portal',
  publisher: 'Demo News Portal',
  category: 'News',
  classification: 'News and Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: 'https://demo-news-virid.vercel.app',
    siteName: 'Demo News Portal',
    title: 'Demo News Portal - Latest Breaking News & Updates',
    description: 'Your trusted source for the latest breaking news and updates from around the world. Comprehensive coverage of global events.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Demo News Portal - Latest Breaking News & Updates',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@demonews',
    creator: '@demonews',
    title: 'Demo News Portal - Latest Breaking News & Updates',
    description: 'Your trusted source for the latest breaking news and updates from around the world.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://demo-news-virid.vercel.app',
    languages: {
      'en': 'https://demo-news-virid.vercel.app/en',
      'ar': 'https://demo-news-virid.vercel.app/ar',
    },
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Demo News',
    'application-name': 'Demo News Portal',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
}

// Root layout - html and body tags are handled by locale-specific layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
