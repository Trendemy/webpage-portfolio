import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import { Image } from '~/components/UI';
import { ArrowLine, Signal } from '~/components/Icons';

const BaseSection = ({
    title = '',
    highlightTitle = '',
    description = '',
    images = [],
    animation
}) => {
    return (
        <Section className='relative overflow-hidden'>
            <div className='circle-glow' />
            <Element className='container' name={sections.base.id}>
                <div
                    className='flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-20 gap-10'
                    data-aos={animation}
                >
                    <div className='absolute 2xl:bottom-1/6 bottom-0 left-3/4 flex icon-size text-secondary'>
                        <Signal className='shrink-0' />
                    </div>
                    <div className='relative flex-1'>
                        <div className='w-3/5 flex aspect-[1/1.7] z-1'>
                            <Image
                                src={images[0]}
                                alt='image left'
                                className='object-cover rounded-t-full rounded-b-full'
                            />
                        </div>
                        <div className='absolute bottom-0 right-0 w-1/2 flex aspect-[1/1.7] translate-y-5'>
                            <Image
                                src={images[1]}
                                alt='image right'
                                className='object-cover rounded-t-full rounded-b-full border-l-2 border-white'
                            />
                            <div className='absolute w-1/2 xl:w-full top-3 left-1/2 text-secondary -translate-y-full -z-1'>
                                <ArrowLine className='shrink-0' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <HighlightTitle
                            as='h2'
                            className='heading-2 uppercase text-center xl:text-left mb-3'
                            title={title}
                            highlight={highlightTitle}
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

BaseSection.propTypes = {
    title: PropTypes.string.isRequired,
    highlightTitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};

export default BaseSection;
