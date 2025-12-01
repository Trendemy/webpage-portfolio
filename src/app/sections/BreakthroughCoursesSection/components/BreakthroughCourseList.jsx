import PropTypes from 'prop-types';
import { Button, Image } from '~/components/UI';

function BreakthroughCourseList({ courses, onRegister }) {
   return (
      <div className='flex-1 flex flex-col overflow-y-auto custom-scrollbar gap-3 px-5'>
         {courses.map((course) => (
            <div
               key={course.id}
               className='flex flex-col sm:flex-row bg-white rounded-xl xl:gap-10 gap-5 p-3'
            >
               <div className='size-[11.25rem] flex shrink-0 overflow-hidden mx-auto'>
                  <Image
                     src={course.image}
                     alt={course.name}
                     className='size-full object-cover aspect-square'
                  />
               </div>
               <div className='flex-1 flex flex-col'>
                  <div className='flex-1 flex flex-col gap-2'>
                     <h3 className='heading-4'>{course.name}</h3>
                     <div className='flex items-center gap-2'>
                        <div className='size-2 bg-primary rounded-full' />
                        <p>{course.lecturer}</p>
                     </div>
                     <div className='flex items-center gap-2'>
                        <div className='size-2 bg-primary rounded-full' />
                        <p>{course.mode}</p>
                     </div>
                     <div className='flex items-center gap-2'>
                        <div className='size-2 bg-primary rounded-full' />
                        <p>{course.duration}</p>
                     </div>
                  </div>
                  <div className='mt-2'>
                     <Button primary className='py-2 px-4' onClick={onRegister}>
                        Bắt đầu ngay
                     </Button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

BreakthroughCourseList.propTypes = {
   courses: PropTypes.array,
   onRegister: PropTypes.func
};
export default BreakthroughCourseList;
