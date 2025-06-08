import { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useFormState, useFormSubmit } from '@hooks';
import { SHEET_DB_CONTACT } from '@config/env';
import { sections } from '@data';
import { Button, Input, LazyImage, Textarea } from '@components/UI';
import { Mail, Phone, User } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Contact = ({ title = '', image, animation }) => {
   const contentRef = useRef(null);
   const imagesRef = useRef(null);
   const { fields, onInputChange, clearFields } = useFormState({
      fullname: '',
      email: '',
      phone: '',
      content: ''
   });
   const { loading, handleSubmit } = useFormSubmit(
      fields,
      SHEET_DB_CONTACT,
      'Đang gửi...',
      () => {
         clearFields();
         return 'Đã gửi thành công.';
      },
      'Gửi thất bại.'
   );

   useEffect(() => {
      const adjustHeight = () => {
         if (contentRef.current && imagesRef.current) {
            imagesRef.current.style.height = `${contentRef.current.offsetHeight}px`;
         }
      };
      adjustHeight();
      window.addEventListener('resize', adjustHeight);
      return () => window.removeEventListener('resize', adjustHeight);
   }, []);

   return (
      <section className='py-5'>
         <Element name={sections.contact.id} className='container'>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('images')} ref={imagesRef}>
                  <LazyImage
                     src={image}
                     className={cx('image')}
                     alt='contact img'
                  />
               </div>
               <div className={cx('content')} ref={contentRef}>
                  <h2 className='heading-2 text-primary uppercase'>{title}</h2>
                  <form
                     className={cx('form')}
                     method='POST'
                     onSubmit={handleSubmit}
                  >
                     <Input
                        placeholder='Họ và tên'
                        icon={User}
                        name='fullname'
                        value={fields.fullname}
                        onChange={onInputChange}
                     />
                     <Input
                        placeholder='Email'
                        name='email'
                        icon={Mail}
                        value={fields.email}
                        onChange={onInputChange}
                     />
                     <Input
                        type='tel'
                        placeholder='Số điện thoại'
                        name='phone'
                        icon={Phone}
                        value={fields.phone}
                        onChange={onInputChange}
                     />
                     <Textarea
                        placeholder='Bạn cần tư vấn thêm về Trendemy, vui lòng để lại tin nhắn tại đây...'
                        rows={7}
                        name='content'
                        value={fields.content}
                        onChange={onInputChange}
                     />
                     <div className={cx('action')}>
                        <Button type='submit' primary disabled={loading}>
                           Liên hệ tư vấn
                        </Button>
                     </div>
                  </form>
               </div>
            </div>
         </Element>
      </section>
   );
};

Contact.propTypes = {
   title: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   animation: PropTypes.string
};
export default Contact;
