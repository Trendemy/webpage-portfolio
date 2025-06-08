import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Portal from '@components/Portal';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ size = 's', open = false, onClose, children }) => {
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
		if (e.target.classList.contains(cx('overlay'))) {
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
				className={cx('overlay', { visible: open })}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<div
					className={cx('modal', { open }, `modal-${size}`)}
					onClick={(e) => e.stopPropagation()}
				>
					<button className={cx('btn-close')} onClick={onClose}></button>
					<div className={cx('modal-body')}>{children}</div>
				</div>
			</div>
		</Portal>
	);
};

Modal.propTypes = {
	size: PropTypes.oneOf(['s', 'l', 'xl']),
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
};

export default Modal;
