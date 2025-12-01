import PropTypes from 'prop-types';
import { Button, Image, Modal } from '~/components/UI';
import { Fire } from '~/components/Icons';

function BreakthroughRegisterModal({ data, isOpen, onClose }) {
   const { title = '', sub = '', desc = '', images = [], link = '' } = data;
   return (
      <Modal
         open={isOpen}
         onClose={onClose}
         center
         className='relative w-[36rem] max-h-[90vh] max-w-[90vw] flex flex-col bg-white rounded-2xl'
      >
         {/* <div className='h-10 flex justify-end'>
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
            </div> */}
         <div className='flex-1 flex flex-col overflow-hidden xl:px-10 p-5 gap-5'>
            <div>
               <h3 className='heading-3 leading-normal uppercase mb-2'>
                  Đăng ký khóa học{' '}
                  <span className='text-primary whitespace-nowrap'>
                     {title}
                  </span>
               </h3>
               <p className='text-sm font-bold flex items-end gap-1'>
                  <span>{sub}</span>
                  <Fire />
               </p>
               <p className='text-sm mt-px'>
                  {/* Bạn có biết,{' '}
                  <span className='font-bold'>
                     hơn 20 khóa học Phân tích Dữ liệu
                  </span>{' '}
                  của chúng tôi đã khai giảng và giúp hàng nghìn người tìm được
                  việc làm mơ ước? Hãy khám phá ngay để nâng tầm kỹ năng, tăng
                  tốc thu nhập. */}
                  {desc}
               </p>
            </div>
            <div className='flex overflow-hidden'>
               <div className='flex-1 flex aspect-square flex-col overflow-y-auto'>
                  {images?.map((image) => (
                     <Image
                        key={image}
                        src={image}
                        alt={image}
                        className='w-full object-contain'
                     />
                  ))}
               </div>
            </div>
            <div className='flex justify-center items-center gap-8'>
               <Button
                  primary
                  onClick={() => {
                     window.open(link, '_blank');
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
   data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      sub: PropTypes.string,
      desc: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string
   }),
   isOpen: PropTypes.bool,
   onClose: PropTypes.func
};

export default BreakthroughRegisterModal;
