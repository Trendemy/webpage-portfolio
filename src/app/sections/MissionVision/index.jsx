import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const MissionVision = ({
   titles = [],
   descriptions = [],
   images = [],
   animation
}) => {
   return (
      <section className='overflow-hidden py-5'>
         <Element className='container' name={sections.vision.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('vision')}>
                  <div className={cx('content')}>
                     <h2
                        className={classNames(
                           cx('title'),
                           'heading-2',
                           'text-primary',
                           'uppercase'
                        )}
                     >
                        {titles[0]}
                     </h2>
                     <p className={cx('desc')}>{descriptions[0]}</p>
                  </div>
                  <div className={cx('image-wrapper')}>
                     <LazyImage src={images[0]} alt='vision' />
                  </div>
               </div>
               <div className={cx('mission')}>
                  <div className={cx('content')}>
                     <h2
                        className={classNames(
                           cx('title'),
                           'heading-2',
                           'text-primary',
                           'uppercase'
                        )}
                     >
                        {titles[1]}
                     </h2>
                     <p className={cx('desc')}>{descriptions[1]}</p>
                  </div>
                  <div className={cx('image-wrapper')}>
                     <LazyImage src={images[1]} alt='mission' />
                  </div>
               </div>
            </div>
         </Element>
      </section>
   );
};

MissionVision.propTypes = {
   titles: PropTypes.array.isRequired,
   descriptions: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default MissionVision;
