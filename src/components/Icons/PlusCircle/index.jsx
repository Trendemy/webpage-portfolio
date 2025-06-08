import PropTypes from 'prop-types';

const PlusCircle = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='currentColor'
		>
			<path d='M0 10C0 15.5242 4.47581 20 10 20C15.5242 20 20 15.5242 20 10C20 4.47581 15.5242 0 10 0C4.47581 0 0 4.47581 0 10ZM11.129 4.19355C11.3952 4.19355 11.6129 4.41129 11.6129 4.67742L11.6129 8.3871L15.3226 8.3871C15.5887 8.3871 15.8065 8.60484 15.8065 8.87097V11.129C15.8065 11.3952 15.5887 11.6129 15.3226 11.6129L11.6129 11.6129V15.3226C11.6129 15.5887 11.3952 15.8065 11.129 15.8065H8.87097C8.60484 15.8065 8.3871 15.5887 8.3871 15.3226V11.6129H4.67742C4.41129 11.6129 4.19355 11.3952 4.19355 11.129V8.87097C4.19355 8.60484 4.41129 8.3871 4.67742 8.3871H8.3871L8.3871 4.67742C8.3871 4.41129 8.60484 4.19355 8.87097 4.19355H11.129Z' />
		</svg>
	);
};

PlusCircle.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PlusCircle;
