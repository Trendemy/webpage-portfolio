import { useState } from 'react';
import PropTypes from 'prop-types';
import { Register } from '~/components/ModalForm';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import { Button, Image } from '~/components/UI';
import { Hexagon, Octagram } from '~/components/Icons';

const BannerCourse = ({
    title = '',
    highlightTitle = '',
    description = '',
    images = []
}) => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <section className='relative after:content after:absolute after:inset-0 after:bg-[url(/src/assets/images/banner-course.webp)] after:bg-center after:bg-cover after:bg-no-repeat after:opacity-5 after:-z-1 py-20'>
            <div className='absolute 2xl:left-20 2xl:top-20 xl:top-0 hidden xl:flex icon-size text-secondary'>
                <Hexagon className='shrink-0' />
            </div>
            <div className='absolute left-2/5 2xl:bottom-20 xl:bottom-10 hidden xl:flex icon-size text-secondary'>
                <Octagram className='shrink-0' />
            </div>
            <div className='container'>
                <div className='flex flex-col xl:flex-row justify-center items-center xl:gap-20 gap-10'>
                    <div className='flex-1'>
                        <HighlightTitle
                            as='h1'
                            title={title}
                            highlight={highlightTitle}
                            className='heading-1 uppercase text-center xl:text-left'
                        >
                            <HighlightTitle.Underline className='translate-y-4/5' />
                        </HighlightTitle>
                        <p className='text-paragraph'>{description}</p>
                        <div className='text-center xl:text-left mt-3'>
                            <Button primary onClick={() => setOpenForm(true)}>
                                Bắt đầu ngay
                            </Button>
                            <Register
                                open={openForm}
                                onClose={() => setOpenForm(false)}
                            />
                        </div>
                    </div>
                    {Array.isArray(images) && images.length > 0 && (
                        <div className='relative flex-1 flex'>
                            <div className='flex-1'>
                                <Image
                                    src={images[0]}
                                    className='aspect-[4/3] object-cover'
                                />
                            </div>
                            {images?.[1] && (
                                <div className='absolute w-2/5 left-0 bottom-0 flex aspect-[1/0.8] border-t-4 border-r-4 border-white'>
                                    <Image
                                        src={images[1]}
                                        className='size-full object-cover'
                                    />
                                </div>
                            )}
                            {images?.[2] && (
                                <div className='absolute w-1/4 xl:-translate-10 -translate-5'>
                                    <Image
                                        src={images[2]}
                                        className='aspect-square object-cover rounded-full shadow-xl'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

BannerCourse.propTypes = {
    title: PropTypes.string.isRequired,
    highlightTitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired
};
export default BannerCourse;
