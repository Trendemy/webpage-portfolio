import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Section } from '~/app/sections';
import BreakthroughCourseTabs from './components/BreakthroughCourseTabs';
import BreakthroughCourseList from './components/BreakthroughCourseList';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import { Image } from '~/components/UI';
import { Hexagon, Octagram } from '~/components/Icons';

function BreakthroughCoursesSection({
   title,
   highlightTitle,
   image,
   data,
   animation
}) {
   const [tab, setTab] = useState(data[0]?.id || null);
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      const selected = data.find((t) => t.id === tab);
      setCourses(selected?.courses || []);
   }, [data, tab]);

   console.log(courses);

   return (
      <>
         <Section>
            <div className='container'>
               <div
                  className='relative flex flex-col xl:gap-20 gap-10 after:absolute after:content after:size-8 after:bottom-[5%] after:-right-20 after:bg-secondary after:rounded-full overflow-hidden'
                  data-aos={animation}
               >
                  <div className='relative'>
                     <div className='absolute size-14 hidden xl:flex text-secondary right-1/6 top-10 rotate-12'>
                        <Octagram className='shrink-0' />
                     </div>
                     <div className='grid grid-cols-12 text-center'>
                        <HighlightTitle
                           as='h3'
                           title={title}
                           highlight={highlightTitle}
                           className='col-span-12 xl:col-span-8 heading-2 uppercase text-center xl:text-left'
                        />
                     </div>
                  </div>
                  <div className='flex-1 grid grid-cols-12 xl:gap-20'>
                     <div className='xl:col-span-5 hidden xl:flex justify-center items-center'>
                        <Image
                           src={image}
                           alt={title}
                           className='w-full object-cover aspect-square'
                        />
                     </div>
                     <div className='relative hidden xl:block xl:h-full xl:col-span-1'>
                        <div className='absolute size-12 left-0 bottom-1/6 flex text-secondary -translate-x-1/2'>
                           <Hexagon className='shrink-0' />
                        </div>
                     </div>
                     <div className='col-span-12 xl:col-span-6'>
                        <div className='h-[33.5rem] flex flex-col rounded-2xl bg-primary py-5 gap-5'>
                           <BreakthroughCourseTabs
                              data={data}
                              tab={tab}
                              setTab={setTab}
                           />
                           <BreakthroughCourseList courses={courses} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Section>
      </>
   );
}

BreakthroughCoursesSection.propTypes = {
   title: PropTypes.string,
   highlightTitle: PropTypes.string,
   image: PropTypes.string,
   data: PropTypes.array,
   animation: PropTypes.string
};

export default BreakthroughCoursesSection;
