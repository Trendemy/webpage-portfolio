import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Portal from '~/components/Portal';
import { cn } from '~/utils';

const Modal = ({ open = false, onClose, children }) => {
    const [isOverlayClick, setOverlayClick] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            setOverlayClick(true);
        } else {
            setOverlayClick(false);
        }
    };

    const handleMouseUp = (e) => {
        if (isOverlayClick && e.button === 0) {
            onClose();
        }
    };

    return (
        <Portal>
            <div
                className={cn(
                    'fixed w-full h-full top-0 left-0 bg-black/20 opacity-0 invisible transition-all duration-300 ease z-50',
                    { 'opacity-100 visible': open }
                )}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div
                    className={cn(
                        'w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-2/5',
                        'h-auto max-h-96 md:max-h-screen/2 lg:max-h-2/3',
                        'relative mx-auto flex flex-col bg-white rounded-md select-none -translate-y-full transition-transform duration-300 ease mt-8',
                        {
                            'shadow-[0px_5px_12px_rgba(0,0,0,0.12)] translate-y-0':
                                open
                        }
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className={cn(
                            'absolute top-0 right-0 p-4 border-none rounded-full bg-primary translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease cursor-pointer',
                            'hover:bg-secondary-2',
                            'after:content after:absolute after:h-[15px] after:w-[2.5px] after:top-1/2 after:left-1/2 after:bg-white after:-translate-1/2 after:rotate-45',
                            'before:content before:absolute before:h-[15px] before:w-[2.5px] before:top-1/2 before:left-1/2 before:bg-white before:-translate-1/2 before:-rotate-45'
                        )}
                        onClick={onClose}
                    ></button>
                    <div className='flex-1 p-5 overflow-y-auto'>{children}</div>
                </div>
            </div>
        </Portal>
    );
};

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Modal;
