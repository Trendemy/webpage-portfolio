import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Section } from '~/app/sections';
import { sections } from '~/data';
import Content from './components/Content';
import { Image } from '~/components/UI';

const CoreValues = ({ title = '', values = [], images = [], animation }) => {
    return (
        <Section className='overflow-hidden'>
            <Element name={sections.values.id} className='container'>
                <div className='flex flex-col gap-5' data-aos={animation}>
                    <div className='flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-20 gap-10'>
                        <div className='flex-1 flex xl:gap-5 gap-3'>
                            <div className='flex-1 flex flex-col xl:gap-5 gap-3'>
                                <div className='flex-1 flex'>
                                    <Image
                                        src={images[0]}
                                        alt='image-core-1'
                                        className='rounded-tl-[50%] object-cover'
                                    />
                                </div>
                                <div className='flex-1 flex'>
                                    <Image
                                        src={images[1]}
                                        alt='image-core-2'
                                        className='rounded-full object-cover aspect-square'
                                    />
                                </div>
                            </div>
                            <div className='relative flex-1 flex'>
                                <div className='absolute size-20 left-1/2 rounded-full bg-secondary -translate-y-1/3 -z-1' />
                                <Image
                                    src={images[2]}
                                    alt='image-core-3'
                                    className='aspect-[1/2] xl:rounded-tr-[13rem] xl:rounded-bl-[13rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem] rounded-tr-[7rem] rounded-bl-[7rem] object-cover'
                                />
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-5'>
                            <h2 className='heading-2 text-primary uppercase text-center xl:text-left'>
                                {title}
                            </h2>
                            <div className='flex-1 flex flex-col gap-10'>
                                {values.map((content) => (
                                    <Content
                                        key={content.id}
                                        icon={content.icon}
                                        title={content.title}
                                        desc={content.desc}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

CoreValues.propTypes = {
    title: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default CoreValues;
