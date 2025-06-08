import PropTypes from 'prop-types';

const In = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 17 17'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M2.04 4.0834C3.17333 4.0834 4.08 3.1618 4.08 2.0417C4.08 0.921601 3.15917 0 2.04 0C0.920833 0 0 0.921601 0 2.0417C0 3.1618 0.920833 4.0834 2.04 4.0834ZM6.02083 5.62886V17H9.53417V11.3853C9.53417 9.89658 9.8175 8.46455 11.645 8.46455C13.4725 8.46455 13.4725 10.166 13.4725 11.4704V17H17V10.7615C17 7.69892 16.3483 5.34529 12.7783 5.34529C11.0642 5.34529 9.91667 6.28107 9.44917 7.17431H9.40667V5.61468H6.035L6.02083 5.62886ZM0.283333 5.62886H3.81083V17H0.283333V5.62886Z'
				fill='currentColor'
			/>
		</svg>
	);
};

In.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default In;
