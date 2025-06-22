import { useState } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import Chapter from './components/Chapter';
import { Button } from '~/components/UI';

const CourseContent = ({ title, subtitle, data = [], animation }) => {
    const [showStates, setShowStates] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleChapter = (index) => {
        setShowStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            const allExpanded = newStates.every((state) => state);
            setIsExpanded(allExpanded);

            return newStates;
        });
    };

    const toggleAll = () => {
        const newState = !isExpanded;
        setShowStates(data.map(() => newState));
        setIsExpanded(newState);
    };

    return (
        <Element className='relative py-14' name={sections.content.id}>
            <div className='absolute inset-0 bg-primary flex flex-col justify-around before:absolute before:content before:w-[1px] before:h-full before:bg-white before:left-[5%] after:absolute after:content after:w-[1px] after:h-full after:bg-white after:right-[5%]'>
                <div className='h-[1px] w-full bg-white' />
                <div className='h-[1px] w-full bg-white' />
                <div className='h-[1px] w-full bg-white' />
            </div>
            <div className='absolute inset-0 xl:w-4/5 xl:left-1/2 xl:inset-y-0 bg-primary xl:-translate-x-1/2' />
            <div className='container' data-aos={animation}>
                <div className='flex justify-center items-center gap-3 mb-10'>
                    <h2 className='w-fit heading-2 text-white bg-secondary rounded-xl px-2 py-1'>
                        {title}
                    </h2>
                    <p className='subtitle text-white'>{subtitle}</p>
                </div>
                <div className='grid xl:grid-cols-2 xl:justify-between gap-10'>
                    {Array.isArray(data) &&
                        data.map((chapter, index) => (
                            <Chapter
                                key={index}
                                title={chapter?.title}
                                content={chapter?.content || []}
                                isShow={showStates[index]}
                                onToggle={() => toggleChapter(index)}
                            />
                        ))}
                </div>
                {data.length > 0 && (
                    <div className='text-center mt-10'>
                        <Button secondary onClick={toggleAll}>
                            {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                        </Button>
                    </div>
                )}
            </div>
        </Element>
    );
};

CourseContent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    data: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default CourseContent;
