import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Button, LazyImage } from '@components/UI';
import { Register } from '@components/ModalForm';
import HighlightedUnderline from '../components/HighlightedUnderline';
import Tag from './components/Tag';
import { Course, Flower, Hexagon, Octagram, Student } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Banner = ({
   title = '',
   highlightTitle = '',
   description = '',
   image = ''
}) => {
   const [openForm, setOpenForm] = useState(false);

   return (
      <section className={cx('section')}>
         <span className={cx('deco', 'flower')}>
            <Flower />
         </span>
         <span className={cx('deco', 'octagram')}>
            <Octagram />
         </span>
         <span className={cx('deco', 'hexagon')}>
            <Hexagon />
         </span>
         <div className='container'>
            <div className={cx('wrapper')}>
               <div className={cx('content')}>
                  <HighlightedUnderline
                     as='h1'
                     className={classNames('heading-1', cx('title'))}
                     title={title}
                     highlight={highlightTitle}
                  />
                  <p className={classNames('text-paragraph', cx('desc'))}>
                     {description}
                  </p>
                  <div className={cx('actions')}>
                     <Button
                        primary
                        className={cx('btn-start')}
                        onClick={() => setOpenForm(true)}
                     >
                        Bắt đầu ngay
                     </Button>
                     <Register
                        open={openForm}
                        onClose={() => setOpenForm(false)}
                     />
                  </div>
               </div>
               <div className={cx('gallery')}>
                  <Tag
                     className={cx('tag-1')}
                     icon={<Course />}
                     name='Khóa học'
                     number='100+'
                  />
                  <LazyImage src={image} alt='girl' />
                  <Tag
                     className={cx('tag-2')}
                     icon={<Student />}
                     name='Học viên'
                     number='1000+'
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

Banner.propTypes = {
   title: PropTypes.string.isRequired,
   highlightTitle: PropTypes.string,
   description: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired
};

export default Banner;
