import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Element } from 'react-scroll';
import { sections } from '@data';
import Feedbacks from '@components/Feedbacks';
import ArrowLine from './components/ArrowLine';
import BrushStroke from './components/BrushStroke';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const LecturerRatings = ({ title, subtitle, data, animation }) => {
   return (
      <section className='py-5'>
         <div className='container py-5' data-aos={animation}>
            <Element className='row' name={sections.feedback.id}>
               <div className='col-12 text-center mb-5'>
                  {title && (
                     <h2 className='heading-2 text-primary uppercase'>
                        {title}
                     </h2>
                  )}
                  {subtitle && <span className='subtitle'>{subtitle}</span>}
               </div>
               {Array.isArray(data) && data.length > 0 && (
                  <div className='col-12'>
                     <div className={cx('wrapper-feedbacks')}>
                        <div className={cx('deco')}>
                           <span className={cx('arrow-line')}>
                              <ArrowLine />
                           </span>
                        </div>
                        <div className={cx('feedbacks')}>
                           <Feedbacks data={data} />
                        </div>
                        <div className={cx('deco')}>
                           <span className={cx('brush-stroke')}>
                              <BrushStroke />
                           </span>
                        </div>
                     </div>
                  </div>
               )}
            </Element>
         </div>
      </section>
   );
};

LecturerRatings.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   data: PropTypes.array,
   animation: PropTypes.string
};
export default LecturerRatings;
