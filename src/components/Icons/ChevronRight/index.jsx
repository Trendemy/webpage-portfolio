import PropTypes from 'prop-types';

const ChevronRight = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width={width}
			height={height}
			fill='none'
			stroke='currentColor'
			strokeWidth={strokeWidth}
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m8.25 4.5 7.5 7.5-7.5 7.5'
			/>
		</svg>
	);
};

ChevronRight.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChevronRight;
