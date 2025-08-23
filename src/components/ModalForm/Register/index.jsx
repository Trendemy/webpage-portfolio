import PropTypes from 'prop-types';
import { useFormState, useFormSubmit } from '~/hooks';
import { SHEET_DB_REGISTER } from '~/config/env';
import { schedules } from '~/data';
import { Button, Image, Input, Label, Modal, Select } from '~/components/UI';
import introduceImg from '~/assets/images/register.webp';
import { cn } from '~/utils';

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
        <Modal
            open={open}
            onClose={onClose}
            className={cn(
                'w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/5',
                'h-auto max-h-96 md:max-h-screen/2 lg:max-h-2/3',
                'relative mx-auto flex flex-col bg-white rounded-md select-none -translate-y-full transition-transform duration-300 ease mt-8',
                {
                    'shadow-[0px_5px_12px_rgba(0,0,0,0.12)] translate-y-0': open
                }
            )}
        >
            <button
                className={cn(
                    'absolute top-0 right-0 p-4 border-none rounded-full bg-primary translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease cursor-pointer',
                    'hover:bg-secondary-2',
                    'after:content after:absolute after:h-[15px] after:w-[2.5px] after:top-1/2 after:left-1/2 after:bg-white after:-translate-1/2 after:rotate-45',
                    'before:content before:absolute before:h-[15px] before:w-[2.5px] before:top-1/2 before:left-1/2 before:bg-white before:-translate-1/2 before:-rotate-45'
                )}
                onClick={onClose}
            />
            <div className='flex-1 p-5 overflow-y-auto'>
                <div className='flex gap-10'>
                    <div className='flex-1 hidden xl:flex flex-col'>
                        <h3 className='relative w-fit text-3xl text-primary font-bold mb-5 before:content before:absolute before:w-4/5 before:h-1 before:-bottom-1 before:translate-y-full before:bg-secondary'>
                            Bắt đầu ngay!
                        </h3>
                        <p className='text-base text-justify italic'>
                            Thành công bắt đầu từ những quyết định nhỏ. Đừng
                            chần chừ, hãy đăng ký ngay hôm nay để mở ra cánh cửa
                            mới cho tương lai của bạn!
                        </p>
                        <Image src={introduceImg} alt='introduce image' />
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
            </div>
        </Modal>
    );
};

Register.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
export default Register;
