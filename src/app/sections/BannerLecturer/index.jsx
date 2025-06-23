import PropTypes from 'prop-types';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import { Image } from '~/components/UI';
import BrushStroke from './components/BrushStroke';

const BannerLecturer = ({ avatar, name, description }) => {
    return (
        <section className='relative py-14 after:content after:absolute after:inset-0 after:bg-[url(/src/assets/images/banner-lecturer.webp)] after:bg-center after:bg-cover after:bg-no-repeat after:opacity-5 after:-z-1'>
            <div className='container'>
                <div className='flex flex-col xl:flex-row justify-center items-center xl:gap-20 gap-10'>
                    <div className='flex-1 flex flex-col xl:items-start items-center'>
                        <h1 className='heading-1 uppercase'>Giảng viên</h1>
                        <HighlightTitle
                            as='h1'
                            className='heading-1 uppercase mb-5'
                            title={name}
                            highlight={name}
                        >
                            <HighlightTitle.Underline className='translate-y-4/5' />
                        </HighlightTitle>
                        <p className='text-paragraph'>{description}</p>
                    </div>
                    {avatar && (
                        <div className='flex-1 relative flex justify-center'>
                            <div className='absolute flex w-4/5 bottom-0 right-0 text-secondary'>
                                <BrushStroke className='w-full shrink-0' />
                            </div>
                            <Image
                                src={avatar}
                                alt='Giảng viên'
                                className='rounded-2xl aspect-[4/3] object-cover'
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

BannerLecturer.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default BannerLecturer;
