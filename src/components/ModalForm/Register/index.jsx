import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useFormState, useFormSubmit } from '@hooks';
import { SHEET_DB_REGISTER } from '@config/env';
import { schedules } from '@data';
import { Button, Input, Modal, Select } from '@components/UI';
import introduceImg from '@assets/images/register.webp';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Register = ({ open, onClose }) => {
   const { fields, onInputChange, clearFields } = useFormState({
      fullname: '',
      phone: '',
      email: '',
      information: '',
      schedule: ''
   });
   const { loading, handleSubmit } = useFormSubmit(
      fields,
      SHEET_DB_REGISTER,
      'Đang gửi...',
      () => {
         clearFields();
         return 'Đăng ký thành công!';
      },
      'Đăng ký thất bại'
   );

   return (
      <Modal size='xl' open={open} onClose={onClose}>
         <div className={cx('wrapper')}>
            <div className={cx('introduce')}>
               <h3 className={cx('title')}>Bắt đầu ngay!</h3>
               <p className={cx('desc')}>
                  Thành công bắt đầu từ những quyết định nhỏ. Đừng chần chừ, hãy
                  đăng ký ngay hôm nay để mở ra cánh cửa mới cho tương lai của
                  bạn!
               </p>
               <img
                  src={introduceImg}
                  alt='introduce image'
                  className={cx('img')}
               />
            </div>
            <div className={cx('form-input')}>
               <form
                  action=''
                  method='POST'
                  className={cx('form')}
                  onSubmit={handleSubmit}
               >
                  <Input
                     label='Họ và tên'
                     placeholder='VD: Nguyen Van A'
                     name='fullname'
                     value={fields.fullname}
                     onChange={onInputChange}
                     outline
                  />
                  <Input
                     label='Số điện thoại'
                     name='phone'
                     placeholder='VD: 039xxxxxxx'
                     type='tel'
                     value={fields.phone}
                     onChange={onInputChange}
                     outline
                  />
                  <Input
                     outline
                     label='Email'
                     placeholder='VD: example@email.com'
                     name='email'
                     value={fields.email}
                     onChange={onInputChange}
                  />
                  <Input
                     label='Thông tin - nghề nghiệp'
                     placeholder='VD: Kỹ sư phần mềm'
                     name='information'
                     value={fields.information}
                     onChange={onInputChange}
                     outline
                  />
                  <Select
                     label='Chọn lịch học'
                     placeholder='--- Chọn lịch học ---'
                     name='schedule'
                     options={schedules}
                     value={fields.schedule}
                     onChange={onInputChange}
                  />
                  <Button primary type='submit' disabled={loading}>
                     Đăng ký ngay
                  </Button>
               </form>
            </div>
         </div>
      </Modal>
   );
};

Register.propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired
};
export default Register;
