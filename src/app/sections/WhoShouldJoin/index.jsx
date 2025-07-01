import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import { Image } from '~/components/UI';
import ObjectCard from './ObjectCard';
import Arrow from './components/Arrow';

const WhoShouldJoin = ({ title, objects, images, animation }) => {
    return (
        <Section className='pb-20'>
            <Element className='container' name={sections.join.id}>
                <div
                    className='flex flex-col xl:flex-row justify-center items-center xl:gap-0 gap-10'
                    data-aos={animation}
                >
                    <div className='flex-1 flex flex-col gap-10'>
                        <h2 className='heading-2 text-primary uppercase text-center xl:text-left'>
                            {title}
                        </h2>
                        <div className='flex flex-col gap-10'>
                            {Array.isArray(objects) &&
                                objects.map((obj, index) => (
                                    <ObjectCard
                                        key={index}
                                        image={obj.image}
                                        name={obj.name}
                                        description={obj.description}
                                    />
                                ))}
                        </div>
                    </div>
                    {Array.isArray(images) && (
                        <div className='flex-1 relative flex justify-center items-center'>
                            {images?.[0] && (
                                <div className='flex-1 flex xl:translate-20 translate-5 mt-auto'>
                                    <Image
                                        src={images[0]}
                                        alt='Who Should Join'
                                        className='w-full rounded-2xl object-cover aspect-square'
                                    />
                                </div>
                            )}
                            {images?.[1] && (
                                <div className='flex-1 flex -translate-x-5 xl:translate-0 -z-1'>
                                    <Image
                                        src={images[1]}
                                        alt='Who Should Join'
                                        className='w-full rounded-2xl object-cover aspect-[1/1.5]'
                                    />
                                </div>
                            )}
                            <div className='absolute w-1/3 flex top-1/2 left-1/5 text-secondary -translate-y-full'>
                                <Arrow className='w-full shrink-0' />
                            </div>
                        </div>
                    )}
                </div>
            </Element>
        </Section>
    );
};

WhoShouldJoin.propTypes = {
    title: PropTypes.string,
    objects: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ),
    images: PropTypes.array,
    animation: PropTypes.string
};
export default WhoShouldJoin;
