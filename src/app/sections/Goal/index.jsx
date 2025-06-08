import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { CheckCircle } from '@components/Icons';
import { LazyImage } from '@components/UI';
import BrushStroke from './components/BrushStroke';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Goal = ({
   title = '',
   subtitle = '',
   data = [],
   images = [],
   animation
}) => {
   return (
      <section className='py-5'>
         <Element className='container' name={sections.goal.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('content')}>
                  <div className={cx('heading')}>
                     <h2 className={classNames(cx('title'), 'heading-2')}>
                        {title}
                     </h2>
                     <p className={classNames(cx('desc'), 'subtitle')}>
                        {subtitle}
                     </p>
                  </div>
                  <ul className={cx('goals')}>
                     {data.map((text, index) => (
                        <li key={index} className={cx('goals-item')}>
                           <span className={cx('goals-item__icon')}>
                              <CheckCircle />
                           </span>
                           <span className={cx('goals-item__text')}>
                              {text}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
               {Array.isArray(images) && images.length > 0 && (
                  <div className={cx('gallery')}>
                     {images.map((image, index) => (
                        <LazyImage
                           key={index}
                           src={image}
                           alt={'Goal' + (index + 1)}
                        />
                     ))}
                     <span className={cx('brush-stroke')}>
                        <BrushStroke />
                     </span>
                  </div>
               )}
            </div>
         </Element>
      </section>
   );
};

Goal.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string,
   data: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default Goal;
