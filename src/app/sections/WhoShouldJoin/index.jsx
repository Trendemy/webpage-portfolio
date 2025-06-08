import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import Object from './components/Object';
import Arrow from './components/Arrow';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const WhoShouldJoin = ({ title, objects, images, animation }) => {
   return (
      <section className='py-5'>
         <Element className='container' name={sections.join.id}>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('box')}>
                  <h2
                     className={classNames(
                        cx('title'),
                        'heading-2 text-primary uppercase'
                     )}
                  >
                     {title}
                  </h2>
                  <div className={cx('list')}>
                     {Array.isArray(objects) &&
                        objects.map((obj, index) => (
                           <Object
                              key={index}
                              image={obj.image}
                              name={obj.name}
                              description={obj.description}
                           />
                        ))}
                  </div>
               </div>
               <div className={cx('box')}>
                  {Array.isArray(images) && (
                     <div className={cx('gallery')}>
                        {images?.[0] && (
                           <div className={cx('frame', 'frame-1')}>
                              <LazyImage
                                 src={images[0]}
                                 alt='Who Should Join'
                                 className={cx('img-1')}
                              />
                           </div>
                        )}
                        {images?.[1] && (
                           <div className={cx('frame')}>
                              <LazyImage
                                 src={images[1]}
                                 alt='Who Should Join'
                                 className={cx('img-2')}
                              />
                           </div>
                        )}
                        <span className={cx('arrow')}>
                           <Arrow />
                        </span>
                     </div>
                  )}
               </div>
            </div>
         </Element>
      </section>
   );
};

WhoShouldJoin.propTypes = {
   title: PropTypes.string,
   objects: PropTypes.arrayOf(
      PropTypes.shape({
         image: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired
      })
   ),
   images: PropTypes.array,
   animation: PropTypes.string
};
export default WhoShouldJoin;
