'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        '/fonts/geist-sans.woff2',
        '/fonts/geist-mono.woff2',
      ];

      fontLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Lazy load images with intersection observer
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach((img) => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach((img) => {
          const imgElement = img as HTMLImageElement;
          imgElement.src = imgElement.dataset.src || '';
        });
      }
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        newScript.src = script.getAttribute('data-src') || '';
        newScript.defer = true;
        document.head.appendChild(newScript);
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // Critical resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com',
      ];

      domains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectDomains = ['fonts.gstatic.com'];
      preconnectDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = `https://${domain}`;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    lazyLoadImages();
    optimizeThirdPartyScripts();
    addResourceHints();
    
    // Register service worker only in production
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }

    // Cleanup function
    return () => {
      // Clean up any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
}

// Hook for performance monitoring
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log performance metrics (in production, send to analytics)
          if (process.env.NODE_ENV === 'development') {
            const value = 'value' in entry ? entry.value : entry.duration;
            console.log(`${entry.name}: ${value}`);
          }
        });
      });

      // Observe different performance metrics
      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.warn('Performance Observer not fully supported');
      }

      return () => observer.disconnect();
    }
  }, []);
}