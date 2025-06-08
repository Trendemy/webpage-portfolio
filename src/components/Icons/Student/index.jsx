import PropTypes from 'prop-types';

const Student = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 26'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path d='M18 8.66667C18 11.8589 15.315 14.4444 12 14.4444C8.685 14.4444 6 11.8589 6 8.66667L6.165 7.30889L1.5 5.05556L12 0L22.5 5.05556V12.2778H21V5.77778L17.835 7.30889L18 8.66667ZM12 17.3333C18.63 17.3333 24 19.9189 24 23.1111V26H0V23.1111C0 19.9189 5.37 17.3333 12 17.3333Z' />
		</svg>
	);
};

Student.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Student;
