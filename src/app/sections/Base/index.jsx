import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import HighlightedUnderline from '../components/HighlightedUnderline';
import { LazyImage } from '@components/UI';
import { ArrowLine, Signal } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Base = ({
   title = '',
   highlightTitle = '',
   description = '',
   images = [],
   animation
}) => {
   return (
      <section className='relative overflow-hidden py-5'>
         <div className='circle-glow' />
         <Element className='container' name={sections.base.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('signal')}>
                  <Signal />
               </div>
               <div className={cx('images')}>
                  <div className={cx('image-right')}>
                     <LazyImage
                        src={images[0]}
                        alt=''
                        className={cx('image-1')}
                     />
                  </div>
                  <div className={cx('image-left')}>
                     <LazyImage
                        src={images[1]}
                        alt=''
                        className={cx('image-2')}
                     />
                     <span className={cx('arrow-line')}>
                        <ArrowLine />
                     </span>
                  </div>
               </div>
               <div className={cx('content')}>
                  <HighlightedUnderline
                     as='h2'
                     className={classNames(cx('title'), 'heading-2')}
                     title={title}
                     highlight={highlightTitle}
                  />

                  <p className='text-paragraph'>{description}</p>
               </div>
            </div>
         </Element>
      </section>
   );
};

Base.propTypes = {
   title: PropTypes.string.isRequired,
   highlightTitle: PropTypes.string,
   description: PropTypes.string.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default Base;
