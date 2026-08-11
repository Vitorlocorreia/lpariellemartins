import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyImage — carrega com efeito blur-up:
 * começa desfocada e vai clareando quando entra na viewport.
 */
export default function LazyImage({ src, alt, className, style, onError }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Se já carregou (cache)
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(img);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={className}
      style={{
        ...style,
        filter: loaded ? 'none' : 'blur(12px)',
        transition: 'filter 0.6s ease-out',
        willChange: 'filter',
      }}
      onLoad={() => setLoaded(true)}
      onError={onError}
    />
  );
}


