import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';
import { ZigzagArrow } from '~/components/Icons';
import BrushStroke from './components/BrushStroke';

const CourseIntroduction = ({
    title = '',
    highlightTitle = '',
    description = '',
    images = [],
    animation
}) => {
    return (
        <Section className='relative py-20'>
            <div className='circle-glow' />
            <Element className='container' name={sections.introduction.id}>
                <div
                    className='flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-0 gap-20'
                    data-aos={animation}
                >
                    {Array.isArray(images) && images.length > 0 && (
                        <div className='flex-1 relative flex'>
                            {images?.[0] && (
                                <div className='flex-1 xl:translate-x-0 translate-x-5 -translate-y-10'>
                                    <Image
                                        src={images[0]}
                                        className='w-full aspect-[2/3] rounded-3xl object-cover'
                                    />
                                </div>
                            )}
                            {images?.[1] && (
                                <div className='flex-1 xl:-translate-x-20 -translate-x-5 translate-y-10'>
                                    <Image
                                        src={images[1]}
                                        className='w-full aspect-[2/3] rounded-3xl object-cover'
                                    />
                                </div>
                            )}
                            <div className='absolute flex w-3/5 bottom-0 text-secondary translate-y-10'>
                                <BrushStroke className='shrink-0' />
                            </div>
                        </div>
                    )}
                    <div className='flex-1 relative'>
                        <span className='absolute flex'>
                            <ZigzagArrow className='shrink-0' />
                        </span>
                        <HighlightTitle
                            as='h3'
                            title={title}
                            highlight={highlightTitle}
                            className='heading-2 uppercase text-center xl:text-left'
                        >
                            <HighlightTitle.Underline />
                        </HighlightTitle>
                        <p className='text-paragraph'>{description}</p>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

CourseIntroduction.propTypes = {
    title: PropTypes.string.isRequired,
    highlightTitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default CourseIntroduction;
