import { Bookmark, Star, Student } from '@components/Icons';
import { LazyImage } from '@components/UI';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Card = ({
   to,
   thumbnail,
   avatar,
   author,
   lesson,
   number,
   student,
   star,
   className
}) => {
   const navigate = useNavigate();
   return (
      <div
         className={classNames(cx('card'), className)}
         onClick={() => navigate(to)}
      >
         <div className={cx('thumbnail')}>
            <LazyImage src={thumbnail} alt={lesson} />
         </div>
         <div className={cx('content')}>
            <div className={cx('author')}>
               <LazyImage
                  src={avatar}
                  alt={author}
                  className={cx('author-img')}
               />
               <p className={cx('author-name')}>{author}</p>
            </div>
            <h3 className={cx('lesson-name')}>{lesson}</h3>
         </div>
         <div className={cx('separate')}></div>
         <div className={cx('details')}>
            <div className={cx('info')}>
               <span className={cx('icon')}>
                  <Bookmark />
               </span>
               <span>{number}</span>
               <span>Bài giảng</span>
            </div>
            <div className={cx('info')}>
               <span className={cx('icon')}>
                  <Student />
               </span>
               <span>{student}</span>
               <span>Học viên</span>
            </div>
            <div className={cx('info')}>
               <span className={cx('icon')}>
                  <Star />
               </span>
               <span>{star.toFixed(1)}</span>
            </div>
         </div>
      </div>
   );
};

Card.propTypes = {
   to: PropTypes.string,
   thumbnail: PropTypes.string,
   avatar: PropTypes.string,
   author: PropTypes.string,
   lesson: PropTypes.string,
   number: PropTypes.number,
   student: PropTypes.number,
   star: PropTypes.number,
   className: PropTypes.string
};
export default Card;
