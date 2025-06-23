import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';
import { CheckCircle } from '~/components/Icons';
import BrushStroke from './components/BrushStroke';

const Benefits = ({ title, data = [], images = [], animation }) => {
    return (
        <Section>
            <Element className='container' name={sections.benefits.id}>
                <div
                    className='flex flex-col-reverse xl:flex-row justify-center items-center gap-20'
                    data-aos={animation}
                >
                    {Array.isArray(images) && (
                        <div className='flex-1 relative flex gap-5'>
                            <div className='absolute w-4/6 right-0 bottom-0 flex text-secondary translate-y-10'>
                                <BrushStroke className='w-full shrink-0' />
                            </div>
                            {images?.[0] && (
                                <div className='flex-1 flex'>
                                    <Image
                                        src={images[0]}
                                        alt='image benefits 1'
                                        className='rounded-lg object-cover'
                                    />
                                </div>
                            )}
                            <div className='flex-1 flex flex-col gap-5'>
                                {images?.[1] && (
                                    <div className='flex-1 flex'>
                                        <Image
                                            src={images[1]}
                                            alt='image benefits 2'
                                            className='rounded-lg aspect-[1.5/1] object-cover'
                                        />
                                    </div>
                                )}
                                {images?.[2] && (
                                    <div className='flex-1 flex'>
                                        <Image
                                            src={images[2]}
                                            alt='image benefits 3'
                                            className='rounded-lg aspect-[1.5/1] object-cover'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    <div className='flex-1 flex flex-col gap-5'>
                        <h2 className='heading-2 text-primary uppercase text-center xl:text-left'>
                            {title}
                        </h2>
                        <div className='border border-gray-400 border-dashed' />
                        <ul className='flex flex-col gap-5'>
                            {data.map((text, index) => (
                                <li key={index} className='flex items-center'>
                                    <div className='flex mr-3'>
                                        <CheckCircle className='size-4 xl:size-5 shrink-0 text-primary' />
                                    </div>
                                    <p className='text-paragraph'>{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

Benefits.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default Benefits;
