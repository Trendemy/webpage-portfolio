import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import { AdvancedImage } from '@cloudinary/react';
import cloudinary from '~/config/cloudinary';
import { Section } from '~/app/sections';
import { CLOUDINARY_NAME } from '~/config/env';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SliderSection = ({ title, subtitle, images, section }) => {
    const [displayImages, setDisplayImages] = useState([]);
    const [style, setStyle] = useState({});
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const settings = {
        infinite: displayImages.length > 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleResize = useCallback(
        () => setWindowWidth(window.innerWidth),
        []
    );

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        if (!images || images.length === 0) return;
        const isMobile = windowWidth < 768;
        const classifyImages = async () => {
            const landscape = [];
            const portrait = [];

            await Promise.all(
                images.map(
                    (src) =>
                        new Promise((resolve) => {
                            const img = new Image();
                            img.src = `https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/${src}`;
                            img.onload = () => {
                                if (img.width > img.height) {
                                    landscape.push(src);
                                } else {
                                    portrait.push(src);
                                }
                                resolve();
                            };
                        })
                )
            );
            setDisplayImages(isMobile ? portrait : landscape);
            setStyle({
                maxWidth: isMobile ? '100%' : '800px',
                maxHeight: isMobile ? '100%' : '450px',
                borderRadius: '16px',
                margin: '0 auto',
                overflow: 'hidden'
            });
        };

        classifyImages();
    }, [images, windowWidth]);

    return (
        <Section>
            <Element className='container' name={section}>
                {Array.isArray(images) && images.length > 0 && (
                    <div className='row'>
                        <div className='col-12 text-center mb-5'>
                            {title && (
                                <h2 className='heading-2 text-primary uppercase'>
                                    {title}
                                </h2>
                            )}
                            {subtitle && <p className='subtitle'>{subtitle}</p>}
                        </div>
                        <div className='col-12'>
                            {displayImages.length > 0 && (
                                <Slider {...settings}>
                                    {displayImages.map((src) => (
                                        <div key={src}>
                                            <div style={style}>
                                                <AdvancedImage
                                                    cldImg={cloudinary.image(
                                                        src
                                                    )}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            )}
                        </div>
                    </div>
                )}
            </Element>
        </Section>
    );
};

SliderSection.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.array,
    section: PropTypes.string
};
export default SliderSection;
