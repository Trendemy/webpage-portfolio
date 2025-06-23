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
                                            <CheckCircle className='size-4 shrink-0 text-primary' />
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
                    <div className='flex-1 flex xl:gap-10 gap-5'>
                        <div className='flex-1 translate-y-12'>
                            <Image
                                src={images[0]}
                                alt='reason-1'
                                className='aspect-[1/1.3] rounded-xl object-cover'
                            />
                        </div>
                        <div className='flex-1 -translate-y-12'>
                            <Image
                                src={images[1]}
                                alt='reason-2'
                                className='aspect-[1/1.3] rounded-xl object-cover'
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
