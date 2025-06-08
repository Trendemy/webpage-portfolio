import PropTypes from 'prop-types';

const Octagram = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 53 54'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M33.8449 26.0473C44.766 29.3498 52.5412 32.6778 52.1719 34.0562C51.8025 35.4346 43.405 34.4292 32.2958 31.8287C37.6831 41.8862 40.8278 49.7372 39.5919 50.4508C38.356 51.1643 33.1291 44.5155 27.1127 34.8212C23.8102 45.7422 20.4822 53.5174 19.1038 53.1481C17.7254 52.7788 18.7308 44.3812 21.3313 33.2721C11.2738 38.6594 3.42258 41.804 2.70921 40.5681C1.99565 39.3322 8.64454 34.1053 18.3388 28.0889C7.41779 24.7865 -0.357452 21.4584 0.0118853 20.08C0.381223 18.7016 8.77881 19.707 19.8879 22.3076C14.5006 12.2501 11.356 4.39881 12.5919 3.68543C13.8278 2.97188 19.0549 9.62082 25.0711 19.3151C28.3735 8.39402 31.7016 0.618777 33.08 0.988115C34.4584 1.35745 33.453 9.75504 30.8524 20.8642C40.9099 15.4769 48.761 12.3322 49.4746 13.5681C50.1881 14.804 43.5392 20.0311 33.8449 26.0473Z'
				fill='currentColor'
			/>
		</svg>
	);
};

Octagram.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Octagram;
