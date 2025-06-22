import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from '~/components/UI';
import { Register } from '~/components/ModalForm';
import HighlightedUnderline from '~/app/sections/components/HighlightedUnderline';
import Tag from './components/Tag';
import { Course, Flower, Hexagon, Octagram, Student } from '~/components/Icons';

const HeroSection = ({
    title = '',
    highlightTitle = '',
    description = '',
    image = ''
}) => {
    const [openForm, setOpenForm] = useState(false);

    return (
        <section className='relative bg-center bg-cover bg-no-repeat bg-[url(/src/assets/images/banner.webp)] before:content before:absolute before:top-0 before:left-0 before:size-full before:bg-white/80 before:-z-1 overflow-hidden z-0'>
            <div className='absolute top-1/2 left-1/6 sm:top-2/5 md:top-2/6 xl:top-5 2xl:top-1/12 xl:left-1/2 icon-size text-secondary flex'>
                <Flower className='shrink-0' />
            </div>
            <div className='absolute top-2/5 right-1/6 lg:top-1/3 xl:left-1/3 xl:top-4/5 icon-size text-secondary flex'>
                <Octagram className='shrink-0' />
            </div>
            <div className='absolute bottom-1/12 right-1/12 xl:bottom-1/6 xl:right-5 2xl:right-1/12 icon-size text-secondary flex'>
                <Hexagon className='shrink-0' />
            </div>
            <div className='container'>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='flex-1 xl:mt-0 mt-3'>
                        <HighlightedUnderline
                            as='h1'
                            className='heading-1 uppercase text-center xl:text-left'
                            title={title}
                            highlight={highlightTitle}
                        />
                        <p className='text-paragraph'>{description}</p>
                        <div className='flex xl:justify-start justify-center mt-3'>
                            <Button primary onClick={() => setOpenForm(true)}>
                                Bắt đầu ngay
                            </Button>
                            <Register
                                open={openForm}
                                onClose={() => setOpenForm(false)}
                            />
                        </div>
                    </div>
                    <div className='w-4/6 lg:w-1/2 xl:w-1/3 relative flex justify-center'>
                        <Tag
                            className='top-4/5 -left-1/6 xl:-left-5 2xl:top-10/12'
                            icon={Student}
                            name='Học viên'
                            number='1000+'
                        />
                        <Image src={image} alt='girl' className='xl:w-4/5' />
                        <Tag
                            className='top-1/2 -right-1/5 xl:-right-7'
                            icon={Course}
                            name='Khóa học'
                            number='100+'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    highlightTitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default HeroSection;
