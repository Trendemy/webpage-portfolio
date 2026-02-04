import { Link } from 'react-router';
import DMCABadge from '~/components/DMCABadge';
import {
  LogoFooter,
  FacebookCircle,
  Mail,
  Phone,
  Tiktok,
  Youtube
} from '~/components/Icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-footer py-10'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row justify-between xl:gap-0 gap-10 mb-10'>
          <Link className='flex justify-center items-center'>
            <LogoFooter className='w-56 xl:w-96 shrink-0' />
          </Link>
          <div className='mx-auto'>
            <h3 className='text-2xl uppercase font-medium text-neutral-100 mb-5'>
              Về chúng tôi
            </h3>
            <ul className='flex flex-col text-neutral-50 xl:text-left text-center gap-2'>
              <li>Giới thiệu</li>
              <li>Điều khoản</li>
              <li>Bảo mật</li>
            </ul>
          </div>
          <div className='mx-auto'>
            <h3 className='text-2xl uppercase font-medium text-neutral-100 mb-5'>
              Khóa học
            </h3>
            <ul className='flex flex-col text-neutral-50 xl:text-left text-center gap-2'>
              <li>
                <Link to='khoa-hoc/data-analyst'>Data Engineer</Link>
              </li>
              <li>
                <Link to='khoa-hoc/data-analyst'>Data Analyst</Link>
              </li>
              <li>
                <Link to='khoa-hoc/english-for-it'>English for IT</Link>
              </li>
              <li>
                <Link to='khoa-hoc/data-analyst'>AI Agent</Link>
              </li>
            </ul>
          </div>
          <div className='mx-auto'>
            <h3 className='text-2xl uppercase font-medium text-neutral-100 text-center xl:text-left mb-5'>
              Liên Hệ
            </h3>
            <ul className='flex flex-col text-neutral-50 items-center xl:items-start gap-2'>
              <li className='flex items-center text-neutral-50 gap-2'>
                <div className='flex size-4'>
                  <Phone className='shrink-0' />
                </div>
                <span>078 7313 168</span>
              </li>
              <li className='flex items-center text-neutral-50 gap-2'>
                <div className='flex size-4'>
                  <Mail className='shrink-0' />
                </div>
                <span>info.trendemy.edu.vn@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row xl:gap-0 gap-10'>
          <div className='w-fit flex border-t border-b border-white py-6 mx-auto'>
            <h3 className='text-lg xl:text-2xl font-medium text-neutral-100 uppercase xl:mr-10 mr-5'>
              Follow Trendemy
            </h3>
            <ul className='flex xl:gap-10 gap-5'>
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
          <div className='flex-1 flex justify-center items-center'>
            <p className='text-xs font-normal text-white'>
              Copyright © {year} TRENDY ACADEMY COMPANY LIMITED. All rights
              reserved. Powered by TRENDEMY TEAM
            </p>
          </div>
        </div>
        <div className='flex justify-center xl:justify-end mt-10'>
          <DMCABadge />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
