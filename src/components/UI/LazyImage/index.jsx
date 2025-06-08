import NotFound from '@assets/images/404.webp';
import { AdvancedImage } from '@cloudinary/react';
import cloudinary from '@config/cloudinary';
import { logger } from '@utils';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

const LazyImage = ({
   id,
   src,
   alt = 'Image Preview',
   className,
   style,
   width,
   height,
   fallbackSrc = NotFound,
   onError,
   loading = 'lazy',
   ...props
}) => {
   const [imgSrc, setImgSrc] = useState(src);
   const [isCloudinary, setIsCloudinary] = useState(false);
   const [hasError, setHasError] = useState(false);

   useEffect(() => {
      setImgSrc(src);
      setHasError(false);
      let isUrl = false;
      try {
         new URL(src, window.location.origin);
         isUrl = src.startsWith('http://') || src.startsWith('https://');
      } catch (error) {
         logger('error image:', error);
      }

      const isAssetPath =
         src &&
         (src.startsWith('/') ||
            src.startsWith('./') ||
            src.startsWith('@assets/') ||
            src.startsWith('src/assets/'));
      setIsCloudinary(src && !isUrl && !isAssetPath);

      if (isUrl) {
         const img = new Image();
         img.onload = () => {
            setHasError(false);
         };
         img.onerror = () => {
            setHasError(true);
            setImgSrc(fallbackSrc);
         };
         img.src = src;
      }
   }, [src, fallbackSrc]);

   const handleError = useCallback(
      (e) => {
         setHasError(true);
         setImgSrc(fallbackSrc);
         logger('Image render error:', src);
         if (onError) {
            onError(e);
         }
      },
      [src, fallbackSrc, onError]
   );

   return isCloudinary && !hasError ? (
      <AdvancedImage
         id={id}
         cldImg={cloudinary.image(src)}
         className={className}
         loading={loading}
         alt={alt}
         {...props}
      />
   ) : (
      <img
         id={id}
         src={imgSrc}
         alt={alt}
         className={className}
         style={style}
         width={width}
         height={height}
         loading={loading}
         onError={handleError}
         {...props}
      />
   );
};

LazyImage.propTypes = {
   id: PropTypes.string,
   src: PropTypes.string.isRequired,
   alt: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   fallbackSrc: PropTypes.string,
   onError: PropTypes.func,
   loading: PropTypes.string
};

export default LazyImage;
