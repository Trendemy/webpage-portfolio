import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { teacherService } from '@services';
import { sections } from '@data';
import { logger } from '@utils';
import Lecturer from './components/Cards/Lecturer';
import HighlightedSubtitle from '../components/HighlightedSubtitle';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const LecturerCourse = ({
   title = '',
   subtitle = '',
   lecturers = [],
   animation
}) => {
   const [teachers, setTeachers] = useState([]);
   useEffect(() => {
      (async () => {
         try {
            const data = await teacherService.getByIds(lecturers);
            setTeachers(data);
         } catch (error) {
            logger('get teachers', error);
         }
      })();
   }, [lecturers]);

   return (
      <section className='py-5'>
         <Element className='container' name={sections.teacher.id}>
            <div className={cx('row')} data-aos={animation}>
               <div className={cx('col', 'col-1')}>
                  <h2 className='heading-2 text-primary uppercase'>{title}</h2>
                  <HighlightedSubtitle subtitle={subtitle} />
               </div>
               <div className={cx('col', 'col-2')}>
                  {teachers.map((teacher) => (
                     <Lecturer
                        key={teacher.id}
                        avatar={teacher.avatar}
                        name={teacher.name}
                        expertise={`Giảng viên khóa học ` + teacher.specialized}
                        bio={teacher.description}
                        facebook={teacher.facebook}
                        linkedIn={teacher.linkedIn}
                     />
                  ))}
                  {teachers.map((teacher) => (
                     <Lecturer
                        key={teacher.id}
                        avatar={teacher.avatar}
                        name={teacher.name}
                        expertise={`Giảng viên khóa học ` + teacher.specialized}
                        bio={teacher.description}
                        facebook={teacher.facebook}
                        linkedIn={teacher.linkedIn}
                     />
                  ))}
               </div>
            </div>
         </Element>
      </section>
   );
};

LecturerCourse.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   lecturers: PropTypes.array,
   animation: PropTypes.string
};
export default LecturerCourse;
