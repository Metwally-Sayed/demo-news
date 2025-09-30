'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Search, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations('navigation');
  const locale = useLocale();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/${locale}/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const switchLocale = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-2xl font-bold text-primary">
            {t('logo')}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}?category=technology`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('technology')}
            </Link>
            <Link
              href={`/${locale}?category=business`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('business')}
            </Link>
            <Link
              href={`/${locale}?category=sports`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('sports')}
            </Link>
          </nav>

          {/* Search and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <Input
                type="search"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
              <Button type="submit" size="sm" className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </form>

            <DropdownMenu>
              <DropdownMenuTrigger asChild suppressHydrationWarning>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {locale === 'ar' ? 'العربية' : 'English'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => switchLocale('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLocale('ar')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href={`/${locale}`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}?category=technology`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('technology')}
              </Link>
              <Link
                href={`/${locale}?category=business`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('business')}
              </Link>
              <Link
                href={`/${locale}?category=sports`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('sports')}
              </Link>
              
              <form onSubmit={handleSearch} className="flex items-center pt-4">
                <Input
                  type="search"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm" className="ml-2">
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              <div className="pt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild suppressHydrationWarning>
                    <Button variant="outline" size="sm" className="w-full">
                      <Globe className="h-4 w-4 mr-2" />
                      {locale === 'ar' ? 'العربية' : 'English'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => switchLocale('en')}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => switchLocale('ar')}>
                      العربية
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}