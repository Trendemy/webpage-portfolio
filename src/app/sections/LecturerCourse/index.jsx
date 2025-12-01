import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import LecturerCard from './LecturerCard';

const LecturerCourse = ({ title = '', lecturers = [], animation }) => {
   return (
      <Section>
         <Element className='container' name={sections.teacher.id}>
            <div className='flex flex-col gap-10' data-aos={animation}>
               <div className='text-center'>
                  <h2 className='heading-2 text-primary uppercase'>{title}</h2>
               </div>
               <div className='grid xl:grid-cols-2 gap-10'>
                  {lecturers.map((teacher, index) => (
                     <LecturerCard
                        key={index}
                        avatar={teacher.avatar}
                        name={teacher.name}
                        expertise={teacher.specialized}
                        bio={teacher.description}
                        facebook={teacher.facebook}
                        linkedIn={teacher.linkedIn}
                     />
                  ))}
               </div>
            </div>
         </Element>
      </Section>
   );
};

LecturerCourse.propTypes = {
   title: PropTypes.string,
   lecturers: PropTypes.array,
   animation: PropTypes.string
};
export default LecturerCourse;
