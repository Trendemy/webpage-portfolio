import PropTypes from 'prop-types';

const Phone = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 21 21'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='currentColor'
		>
			<path d='M21 14.5379L14.8511 13.8262L11.9109 16.7665C8.59864 15.0819 5.90643 12.3897 4.22188 9.07745L7.1738 6.12553L6.46207 0H0.0331802C-0.643545 11.8777 9.1223 21.6435 21 20.9668V14.5379Z' />
		</svg>
	);
};

Phone.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Phone;
