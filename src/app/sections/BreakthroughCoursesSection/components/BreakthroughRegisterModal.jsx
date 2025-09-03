import PropTypes from 'prop-types';
import { Button, Image, Modal } from '~/components/UI';
import { cn } from '~/utils';
import DA1 from '~/assets/images/DA2025-1.png';
import DA2 from '~/assets/images/DA2025-2.png';
import DA3 from '~/assets/images/DA2025-3.png';
import DA4 from '~/assets/images/DA2025-4.png';
import DA5 from '~/assets/images/DA2025-5.png';
import { Fire } from '~/components/Icons';
import { Link } from 'react-router-dom';

const images = [DA1, DA2, DA3, DA4, DA5];

function BreakthroughRegisterModal({ isOpen, onClose }) {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            center
            className='relative w-[36rem] max-h-[90vh] max-w-[90vw] flex flex-col bg-white rounded-2xl'
        >
            <div className='h-10 flex justify-end'>
                <div className='size-10 flex justify-center items-center'>
                    <button
                        className={cn(
                            'relative size-[24px] border-none rounded-full bg-black cursor-pointer p-3',
                            'after:content after:absolute after:h-[15px] after:w-[2.5px] after:top-1/2 after:left-1/2 after:bg-white after:-translate-1/2 after:rotate-45',
                            'before:content before:absolute before:h-[15px] before:w-[2.5px] before:top-1/2 before:left-1/2 before:bg-white before:-translate-1/2 before:-rotate-45'
                        )}
                        onClick={onClose}
                    />
                </div>
            </div>
            <div className='flex-1 flex flex-col xl:px-10 px-5 overflow-hidden'>
                <h3 className='heading-3 leading-normal uppercase'>
                    Đăng ký khóa học{' '}
                    <span className='text-primary whitespace-nowrap'>
                        Data analysis
                    </span>
                </h3>
                <p className='text-sm font-bold flex items-end gap-1'>
                    <span>Đừng bỏ lỡ cơ hội bứt phá sự nghiệp</span>
                    <Fire />
                </p>
                <p className='text-sm mt-1'>
                    Bạn có biết,{' '}
                    <span className='font-bold'>
                        hơn 20 khóa học Phân tích Dữ liệu
                    </span>{' '}
                    của chúng tôi đã khai giảng và giúp hàng nghìn người tìm
                    được việc làm mơ ước? Hãy khám phá ngay để nâng tầm kỹ năng,
                    tăng tốc thu nhập.
                    <br />
                    <span className='text-base font-bold'>
                        Đăng ký tại:
                    </span>{' '}
                    <Link
                        to='/'
                        className='text-blue-400 hover:underline underline-offset-2'
                    >
                        www.trendemy.com.vn
                    </Link>
                </p>
                <div className='flex overflow-hidden my-3'>
                    <div className='flex-1 flex aspect-square flex-col overflow-y-auto'>
                        {images.map((image) => (
                            <Image
                                key={image}
                                src={image}
                                alt={image}
                                className='w-full object-contain'
                            />
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8 mb-5'>
                    <Button
                        primary
                        onClick={() => {
                            window.open(
                                'https://docs.google.com/forms/d/1yYMsVE2tL0SbwHeedK59oyNhBl0g7UEBv83AuU8qs40/viewform?fbclid=IwY2xjawMj9clleHRuA2FlbQIxMABicmlkETFTbkU5Nmk2YUZCQ0VPcUh6AR6NdmtpeIkZ4WtdoWlcb_ny5-x0cg0psipjflUMalKRvUTepsklGkZxfHS_pg_aem_hG0XVWRVRgZpX9Sww3snMA&edit_requested=true',
                                '_blank'
                            );
                        }}
                    >
                        Đăng ký ngay
                    </Button>
                    <Button outline primary onClick={onClose}>
                        Hủy
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

BreakthroughRegisterModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

export default BreakthroughRegisterModal;
