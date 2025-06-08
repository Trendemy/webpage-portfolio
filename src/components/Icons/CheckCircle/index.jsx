import PropTypes from 'prop-types';

const CheckCircle = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 16 16'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<circle cx='8' cy='8' r='8' fill='currentColor' />
			<path
				d='M12.0746 5.50347L6.77747 11.0017L4.34961 8.48169L4.97202 7.83564L6.77747 9.70505L11.4522 4.85742L12.0746 5.50347Z'
				fill='white'
			/>
		</svg>
	);
};

CheckCircle.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CheckCircle;
