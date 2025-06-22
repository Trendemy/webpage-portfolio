import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { CheckCircle } from '~/components/Icons';
import { Image } from '~/components/UI';
import BrushStroke from './components/BrushStroke';

const GoalSection = ({ title = '', data = [], images = [], animation }) => {
    return (
        <Section>
            <Element className='container' name={sections.goal.id}>
                <div
                    className='flex flex-col xl:flex-row justify-center items-center xl:gap-20 gap-10'
                    data-aos={animation}
                >
                    <div className='flex-1 flex flex-col gap-5'>
                        <h2 className='heading-2 uppercase text-primary text-center xl:text-left'>
                            {title}
                        </h2>
                        <div className='border border-gray-400 border-dashed' />
                        <ul className='flex flex-col gap-5'>
                            {data.map((text, index) => (
                                <li
                                    key={index}
                                    className='flex items-center gap-3'
                                >
                                    <div className='size-5 flex text-primary'>
                                        <CheckCircle className='shrink-0' />
                                    </div>
                                    <p className='text-paragraph'>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {Array.isArray(images) && images.length > 0 && (
                        <div className='relative flex-1 flex'>
                            <div className='w-[70%] ml-auto'>
                                <Image
                                    src={images[0]}
                                    alt={'Goal'}
                                    className='aspect-[1/1.3] rounded-xl object-cover'
                                />
                            </div>
                            <div className='absolute w-1/2 top-3/5 left-0 -translate-y-1/2'>
                                <Image
                                    src={images[1]}
                                    alt={'Goal'}
                                    className='aspect-square rounded-xl object-cover'
                                />
                            </div>
                            <span className='absolute w-3/5 bottom-0 flex text-secondary'>
                                <BrushStroke />
                            </span>
                        </div>
                    )}
                </div>
            </Element>
        </Section>
    );
};

GoalSection.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default GoalSection;
