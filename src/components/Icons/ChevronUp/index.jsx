import PropTypes from 'prop-types';

const ChevronUp = ({ className, strokeWidth, width, height }) => {
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
				d='m4.5 15.75 7.5-7.5 7.5 7.5'
			/>
		</svg>
	);
};

ChevronUp.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChevronUp;
