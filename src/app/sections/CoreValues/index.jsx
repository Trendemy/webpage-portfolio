import { LazyImage } from '@components/UI';
import { sections } from '@data';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import Content from './components/Content';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const CoreValues = ({ title = '', values = [], images = [], animation }) => {
   return (
      <section className='overflow-hidden py-5'>
         <Element name={sections.values.id} className='container'>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('heading')}>
                  <div className={cx('heading-hidden')}></div>
                  <div className={cx('heading-main')}>
                     <h2
                        className={classNames(
                           cx('title'),
                           'heading-2',
                           'text-primary',
                           'uppercase'
                        )}
                     >
                        {title}
                     </h2>
                  </div>
               </div>
               <div className={cx('content')}>
                  <div className={cx('images')}>
                     <div className={cx('images-wrapper-left')}>
                        <LazyImage
                           src={images[0]}
                           alt='image-core-1'
                           className={cx('image-1')}
                        />
                        <LazyImage
                           src={images[1]}
                           alt='image-core-2'
                           className={cx('image-2')}
                        />
                     </div>
                     <div className={cx('images-wrapper-right')}>
                        <LazyImage
                           src={images[2]}
                           alt='image-core-3'
                           className={cx('image-3')}
                        />
                     </div>
                  </div>

                  <div className={cx('list')}>
                     {values.map((content) => (
                        <Content
                           key={content.id}
                           icon={content.icon}
                           title={content.title}
                           desc={content.desc}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </Element>
      </section>
   );
};

CoreValues.propTypes = {
   title: PropTypes.string.isRequired,
   values: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default CoreValues;
