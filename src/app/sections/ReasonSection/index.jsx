import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';
import { CheckCircle } from '~/components/Icons';

const ReasonSection = ({
    title = '',
    reasons = [],
    images = [],
    animation
}) => {
    return (
        <Section>
            <Element name={sections.reason.id} className='container'>
                <div
                    className='flex flex-col xl:flex-row justify-center items-center gap-20'
                    data-aos={animation}
                >
                    <div className='flex-1 flex flex-col gap-5'>
                        <h2 className='heading-2 text-primary uppercase xl:text-left text-center'>
                            {title}
                        </h2>
                        <div className='border border-dashed border-gray-400' />
                        <div className='flex flex-col gap-5'>
                            {reasons.map((text, index) => {
                                const strings = text.split(':');
                                return (
                                    <div
                                        key={index}
                                        className='flex items-center'
                                    >
                                        <div className='flex mr-3'>
                                            <CheckCircle className='size-4 xl:size-5 shrink-0 text-primary' />
                                        </div>
                                        <p className='text-paragraph'>
                                            <strong>{strings[0]}:</strong>
                                            {strings[1] ? ` ${strings[1]}` : ''}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex-1 flex xl:gap-10 gap-5 xl:mb-0 mb-10'>
                        <div className='relative flex-1 translate-y-12'>
                            <Image
                                src={images[0]}
                                alt='reason-1'
                                className='w-full aspect-[3/4] rounded-xl object-cover'
                            />
                            <div className='absolute w-20 h-10 lg:w-30 lg:h-15 bottom-0 right-0 bg-secondary rounded-b-full -rotate-45  translate-1/2' />
                        </div>
                        <div className='flex-1 -translate-y-12'>
                            <Image
                                src={images[1]}
                                alt='reason-2'
                                className='w-full aspect-[3/4] rounded-xl object-cover'
                            />
                        </div>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

ReasonSection.propTypes = {
    title: PropTypes.string.isRequired,
    reasons: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};

export default ReasonSection;
