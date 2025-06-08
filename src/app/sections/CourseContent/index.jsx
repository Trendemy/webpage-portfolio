import { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { sections } from '@data';
import Chapter from './components/Chapter';
import { Button } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CourseContent = ({ title, subtitle, data = [], animation }) => {
   const refs = useRef([]);
   const [height, setHeight] = useState(0);
   const [showStates, setShowStates] = useState([]);
   const [isExpanded, setIsExpanded] = useState(false);

   useEffect(() => {
      setShowStates(data.map(() => false));
      const heights = refs.current.map((ref) => ref?.scrollHeight || 0);
      setHeight(Math.max(...heights));
   }, [data]);

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
      <Element className={cx('section')} name={sections.content.id}>
         <div className={cx('background')}>
            <span className={cx('line')}></span>
            <span className={cx('line')}></span>
            <span className={cx('line')}></span>
         </div>
         <div className='container'>
            <div className={cx('row')} data-aos={animation}>
               <div className={cx('col', 'col-1')}>
                  <h2
                     className={classNames(
                        cx('text-heading'),
                        'heading-2 text-white'
                     )}
                  >
                     {title}
                  </h2>
                  <p className='subtitle text-white'>{subtitle}</p>
               </div>
               <div className={cx('col', 'col-2')}>
                  {Array.isArray(data) &&
                     data.map((chapter, index) => (
                        <Chapter
                           key={index}
                           title={chapter?.title}
                           content={chapter?.content || []}
                           refContent={(e) => (refs.current[index] = e)}
                           height={height}
                           isShow={showStates[index]}
                           onToggle={() => toggleChapter(index)}
                        />
                     ))}
               </div>
               {data.length > 0 && (
                  <div className={cx('col', 'col-3')}>
                     <Button secondary onClick={toggleAll}>
                        {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                     </Button>
                  </div>
               )}
            </div>
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
