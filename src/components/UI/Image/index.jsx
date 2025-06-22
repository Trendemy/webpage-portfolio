import PropTypes from 'prop-types';
import { AdvancedImage } from '@cloudinary/react';
import cloudinary from '~/config/cloudinary';
import { useCallback, useState } from 'react';
import { logger } from '~/utils';
import NotFound from '~/assets/images/404.webp';

const getImageType = (src) => {
    if (!src) return 'invalid';
    if (src.startsWith('http://') || src.startsWith('https://')) {
        return 'url';
    }
    if (
        src.startsWith('/') ||
        src.startsWith('./') ||
        src.startsWith('~/assets/') ||
        src.startsWith('src/assets/')
    ) {
        return 'asset';
    }
    return 'cloudinary';
};

const Image = ({
    id,
    src,
    alt = 'Image preview',
    className,
    style,
    width,
    height,
    fallbackSrc = NotFound,
    onError,
    ...props
}) => {
    const [hasError, setHasError] = useState(false);
    const imageType = getImageType(src);
    const isCloudinary = imageType === 'cloudinary';

    const handleError = useCallback(
        (e) => {
            if (!hasError) {
                setHasError(true);
                logger('Image render error:', src);
                if (onError) {
                    onError(e);
                }
            }
        },
        [src, hasError, onError]
    );

    if (hasError || imageType === 'invalid') {
        return (
            <img
                id={id}
                src={fallbackSrc}
                alt={alt}
                className={className}
                style={style}
                width={width}
                height={height}
                {...props}
            />
        );
    }

    if (isCloudinary) {
        return (
            <AdvancedImage
                id={id}
                cldImg={cloudinary.image(src)}
                className={className}
                alt={alt}
                style={style}
                onError={handleError}
                {...props}
            />
        );
    }

    return (
        <img
            id={id}
            src={src}
            alt={alt}
            className={className}
            style={style}
            width={width}
            height={height}
            onError={handleError}
            {...props}
        />
    );
};

Image.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fallbackSrc: PropTypes.string,
    onError: PropTypes.func
};

export default Image;
