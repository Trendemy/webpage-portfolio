import PropTypes from 'prop-types';
import { Image } from '~/components/UI';

const ExperienceContainer = ({ title, data, animation }) => {
    return (
        <div className='flex flex-col gap-5' data-aos={animation}>
            <h3 className='heading-3 uppercase text-center'>{title}</h3>
            <div className='grid xl:grid-cols-2 gap-5'>
                {data.map(({ title, images }, index) => (
                    <div
                        key={index}
                        className='border border-secondary rounded-lg'
                    >
                        <h4 className='heading-4 text-center my-5'>{title}</h4>
                        <div className='w-4/5 border-t border-gray-400 border-dashed mx-auto' />
                        <div className='flex flex-wrap justify-center gap-5 xl:gap-10 my-5'>
                            {images.map((src, index) => (
                                <div
                                    key={index}
                                    className='h-8 xl:h-12 flex transition hover:scale-150'
                                >
                                    <Image src={src} className='object-cover' />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ExperienceContainer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    animation: PropTypes.string
};
export default ExperienceContainer;
