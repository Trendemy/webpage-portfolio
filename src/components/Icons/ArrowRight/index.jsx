import PropTypes from 'prop-types';

const ArrowRight = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
			stroke='currentColor'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
			/>
		</svg>
	);
};

ArrowRight.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ArrowRight;
