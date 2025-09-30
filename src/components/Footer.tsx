'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {t('logo')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t('quickLinks')}
            </h4>
            <div className="space-y-2">
              <Link
                href={`/${locale}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}?category=technology`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('technology')}
              </Link>
              <Link
                href={`/${locale}?category=business`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('business')}
              </Link>
              <Link
                href={`/${locale}?category=sports`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('sports')}
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t('categories')}
            </h4>
            <div className="space-y-2">
              <Link
                href={`/${locale}?category=health`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('health')}
              </Link>
              <Link
                href={`/${locale}?category=science`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('science')}
              </Link>
              <Link
                href={`/${locale}?category=entertainment`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('entertainment')}
              </Link>
              <Link
                href={`/${locale}?category=politics`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t('politics')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">
              {t('contact')}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('email')}: info@newsportal.com</p>
              <p>{t('phone')}: +1 (555) 123-4567</p>
              <p>{t('address')}: 123 News Street, City, Country</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {t('logo')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}