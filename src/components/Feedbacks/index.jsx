import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Card from './components/Card';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

/**
 * Feedbacks Component
 *
 * - Displays a **carousel** of user feedback.
 * - Auto-scrolls every **3 seconds** when in view.
 * - Pauses **5 seconds** when user manually selects a feedback.
 * - Uses **react-intersection-observer** to detect visibility.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} [props.data=[]] - List of feedback items.
 * @param {string} props.data[].avatar - User's avatar image URL.
 * @param {string} props.data[].name - User's name.
 * @param {string} props.data[].role - User's role/title.
 * @param {string} props.data[].feedback - User's feedback text.
 */
const Feedbacks = ({ data = [] }) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	// Auto-scrolls the feedback carousel every 3 seconds.
	useEffect(() => {
		if (!inView || isPaused || data.length <= 1) return;

		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [inView, isPaused, data.length]);

	// Handles user clicking on a pagination dot.
	const handlePageClick = (index) => {
		setIsPaused(true);
		setActiveIndex(index);
		setTimeout(() => setIsPaused(false), 5000);
	};

	return (
		Array.isArray(data) &&
		data.length > 0 && (
			<div className={cx('feedbacks')} ref={ref}>
				<div className={cx('content')}>
					{data.map((item, index) => (
						<Card
							key={index}
							style={{
								transform: `translateX(${-activeIndex * 100}%)`
							}}
							avatar={item.avatar}
							name={item.name}
							role={item.role}
							desc={item.feedback}
						/>
					))}
				</div>
				<div className={cx('pagination')}>
					{data.map((_, index) => (
						<span
							key={index}
							onClick={() => handlePageClick(index)}
							className={cx('page', { active: index === activeIndex })}
						></span>
					))}
				</div>
			</div>
		)
	);
};

Feedbacks.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			role: PropTypes.string.isRequired,
			feedback: PropTypes.string.isRequired
		})
	)
};

export default Feedbacks;
