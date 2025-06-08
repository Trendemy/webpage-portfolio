import PropTypes from 'prop-types';

const Bag = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 18 18'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M7.2 0H10.8C11.2774 0 11.7352 0.199623 12.0728 0.554955C12.4104 0.910288 12.6 1.39222 12.6 1.89474V3.78947H16.2C16.6774 3.78947 17.1352 3.9891 17.4728 4.34443C17.8104 4.69976 18 5.18169 18 5.68421V16.1053C18 16.6078 17.8104 17.0897 17.4728 17.445C17.1352 17.8004 16.6774 18 16.2 18H1.8C1.32261 18 0.864773 17.8004 0.527208 17.445C0.189642 17.0897 0 16.6078 0 16.1053V5.68421C0 4.63263 0.801 3.78947 1.8 3.78947H5.4V1.89474C5.4 0.843158 6.201 0 7.2 0ZM10.8 3.78947V1.89474H7.2V3.78947H10.8Z'
				fill='currentColor'
			/>
		</svg>
	);
};

Bag.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Bag;
