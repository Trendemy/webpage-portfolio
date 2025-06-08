import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { LazyImage } from '@components/UI';
import BrushStroke from './components/BrushStroke';
import HighlightedUnderline from '../components/HighlightedUnderline';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const BannerLecturer = ({ avatar, name, description }) => {
   return (
      <section className={cx('section')}>
         <div className='container'>
            <div className={cx('row')}>
               <div className={classNames(cx('col', 'col-1'))}>
                  <h1 className={'heading-1'}>Giảng viên</h1>
                  <HighlightedUnderline
                     as='h1'
                     className={classNames(cx('heading'), 'heading-1')}
                     title={name}
                     highlight={name}
                  />
                  <p
                     className={classNames(cx('description'), 'text-paragraph')}
                  >
                     {description}
                  </p>
               </div>
               {avatar && (
                  <div className={classNames(cx('col', 'col-2'))}>
                     <span className={cx('brush-stroke')}>
                        <BrushStroke />
                     </span>
                     <LazyImage
                        src={avatar}
                        alt='Giảng viên'
                        className='w-100'
                     />
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

BannerLecturer.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
};
export default BannerLecturer;
