import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Register } from '@components/ModalForm';
import HighlightedUnderline from '../components/HighlightedUnderline';
import { Button, LazyImage } from '@components/UI';
import { Hexagon, Octagram } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CourseHero = ({
   title = '',
   highlightTitle = '',
   description = '',
   images = []
}) => {
   const [openForm, setOpenForm] = useState(false);

   return (
      <section className={cx('section')}>
         <div className='container'>
            <div className={cx('wrapper')}>
               <span className={cx('deco', 'deco-hexagon')}>
                  <Hexagon />
               </span>
               <span className={cx('deco', 'deco-octagram')}>
                  <Octagram />
               </span>
               <div className={cx('intro')}>
                  <HighlightedUnderline
                     title={title}
                     highlight={highlightTitle}
                     className={classNames(cx('title'), 'heading-1')}
                     variant={cx('variant')}
                     as='h1'
                  />

                  <p className={classNames(cx('desc'), 'text-paragraph')}>
                     {description}
                  </p>
                  <div className={cx('actions')}>
                     <Button primary onClick={() => setOpenForm(true)}>
                        Bắt đầu ngay
                     </Button>
                     <Register
                        open={openForm}
                        onClose={() => setOpenForm(false)}
                     />
                  </div>
               </div>
               {Array.isArray(images) && images.length > 0 && (
                  <div className={cx('gallery')}>
                     <LazyImage src={images[0]} className={cx('img-main')} />
                     {images?.[1] && (
                        <div className={cx('frame', 'frame-img')}>
                           <LazyImage src={images[1]} />
                        </div>
                     )}

                     {images?.[2] && (
                        <div
                           className={cx(
                              'frame',
                              'frame-bubble',
                              'frame-bubble__1'
                           )}
                        >
                           <LazyImage src={images[2]} />
                        </div>
                     )}
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

CourseHero.propTypes = {
   title: PropTypes.string.isRequired,
   highlightTitle: PropTypes.string,
   description: PropTypes.string.isRequired,
   images: PropTypes.array.isRequired
};
export default CourseHero;
