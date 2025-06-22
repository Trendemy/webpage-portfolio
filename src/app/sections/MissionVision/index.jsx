import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';

const MissionVision = ({
    titles = [],
    descriptions = [],
    images = [],
    animation
}) => {
    return (
        <Section className='overflow-hidden'>
            <Element className='container' name={sections.vision.id}>
                <div className='flex flex-col gap-10' data-aos={animation}>
                    <div className='flex flex-col xl:flex-row justify-center items-center xl:gap-20 gap-5'>
                        <div className='flex-1 flex flex-col items-center xl:items-start xl:border-l-4 xl:border-secondary xl:pl-3'>
                            <h2 className='w-fit heading-2 uppercase text-primary xl:text-left text-center border-b-4 border-secondary xl:border-none pb-0.5 xl:pb-0 mb-5 xl:mb-0'>
                                {titles[0]}
                            </h2>
                            <p className='text-paragraph'>{descriptions[0]}</p>
                        </div>
                        <div className='relative flex-1 flex justify-center items-center'>
                            <Image
                                src={images[0]}
                                alt='image vision'
                                className='w-10/12 xl:w-full rounded-xl'
                            />
                            <div className='absolute w-30 h-15 bottom-0 right-0 bg-secondary rounded-t-full rotate-45 translate-x-1/2' />
                        </div>
                    </div>
                    <div className='flex flex-col xl:flex-row-reverse justify-center items-center xl:gap-20 gap-5'>
                        <div className='flex-1 flex flex-col items-center xl:items-start xl:border-l-4 xl:border-secondary xl:pl-3'>
                            <h2 className='w-fit heading-2 uppercase text-primary xl:text-left text-center border-b-4 border-secondary xl:border-none pb-0.5 xl:pb-0 mb-5 xl:mb-0'>
                                {titles[1]}
                            </h2>
                            <p className='text-paragraph'>{descriptions[1]}</p>
                        </div>
                        <div className='relative flex-1 flex justify-center items-center'>
                            <Image
                                src={images[1]}
                                alt='mission'
                                className='w-10/12 xl:w-full rounded-xl'
                            />
                            <div className='absolute w-30 h-15 bottom-0 left-0 bg-secondary rounded-b-full rotate-45 -translate-x-1/2 translate-y-1/2' />
                        </div>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

MissionVision.propTypes = {
    titles: PropTypes.array.isRequired,
    descriptions: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default MissionVision;
