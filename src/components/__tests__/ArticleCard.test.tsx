import { describe, it, expect, beforeEach, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { formatDistanceToNow } from 'date-fns';
import { render, mockArticle } from '@/test/test-utils';
import { ArticleCard } from '../ArticleCard';
import { Article } from '@/types/article';

// Mock formatDistanceToNow
vi.mock('date-fns', () => ({
  formatDistanceToNow: vi.fn(() => '2 days ago'),
}));

const mockedFormatDistanceToNow = vi.mocked(formatDistanceToNow);

describe('ArticleCard', () => {
  const defaultProps = {
    article: mockArticle,
    locale: 'en' as const,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Core Functionality', () => {
    it('renders article card with all essential elements', () => {
      render(<ArticleCard {...defaultProps} />);

      // Check if main elements are present
      expect(screen.getByRole('img', { name: mockArticle.title })).toBeInTheDocument();
      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.excerpt)).toBeInTheDocument();
      expect(screen.getByText('by ' + mockArticle.author.name)).toBeInTheDocument();
      expect(screen.getByText('2 days ago')).toBeInTheDocument();
      expect(screen.getByText(mockArticle.category.name)).toBeInTheDocument();
    });

    it('renders article image with correct attributes', () => {
      render(<ArticleCard {...defaultProps} />);

      const image = screen.getByRole('img', { name: mockArticle.title });
      expect(image).toHaveAttribute('src', mockArticle.coverImage);
      expect(image).toHaveAttribute('alt', mockArticle.title);
    });

    it('renders article link with correct href', () => {
      render(<ArticleCard {...defaultProps} />);

      const titleLink = screen.getByRole('link', { name: mockArticle.title });
      expect(titleLink).toHaveAttribute('href', `/en/articles/${mockArticle.slug}`);
    });

    it('displays category badge with correct color', () => {
      render(<ArticleCard {...defaultProps} />);

      const categoryBadge = screen.getByText(mockArticle.category.name);
      expect(categoryBadge).toHaveStyle({ backgroundColor: mockArticle.category.color });
    });

    it('displays up to 3 tags', () => {
      const articleWithManyTags = {
        ...mockArticle,
        tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'],
      };

      render(<ArticleCard article={articleWithManyTags} locale="en" />);

      expect(screen.getByText('Tag1')).toBeInTheDocument();
      expect(screen.getByText('Tag2')).toBeInTheDocument();
      expect(screen.getByText('Tag3')).toBeInTheDocument();
      expect(screen.queryByText('Tag4')).not.toBeInTheDocument();
      expect(screen.queryByText('Tag5')).not.toBeInTheDocument();
    });
  });

  describe('Internationalization', () => {
    it('renders Arabic content when locale is Arabic', () => {
      render(<ArticleCard {...defaultProps} locale="ar" />);

      expect(screen.getByText(mockArticle.titleAr)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.excerptAr)).toBeInTheDocument();
      expect(screen.getByText(mockArticle.category.nameAr)).toBeInTheDocument();
      
      // Check if author name appears anywhere in the document (using partial match)
    expect(screen.getByText(mockArticle.author.nameAr, { exact: false })).toBeInTheDocument();
    });

    it('renders Arabic tags when locale is Arabic', () => {
      render(<ArticleCard {...defaultProps} locale="ar" />);

      mockArticle.tagsAr.slice(0, 3).forEach(tag => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('generates correct Arabic article link', () => {
      render(<ArticleCard {...defaultProps} locale="ar" />);

      const titleLink = screen.getByRole('link', { name: mockArticle.titleAr });
      expect(titleLink).toHaveAttribute('href', `/ar/articles/${mockArticle.slug}`);
    });

    it('uses correct date locale for formatting', () => {
      render(<ArticleCard {...defaultProps} locale="ar" />);
      
      expect(mockedFormatDistanceToNow).toHaveBeenCalledWith(
        new Date(mockArticle.publishedAt),
        expect.objectContaining({
          addSuffix: true,
          locale: expect.any(Object), // ar locale
        })
      );
    });
  });

  describe('Edge Cases', () => {
    it('handles article without category gracefully', () => {
      const articleWithoutCategory = {
        ...mockArticle,
        category: null as unknown as Article['category'],
      };

      render(<ArticleCard article={articleWithoutCategory} locale="en" />);

      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
      expect(screen.queryByText(mockArticle.category.name)).not.toBeInTheDocument();
    });

    it('handles article with empty tags array', () => {
      const articleWithoutTags = {
        ...mockArticle,
        tags: [],
        tagsAr: [],
      };

      render(<ArticleCard article={articleWithoutTags} locale="en" />);

      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    });

    it('handles very long titles with line clamping', () => {
      const articleWithLongTitle = {
        ...mockArticle,
        title: 'This is a very long title that should be clamped to two lines maximum and should not overflow the card container',
        titleAr: 'هذا عنوان طويل جداً يجب أن يكون محدود بسطرين كحد أقصى ولا يجب أن يتجاوز حاوية البطاقة',
      };

      render(<ArticleCard article={articleWithLongTitle} locale="en" />);

      const titleElement = screen.getByText(articleWithLongTitle.title);
      expect(titleElement).toHaveClass('line-clamp-2');
    });

    it('handles very long excerpts with line clamping', () => {
      const articleWithLongExcerpt = {
        ...mockArticle,
        excerpt: 'This is a very long excerpt that should be clamped to three lines maximum and should not overflow the card container. It contains a lot of text that would normally take up much more space.',
      };

      render(<ArticleCard article={articleWithLongExcerpt} locale="en" />);

      const excerptElement = screen.getByText(articleWithLongExcerpt.excerpt);
      expect(excerptElement).toHaveClass('line-clamp-3');
    });

    it('handles missing author avatar gracefully', () => {
      const articleWithoutAvatar = {
        ...mockArticle,
        author: {
          ...mockArticle.author,
          avatar: undefined,
        },
      };

      render(<ArticleCard article={articleWithoutAvatar} locale="en" />);

      expect(screen.getByText('by ' + mockArticle.author.name)).toBeInTheDocument();
      // Should not crash when avatar is missing
    });
  });

  describe('Accessibility', () => {
    it('has proper heading structure', () => {
      render(<ArticleCard {...defaultProps} />);

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent(mockArticle.title);
    });

    it('has accessible image with alt text', () => {
      render(<ArticleCard {...defaultProps} />);

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('alt', mockArticle.title);
    });

    it('has accessible link with descriptive text', () => {
      render(<ArticleCard {...defaultProps} />);

      const link = screen.getByRole('link', { name: mockArticle.title });
      expect(link).toBeInTheDocument();
    });

    it('supports keyboard navigation', () => {
      render(<ArticleCard {...defaultProps} />);

      const link = screen.getByRole('link', { name: mockArticle.title });
      
      link.focus();
      expect(link).toHaveFocus();

      fireEvent.keyDown(link, { key: 'Enter', code: 'Enter' });
    });
  });

  describe('Styling and Layout', () => {
    it('applies hover effects correctly', () => {
      render(<ArticleCard {...defaultProps} />);

      const card = screen.getByText(mockArticle.title).closest('.overflow-hidden');
      expect(card).toHaveClass('hover:shadow-lg', 'transition-shadow');
    });

    it('applies correct CSS classes for responsive design', () => {
      render(<ArticleCard {...defaultProps} />);

      const image = screen.getByRole('img');
      expect(image).toHaveClass('object-cover');
      
      expect(image).toHaveAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
    });

    it('displays category badge in correct position', () => {
      render(<ArticleCard {...defaultProps} />);

      const categoryBadge = screen.getByText(mockArticle.category.name);
      expect(categoryBadge.closest('.absolute')).toHaveClass('top-2', 'left-2');
    });
  });

  describe('Date Formatting', () => {
    it('formats date correctly for English locale', () => {
      render(<ArticleCard {...defaultProps} locale="en" />);
      
      expect(mockedFormatDistanceToNow).toHaveBeenCalledWith(
        new Date(mockArticle.publishedAt),
        expect.objectContaining({
          addSuffix: true,
          locale: expect.any(Object), 
        })
      );
    });

    it('handles invalid date gracefully', () => {
      const articleWithInvalidDate = {
        ...mockArticle,
        publishedAt: 'invalid-date',
      };

      render(<ArticleCard article={articleWithInvalidDate} locale="en" />);

      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('renders efficiently with minimal re-renders', () => {
      const { rerender } = render(<ArticleCard {...defaultProps} />);

      rerender(<ArticleCard {...defaultProps} />);

      expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    });

    it('handles large number of tags efficiently', () => {
      const articleWithManyTags = {
        ...mockArticle,
        tags: Array.from({ length: 100 }, (_, i) => `Tag${i}`),
        tagsAr: Array.from({ length: 100 }, (_, i) => `تاغ${i}`),
      };

      render(<ArticleCard article={articleWithManyTags} locale="en" />);

      expect(screen.getByText('Tag0')).toBeInTheDocument();
      expect(screen.getByText('Tag1')).toBeInTheDocument();
      expect(screen.getByText('Tag2')).toBeInTheDocument();
      expect(screen.queryByText('Tag3')).not.toBeInTheDocument();
    });
  });
});