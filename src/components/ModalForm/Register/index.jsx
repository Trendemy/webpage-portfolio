import PropTypes from 'prop-types';
import { useFormState, useFormSubmit } from '~/hooks';
import { SHEET_DB_REGISTER } from '~/config/env';
import { schedules } from '~/data';
import { Button, Input, Label, Modal, Select } from '~/components/UI';
import introduceImg from '~/assets/images/register.webp';

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
        <Modal open={open} onClose={onClose}>
            <div className='flex gap-10'>
                <div className='flex-1 hidden xl:flex flex-col'>
                    <h3 className='relative w-fit text-3xl text-primary font-bold mb-5 before:content before:absolute before:w-4/5 before:h-1 before:-bottom-1 before:translate-y-full before:bg-secondary'>
                        Bắt đầu ngay!
                    </h3>
                    <p className='text-base text-justify italic'>
                        Thành công bắt đầu từ những quyết định nhỏ. Đừng chần
                        chừ, hãy đăng ký ngay hôm nay để mở ra cánh cửa mới cho
                        tương lai của bạn!
                    </p>
                    <img src={introduceImg} alt='introduce image' />
                </div>
                <div className='flex-1'>
                    <form
                        action=''
                        method='POST'
                        className='flex flex-col gap-7'
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <Label
                                htmlFor='fullname'
                                className='text-base font-medium text-primary'
                            >
                                Họ và tên
                            </Label>
                            <Input
                                id='fullname'
                                placeholder='VD: Nguyen Van A'
                                name='fullname'
                                value={fields.fullname}
                                onChange={onInputChange}
                                outline
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor='phone'
                                className='text-base font-medium text-primary'
                            >
                                Số điện thoại
                            </Label>
                            <Input
                                id='phone'
                                name='phone'
                                placeholder='VD: 039xxxxxxx'
                                type='tel'
                                value={fields.phone}
                                onChange={onInputChange}
                                outline
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor='email'
                                className='text-base font-medium text-primary'
                            >
                                Email
                            </Label>
                            <Input
                                id='email'
                                placeholder='VD: example@email.com'
                                name='email'
                                value={fields.email}
                                onChange={onInputChange}
                                outline
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor='information'
                                className='text-base font-medium text-primary'
                            >
                                Thông tin - nghề nghiệp
                            </Label>
                            <Input
                                id='information'
                                placeholder='VD: Kỹ sư phần mềm'
                                name='information'
                                value={fields.information}
                                onChange={onInputChange}
                                outline
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor='schedule'
                                className='text-base font-medium text-primary'
                            >
                                Chọn lịch học
                            </Label>
                            <Select
                                id='schedule'
                                placeholder='--- Chọn lịch học ---'
                                name='schedule'
                                options={schedules}
                                value={fields.schedule}
                                onChange={onInputChange}
                            />
                        </div>
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
