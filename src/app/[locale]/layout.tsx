import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';
import PageLayout from '@/components/PageLayout';
import { generateLayoutMetadata } from '@/lib/metadata';
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData';
import PerformanceOptimizations from '@/components/PerformanceOptimizations';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  return generateLayoutMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <OrganizationSchema locale={locale} />
        <WebsiteSchema locale={locale} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          locale === 'ar' ? 'font-arabic' : ''
        }`}
      >
        <PerformanceOptimizations />
        <NextIntlClientProvider messages={messages}>
          <PageLayout>{children}</PageLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
