import React, { useState, useRef, useEffect } from 'react';

const LazyImage = React.forwardRef(({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMxOC4yIDE2IDE2LjggMTcuMiAxNi44IDE5QzE2LjggMjAuOCAxOC4yIDIyIDIwIDIyQzIxLjggMjIgMjMuMiAyMC44IDIzLjIgMTlDMjMuMiAxNy4yIDIxLjggMTYgMjAgMTZaIiBmaWxsPSIjRDRENEQ0Ii8+CjxwYXRoIGQ9Ik0yMCAyNkMyMi4yIDI2IDI0IDI0LjIgMjQgMjJDMjQgMTkuOCAyMi4yIDE4IDIwIDE4QzE3LjggMTggMTYgMTkuOCAxNiAyMkMxNiAyNC4yIDE3LjggMjYgMjAgMjZaIiBmaWxsPSIjRDRENEQ0Ii8+Cjwvc3ZnPg==',
  onLoad,
  onError 
}, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className="lazy-image-container">
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          <div className="skeleton-image"></div>
        </div>
      )}
      
      {isInView && (
        <img
          ref={ref}
          src={hasError ? placeholder : src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
