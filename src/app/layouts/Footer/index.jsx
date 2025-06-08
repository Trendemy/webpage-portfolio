import { Link } from 'react-router';
import classNames from 'classnames/bind';
import {
   LogoFooter,
   FacebookCircle,
   Mail,
   Phone,
   Tiktok,
   Youtube
} from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
   return (
      <footer className={cx('footer')}>
         <div className='container'>
            <div className={cx('row')}>
               <div className={cx('col')}>
                  <Link className='flex items-stretch'>
                     <LogoFooter className='w-100' />
                  </Link>
               </div>
               <div className={cx('col')}>
                  <h3 className={cx('title')}>Về chúng tôi</h3>
                  <ul className={cx('list')}>
                     <li>Giới thiệu</li>
                     <li>Điều khoản</li>
                     <li>Bảo mật</li>
                  </ul>
               </div>
               <div className={cx('col')}>
                  <h3 className={cx('title')}>Khóa học</h3>
                  <ul className={cx('list')}>
                     <li>
                        <Link to='khoa-hoc/data-analyst'>Data Engineer</Link>
                     </li>
                     <li>
                        <Link to='khoa-hoc/data-analyst'>Data Analyst</Link>
                     </li>
                     <li>
                        <Link to='khoa-hoc/data-analyst'>Business Analyst</Link>
                     </li>
                     <li>
                        <Link to='khoa-hoc/data-analyst'>AI Agent</Link>
                     </li>
                  </ul>
               </div>
               <div className={cx('col')}>
                  <h3 className={cx('title')}>Liên Hệ</h3>
                  <ul className={cx('list')}>
                     <li className='flex items-center'>
                        <Phone className={cx('icon')} />
                        <span className={cx('label')}>078 7313 168</span>
                     </li>
                     <li className='flex items-center'>
                        <Mail className={cx('icon')} />
                        <span className={cx('label')}>
                           info.trendemy.edu.vn@gmail.com
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={cx('row', 'row-2')}>
               <div className={cx('follow')}>
                  <span className={classNames(cx('title', 'title-2'))}>
                     Follow Trendemy
                  </span>
                  <ul className='flex gap-3'>
                     <li>
                        <a
                           href='https://www.facebook.com/datainuse'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <FacebookCircle />
                        </a>
                     </li>
                     <li>
                        <a
                           href='https://www.tiktok.com/@diuoffcial'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <Tiktok />
                        </a>
                     </li>
                     <li>
                        <a
                           href='https://www.youtube.com/@trendemy3619'
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           <Youtube />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className={cx('copyright')}>
                  <p className={cx('copyright-text')}>
                     Copyright © 2025 TRENDY ACADEMY COMPANY LIMITED. All rights
                     reserved. Powered by TRENDEMY TEAM
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
