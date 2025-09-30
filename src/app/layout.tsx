import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://demo-news.vercel.app'),
  title: {
    default: 'Demo News Portal - Latest News & Updates',
    template: '%s | Demo News Portal',
  },
  description: 'Your trusted source for the latest news and updates from around the world. Stay informed with breaking news, technology, business, sports, and more.',
  keywords: ['news', 'breaking news', 'technology', 'business', 'sports', 'world news', 'latest updates'],
  authors: [{ name: 'Demo News Portal' }],
  creator: 'Demo News Portal',
  publisher: 'Demo News Portal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: 'https://demo-news.vercel.app',
    siteName: 'Demo News Portal',
    title: 'Demo News Portal - Latest News & Updates',
    description: 'Your trusted source for the latest news and updates from around the world.',
    images: [
      {
        url: 'https://source.unsplash.com/1200x630/?news,media',
        width: 1200,
        height: 630,
        alt: 'Demo News Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo News Portal - Latest News & Updates',
    description: 'Your trusted source for the latest news and updates from around the world.',
    images: ['https://source.unsplash.com/1200x630/?news,media'],
    creator: '@demonews',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
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
