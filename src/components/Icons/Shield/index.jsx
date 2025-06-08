import PropTypes from 'prop-types';

const Shield = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path d='M10 0L0 3.63636V9.09091C0 14.1364 4.26667 18.8545 10 20C15.7333 18.8545 20 14.1364 20 9.09091V3.63636L10 0Z' />
		</svg>
	);
};

Shield.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Shield;
