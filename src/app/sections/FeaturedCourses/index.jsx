import { useState } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { useSwipeable } from 'react-swipeable';
import { sections } from '@data';
import Card from './components/Card';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const FeaturedCourses = ({ courses = [], animation }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const handlers = useSwipeable({
      onSwipedLeft: () =>
         setCurrentIndex((prev) => (prev + 1) % courses.length),
      onSwipedRight: () =>
         setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length)
   });

   return (
      <section
         className='overflow-hidden py-5'
         style={{ backgroundColor: '#E7FAF6' }}
      >
         <Element className='container' name={sections.courses.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('heading')}>
                  <h2
                     className={classNames(
                        cx('title'),
                        'heading-2',
                        'text-primary',
                        'uppercase'
                     )}
                  >
                     CÁC KHÓA HỌC TIÊU BIỂU TRÊN{' '}
                     <span className='text-brand'>Trendemy</span>
                  </h2>
               </div>
               <div className={cx('row')} {...handlers}>
                  {courses.map((course, index) => (
                     <div
                        key={course.id}
                        className={classNames(
                           cx('col', { hidden: index !== currentIndex })
                        )}
                     >
                        <Card
                           thumbnail={course.thumbnail}
                           avatar={course.avatar}
                           author={course.author}
                           lesson={course.lesson}
                           number={course.number}
                           student={course.student}
                           star={course.star}
                           to='/khoa-hoc/data-analyst'
                        />
                     </div>
                  ))}
               </div>
               <div className={cx('nav')}>
                  <ul className={cx('pagination')}>
                     {courses.map((course, index) => (
                        <li
                           key={course.id}
                           className={cx('page-item', {
                              active: index === currentIndex
                           })}
                           onClick={() => setCurrentIndex(index)}
                        ></li>
                     ))}
                  </ul>
               </div>
            </div>
         </Element>
      </section>
   );
};

FeaturedCourses.propTypes = {
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

export default FeaturedCourses;
