import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import { CheckCircle } from '@components/Icons';
import BrushStroke from './components/BrushStroke';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Benefits = ({ title, subtitle, data = [], images = [], animation }) => {
   return (
      <section className='py-5'>
         <Element className='container' name={sections.benefits.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('box')}>
                  {Array.isArray(images) && (
                     <div className={cx('gallery')}>
                        <span className={cx('brush-stroke')}>
                           <BrushStroke />
                        </span>

                        {images?.[0] && (
                           <LazyImage
                              className={cx('img-1')}
                              src={images[0]}
                              alt='image benefits 1'
                           />
                        )}
                        <div className={cx('frame')}>
                           {images?.[1] && (
                              <LazyImage
                                 className={cx('img-2')}
                                 src={images[1]}
                                 alt='image benefits 2'
                              />
                           )}
                           {images?.[2] && (
                              <LazyImage
                                 className={cx('img-3')}
                                 src={images[2]}
                                 alt='image benefits 3'
                              />
                           )}
                        </div>
                     </div>
                  )}
               </div>
               <div className={cx('box')}>
                  <h2
                     className={classNames(
                        cx('text-heading'),
                        'heading-2 text-primary uppercase'
                     )}
                  >
                     {title}
                  </h2>
                  <p className={classNames(cx('subtitle'), 'subtitle')}>
                     {subtitle}
                  </p>
                  <ul className={cx('content')}>
                     {data.map((text, index) => (
                        <li key={index}>
                           <span className={cx('icon')}>
                              <CheckCircle />
                           </span>
                           <span className={cx('label')}>{text}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Element>
      </section>
   );
};

Benefits.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string,
   data: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default Benefits;
