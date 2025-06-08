import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import { CheckCircle } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Reason = ({ title = '', reasons = [], images = [], animation }) => {
   return (
      <section className='py-5'>
         <Element name={sections.reason.id} className='container'>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('content')}>
                  <h2 className='heading-2 text-primary uppercase'>{title}</h2>
                  <div className={cx('separate')}></div>
                  <div className={cx('reasons')}>
                     {reasons.map((text, index) => {
                        const strings = text.split(':');
                        return (
                           <div key={index} className={cx('reason')}>
                              <span className={cx('icon')}>
                                 <CheckCircle className={cx('check-icon')} />
                              </span>
                              <span className={cx('text')}>
                                 <strong>{strings[0]}:</strong>
                                 {strings[1] ? ` ${strings[1]}` : ''}
                              </span>
                           </div>
                        );
                     })}
                  </div>
               </div>
               <div className={cx('images')}>
                  <div className={cx('image-wrapper')}>
                     <LazyImage
                        src={images[0]}
                        alt='reason-1'
                        className={cx('img-1')}
                     />
                  </div>
                  <div className={cx('image-wrapper')}>
                     <LazyImage
                        src={images[1]}
                        alt='reason-2'
                        className={cx('img-2')}
                     />
                  </div>
               </div>
            </div>
         </Element>
      </section>
   );
};

Reason.propTypes = {
   title: PropTypes.string.isRequired,
   reasons: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};

export default Reason;
