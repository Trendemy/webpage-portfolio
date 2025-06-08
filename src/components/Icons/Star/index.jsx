import PropTypes from 'prop-types';

const Star = ({ className, strokeWidth, width, height }) => {
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
			<path d='M4.2552 15.7515C3.86726 16.0534 3.47088 16.0618 3.06606 15.7766C2.66125 15.4915 2.52631 15.114 2.66125 14.6443L4.1034 9.98934L0.434765 7.39765C0.0299505 7.11248 -0.0921686 6.73505 0.0684079 6.26536C0.22831 5.79567 0.552836 5.56082 1.04199 5.56082H5.57085L7.03831 0.7297C7.12264 0.494854 7.25353 0.314359 7.43097 0.188213C7.60774 0.0627377 7.79733 0 7.99974 0C8.20215 0 8.39174 0.0627377 8.56851 0.188213C8.74595 0.314359 8.87684 0.494854 8.96117 0.7297L10.4286 5.56082H14.9575C15.4466 5.56082 15.7715 5.79567 15.9321 6.26536C16.092 6.73505 15.9695 7.11248 15.5647 7.39765L11.8961 9.98934L13.3382 14.6443C13.4732 15.114 13.3382 15.4915 12.9334 15.7766C12.5286 16.0618 12.1322 16.0534 11.7443 15.7515L7.99974 12.9081L4.2552 15.7515Z' />
		</svg>
	);
};

Star.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Star;
