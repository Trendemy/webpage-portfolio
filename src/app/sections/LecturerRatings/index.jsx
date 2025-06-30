import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import Feedbacks from '~/components/Feedbacks';
import { Section } from '~/app/sections';
import ArrowLine from './components/ArrowLine';
import BrushStroke from './components/BrushStroke';

const LecturerRatings = ({ title, data, animation }) => {
    return (
        <Section>
            <div className='container' data-aos={animation}>
                <Element
                    className='flex flex-col gap-10'
                    name={sections.feedback.id}
                >
                    {title && (
                        <h2 className='heading-2 text-primary uppercase text-center'>
                            {title}
                        </h2>
                    )}
                    {Array.isArray(data) && data.length > 0 && (
                        <div className='relative grid grid-cols-1 xl:grid-cols-12'>
                            <div className='xl:col-span-2 flex justify-center text-secondary'>
                                <ArrowLine className='absolute top-1/2 left-0 xl:static w-10 md:w-14 xl:w-4/5 h-fit -translate-y-1/2 md:translate-y-0 shrink-0' />
                            </div>
                            <div className='xl:col-span-8 w-full mx-auto'>
                                <Feedbacks data={data} center />
                            </div>
                            <div className='xl:col-span-2 flex justify-center items-end text-secondary'>
                                <BrushStroke className='absolute right-0 xl:static w-20 md:w-28 xl:w-4/5 h-fit translate-y-full md:translate-y-0 shrink-0' />
                            </div>
                        </div>
                    )}
                </Element>
            </div>
        </Section>
    );
};

LecturerRatings.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    animation: PropTypes.string
};
export default LecturerRatings;
