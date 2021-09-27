import styles from './image.module.scss';
import { useEffect, useRef } from 'react';

const Image = ({
  src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy = true,
  onClick,
  style,
}) => {
  const imgEl = useRef(null);

  useEffect(() => {
    if (isLazy && imgEl) {
      if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImageObserver.observe(imgEl.current);
      }
    }
  }, [imgEl, isLazy]);

  return (
    <img
      ref={imgEl}
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      className={styles.image}
      srcSet={isLazy ? '' : srcSet}
      data-srcset={srcSet || ''}
      data-src={src}
      style={style}
      onClick={onClick}
    />
  );
};

export default Image;
