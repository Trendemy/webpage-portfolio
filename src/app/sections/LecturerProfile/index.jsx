import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import { ZigzagArrow } from '@components/Icons';
import BrushStroke from './components/BrushStroke';
import HighlightedUnderline from '../components/HighlightedUnderline';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const LecturerProfile = ({ avatar, title, description, animation }) => {
   return (
      <section className='relative overflow-hidden py-5'>
         <div className='circle-glow' />
         <Element className='container' name={sections.introduction.id}>
            <div className={cx('row')} data-aos={animation}>
               <div className={cx('col', 'col-1')}>
                  <div className={cx('gallery')}>
                     <span className={cx('deco', 'brush-stroke')}>
                        <BrushStroke />
                     </span>
                     {avatar && <LazyImage src={avatar} alt='Lecturer' />}
                  </div>
               </div>
               <div className={cx('col', 'col-2')}>
                  <span className={cx('deco', 'zigzag')}>
                     <ZigzagArrow />
                  </span>
                  <HighlightedUnderline
                     as='h2'
                     className={classNames(cx('title'), 'heading-2')}
                     title={title}
                     highlight={title}
                  />
                  <p className='text-paragraph'>{description}</p>
               </div>
            </div>
         </Element>
      </section>
   );
};
LecturerProfile.propTypes = {
   avatar: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   animation: PropTypes.string
};
export default LecturerProfile;
