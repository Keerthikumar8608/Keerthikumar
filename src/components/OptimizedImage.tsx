import { useState, useEffect, useRef } from 'react';
import { getProtectedImageUrl, protectedImageStyles, generateWatermark } from '../services/imageProtection';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

const OptimizedImage = ({ src, alt, className = '', onLoad }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevent right-click context menu
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Prevent keyboard shortcuts for saving images
  const handleKeyDown = (e: KeyboardEvent) => {
    // Prevent Ctrl/Cmd + S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      return false;
    }
  };

  useEffect(() => {
    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyDown);
    
    // Reset states when src changes
    setIsLoaded(false);
    setError(false);

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            // Start loading the image with protection
            const img = new Image();
            img.src = getProtectedImageUrl(src);
            img.onload = () => {
              setIsLoaded(true);
              onLoad?.();
              if (imgRef.current) {
                imgRef.current.src = getProtectedImageUrl(src);
                
                // Add watermark after image loads
                if (containerRef.current) {
                  const watermark = document.createElement('div');
                  watermark.className = 'absolute inset-0 pointer-events-none select-none';
                  watermark.style.background = `repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 20px, transparent 20px, transparent 40px)`;
                  containerRef.current.appendChild(watermark);
                }
              }
            };
            img.onerror = () => setError(true);
            
            // Disconnect observer after triggering load
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    // Start observing
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [src, onLoad]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      onContextMenu={handleContextMenu}
      style={{ position: 'relative' }}
    >
      {/* Loading placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent to-futuristic-navy/20 transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Protected Image */}
      <img
        ref={imgRef}
        alt={alt}
        className={`${className} transition-all duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          ...protectedImageStyles,
          transform: isLoaded ? 'none' : 'scale(1.05)',
        }}
        draggable="false"
      />

      {/* Invisible text watermark */}
      {isLoaded && (
        <div 
          className="absolute inset-0 select-none pointer-events-none opacity-0"
          aria-hidden="true"
        >
          {generateWatermark()}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-futuristic-navy/30">
          <span className="text-futuristic-platinum/60">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 