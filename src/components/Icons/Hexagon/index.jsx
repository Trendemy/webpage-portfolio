import PropTypes from 'prop-types';

const Hexagon = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 49 49'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M8.5744 8.57395L30.4918 2.70119L46.5365 18.7459L40.6638 40.6633L18.7463 46.5361L2.70164 30.4914L8.5744 8.57395Z'
				stroke='currentColor'
				strokeWidth='4'
			/>
		</svg>
	);
};

Hexagon.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Hexagon;
