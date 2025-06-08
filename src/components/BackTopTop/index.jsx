import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { ChevronUp } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

/**
 * @component
 * BackToTop component that displays a button to scroll to the top of the page.
 * @description
 * - The button appears when the user scrolls down **300px**.
 * - The page automatically scrolls to the top when the route changes.
 * - Provides a smooth scrolling effect when clicked.
 */
const BackTopTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { pathname } = useLocation();

	// Toggle visibility of the button based on scroll position.
	const toggleVisibility = useCallback(
		() => setIsVisible(window.scrollY > 300),
		[]
	);

	// Scrolls to the top when the route changes.
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 50);
	}, [pathname]);

	// Listens for scroll events to determine when to show the button.
	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, [toggleVisibility]);

	// Scrolls smoothly to the top of the page.
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<button
			type='button'
			className={cx('back-to-top', { visible: isVisible })}
			onClick={scrollToTop}
		>
			<ChevronUp />
		</button>
	);
};

export default BackTopTop;
