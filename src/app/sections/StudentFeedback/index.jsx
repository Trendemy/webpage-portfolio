import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import Feedbacks from '~/components/Feedbacks';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';
import { Swoosh, ZigzagArrow } from '~/components/Icons';

const StudentFeedback = ({
    title = '',
    subtitle = '',
    images = [],
    feedbacks = [],
    animation
}) => {
    return (
        <Section className='overflow-hidden'>
            <Element className='container' name={sections.feedback.id}>
                <div
                    className='flex flex-col-reverse xl:flex-row justify-center items-center gap-20'
                    data-aos={animation}
                >
                    {Array.isArray(images) && images.length > 0 && (
                        <div className='flex-1 relative flex gap-5'>
                            <div className='flex absolute w-4/5 bottom-0 left-1/2 -translate-x-1/2'>
                                <Swoosh className='shrink-0' />
                            </div>
                            {images?.[0] && (
                                <div className='flex-1 flex'>
                                    <Image
                                        src={images[0]}
                                        alt='imagefeedback 1'
                                        className='aspect-[1/1.5] xl:aspect-[1/2] rounded-e-[10rem] object-cover'
                                    />
                                </div>
                            )}
                            {images?.[1] && (
                                <div className='flex-1 flex'>
                                    <Image
                                        src={images[1]}
                                        alt='imagefeedback 2'
                                        className='aspect-[1/1.5] xl:aspect-[1/2] rounded-s-[10rem] object-cover'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                    {Array.isArray(feedbacks) && feedbacks.length > 0 && (
                        <div className='relative w-full xl:w-1/2 flex flex-col gap-5'>
                            <div className='text-center xl:text-left'>
                                {title && (
                                    <h2 className='heading-2 text-primary uppercase'>
                                        {title}
                                    </h2>
                                )}
                                {subtitle && (
                                    <p className='subtitle text-dark'>
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                            <div className='flex absolute'>
                                <ZigzagArrow />
                            </div>
                            <div className='w-full mx-auto'>
                                <Feedbacks data={feedbacks} />
                            </div>
                        </div>
                    )}
                </div>
            </Element>
        </Section>
    );
};

StudentFeedback.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.array,
    animation: PropTypes.string,
    feedbacks: PropTypes.array
};
export default StudentFeedback;
