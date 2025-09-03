import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Portal from '~/components/Portal';
import { cn } from '~/utils';

const Modal = ({
    open = false,
    center,
    className,
    onClick,
    onClose,
    children
}) => {
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

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

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
                    'fixed inset-0 bg-black/20 opacity-0 invisible transition-all duration-300 ease z-50',
                    { 'opacity-100 visible': open },
                    { 'flex justify-center items-center': center }
                )}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                <div
                    className={className}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick?.(e);
                    }}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    center: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Modal;
