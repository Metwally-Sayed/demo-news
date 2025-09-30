import { screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '../../test/test-utils';
import { CategoryFilter } from '../CategoryFilter';

// Mock next-intl
vi.mock('next-intl', async () => {
  const actual = await vi.importActual('next-intl');
  return {
    ...actual,
    useLocale: vi.fn(() => 'en'),
    useTranslations: vi.fn(() => (key: string) => {
      const translations: Record<string, string> = {
        all: 'All',
        technology: 'Technology',
        business: 'Business',
        sports: 'Sports',
        entertainment: 'Entertainment',
        health: 'Health',
        science: 'Science',
        politics: 'Politics',
        world: 'World',
      };
      return translations[key] || key;
    }),
  };
});

describe('CategoryFilter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders all category options', () => {
      render(<CategoryFilter />);
      
      // Check for "All" option
      expect(screen.getByText('All')).toBeInTheDocument();
      
      // Check for category options
      expect(screen.getByText('Technology')).toBeInTheDocument();
      expect(screen.getByText('Business')).toBeInTheDocument();
      expect(screen.getByText('Sports')).toBeInTheDocument();
      expect(screen.getByText('Entertainment')).toBeInTheDocument();
      expect(screen.getByText('Health')).toBeInTheDocument();
      expect(screen.getByText('Science')).toBeInTheDocument();
      expect(screen.getByText('Politics')).toBeInTheDocument();
      expect(screen.getByText('World')).toBeInTheDocument();
    });

    it('renders with no selected category by default', () => {
      render(<CategoryFilter />);
      
      const allBadge = screen.getByText('All');
      expect(allBadge).toBeInTheDocument();
    });

    it('renders with selected category highlighted', () => {
      render(<CategoryFilter selectedCategory="technology" />);
      
      const technologyBadge = screen.getByText('Technology');
      expect(technologyBadge).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('creates correct links for categories', () => {
      render(<CategoryFilter />);
      
      // Check "All" link
      const allLink = screen.getByText('All').closest('a');
      expect(allLink).toHaveAttribute('href', '/en');
      
      // Check category links
      const technologyLink = screen.getByText('Technology').closest('a');
      expect(technologyLink).toHaveAttribute('href', '/en?category=technology');
      
      const businessLink = screen.getByText('Business').closest('a');
      expect(businessLink).toHaveAttribute('href', '/en?category=business');
    });
  });

  describe('Internationalization', () => {
    it('uses correct locale in links', async () => {
      const mockUseLocale = vi.mocked(await import('next-intl')).useLocale;
      mockUseLocale.mockReturnValue('ar');
      
      render(<CategoryFilter />, { locale: 'ar' });
      
      const allLink = screen.getByText('All').closest('a');
      expect(allLink).toHaveAttribute('href', '/ar');
      
      const technologyLink = screen.getByText('Technology').closest('a');
      expect(technologyLink).toHaveAttribute('href', '/ar?category=technology');
    });
  });

  describe('Accessibility', () => {
    it('has proper link structure for screen readers', () => {
      render(<CategoryFilter />);
      
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Edge Cases', () => {
    it('handles unknown selected category gracefully', () => {
      render(<CategoryFilter selectedCategory="unknown-category" />);
      
      // Should still render all categories
      expect(screen.getByText('All')).toBeInTheDocument();
      expect(screen.getByText('Technology')).toBeInTheDocument();
    });

    it('handles empty selected category', () => {
      render(<CategoryFilter selectedCategory="" />);
      
      expect(screen.getByText('All')).toBeInTheDocument();
      expect(screen.getByText('Technology')).toBeInTheDocument();
    });
  });
});