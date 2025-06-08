import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import Feedbacks from '@components/Feedbacks';
import { LazyImage } from '@components/UI';
import { Swoosh, ZigzagArrow } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const StudentFeedback = ({
   title = '',
   subtitle = '',
   images = [],
   feedbacks = [],
   animation
}) => {
   return (
      <section className='overflow-hidden py-5'>
         <Element className='container' name={sections.feedback.id}>
            <div className='row' data-aos={animation}>
               <div className='col-12 text-center mb-5'>
                  {title && (
                     <h2 className='heading-2 text-primary uppercase'>
                        {title}
                     </h2>
                  )}
                  {subtitle && <p className='subtitle text-dark'>{subtitle}</p>}
               </div>
               <div className={cx('main')}>
                  {Array.isArray(images) && images.length > 0 && (
                     <div className={cx('images')}>
                        <span className={cx('deco-swoosh')}>
                           <Swoosh />
                        </span>
                        {images?.[0] && (
                           <LazyImage
                              src={images[0]}
                              alt='imagefeedback 1'
                              className={cx('img-1')}
                           />
                        )}
                        {images?.[1] && (
                           <LazyImage
                              src={images[1]}
                              alt='imagefeedback 2'
                              className={cx('img-2')}
                           />
                        )}
                     </div>
                  )}
                  {Array.isArray(feedbacks) && feedbacks.length > 0 && (
                     <div className={cx('content')}>
                        <div className={cx('deco-zigzag')}>
                           <ZigzagArrow />
                        </div>
                        <Feedbacks data={feedbacks} />
                     </div>
                  )}
               </div>
            </div>
         </Element>
      </section>
   );
};

StudentFeedback.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   images: PropTypes.array,
   animation: PropTypes.string,
   feedbacks: PropTypes.array
};
export default StudentFeedback;
