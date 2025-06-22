import { useState } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { useSwipeable } from 'react-swipeable';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import CourseCard from './components/CourseCard';
import { cn } from '~/utils';

const CoursesSection = ({ courses = [], animation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrentIndex((prev) => (prev + 1) % courses.length),
        onSwipedRight: () =>
            setCurrentIndex(
                (prev) => (prev - 1 + courses.length) % courses.length
            )
    });

    return (
        <Section className='bg-primary/10 overflow-hidden'>
            <Element className='container' name={sections.courses.id}>
                <div className='flex flex-col gap-10' data-aos={animation}>
                    <div className='text-center'>
                        <h2 className='heading-2 text-primary uppercase'>
                            CÁC KHÓA HỌC TIÊU BIỂU TRÊN{' '}
                            <span className='text-brand'>Trendemy</span>
                        </h2>
                    </div>
                    <div
                        className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:gap-10 xl:gap-5 lg:gap-10'
                        {...handlers}
                    >
                        {courses.map((course, index) => (
                            <CourseCard
                                key={course.id}
                                className={cn(
                                    'lg:static lg:visible lg:opacity-100 transition-all',
                                    {
                                        'absolute invisible opacity-0':
                                            index !== currentIndex
                                    }
                                )}
                                thumbnail={course.thumbnail}
                                avatar={course.avatar}
                                author={course.author}
                                lesson={course.lesson}
                                number={course.number}
                                student={course.student}
                                star={course.star}
                                to='/khoa-hoc/data-analyst'
                            />
                        ))}
                    </div>
                    <div className='lg:hidden flex justify-center items-center'>
                        <ul className='flex gap-5'>
                            {courses.map((course, index) => (
                                <li
                                    key={course.id}
                                    className={cn(
                                        'size-5 rounded-full border border-secondary-2 transition-colors',
                                        {
                                            'bg-secondary-2':
                                                index === currentIndex
                                        }
                                    )}
                                    onClick={() => setCurrentIndex(index)}
                                ></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

CoursesSection.propTypes = {
    animation: PropTypes.string,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                .isRequired,
            avatar: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            lesson: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            student: PropTypes.number.isRequired,
            star: PropTypes.number.isRequired
        })
    ).isRequired
};

export default CoursesSection;
