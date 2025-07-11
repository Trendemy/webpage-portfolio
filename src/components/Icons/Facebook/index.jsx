import PropTypes from 'prop-types';

const Facebook = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 11 20'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M7.33333 11.5H9.95238L11 7.5H7.33333V5.5C7.33333 4.47 7.33333 3.5 9.42857 3.5H11V0.14C10.6585 0.0970001 9.36886 0 8.00695 0C5.16267 0 3.14286 1.657 3.14286 4.7V7.5H0V11.5H3.14286V20H7.33333V11.5Z'
				fill='currentColor'
			/>
		</svg>
	);
};

Facebook.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Facebook;
