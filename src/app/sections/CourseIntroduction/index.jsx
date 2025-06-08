import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import HighlightedUnderline from '../components/HighlightedUnderline';
import { LazyImage } from '@components/UI';
import { ZigzagArrow } from '@components/Icons';
import BrushStroke from './components/BrushStroke';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CourseIntroduction = ({
   title = '',
   highlightTitle = '',
   description = '',
   images = [],
   animation
}) => {
   return (
      <section className='relative py-5'>
         <div className='circle-glow' />
         <Element className='container' name={sections.introduction.id}>
            <div data-aos={animation} className={cx('wrapper')}>
               {Array.isArray(images) && images.length > 0 && (
                  <div className={cx('gallery')}>
                     <span className={cx('brush-stroke')}>
                        <BrushStroke />
                     </span>
                     {images?.[0] && (
                        <LazyImage src={images[0]} className={cx('img-1')} />
                     )}
                     {images?.[1] && (
                        <LazyImage src={images[1]} className={cx('img-2')} />
                     )}
                  </div>
               )}

               <div className={cx('content')}>
                  <span className={cx('deco-zigzag')}>
                     <ZigzagArrow />
                  </span>
                  <HighlightedUnderline
                     title={title}
                     highlight={highlightTitle}
                     className={classNames(cx('title'), 'heading-2')}
                     variant={cx('variant')}
                     as='h3'
                  />
                  <p className={classNames(cx('desc'), 'text-paragraph')}>
                     {description}
                  </p>
               </div>
            </div>
         </Element>
      </section>
   );
};

CourseIntroduction.propTypes = {
   title: PropTypes.string.isRequired,
   highlightTitle: PropTypes.string,
   description: PropTypes.string.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default CourseIntroduction;
