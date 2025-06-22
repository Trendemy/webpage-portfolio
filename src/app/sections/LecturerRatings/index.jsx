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
                        <div className='relative'>
                            <div className='absolute w-[10%] top-0 left-0 hidden xl:flex text-secondary'>
                                <ArrowLine className='shrink-0' />
                            </div>
                            <div className='xl:w-3/5 mx-auto'>
                                <Feedbacks data={data} />
                            </div>
                            <div className='absolute w-[10%] right-0 bottom-0 hidden xl:flex text-secondary'>
                                <BrushStroke className='shrink-0' />
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
