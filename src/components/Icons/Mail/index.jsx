import PropTypes from 'prop-types';

const Mail = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 17'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='currentColor'
		>
			<path d='M2 17C1.45 17 0.979333 16.7921 0.588 16.3763C0.196667 15.9605 0.000666667 15.4601 0 14.875V2.125C0 1.54062 0.196 1.04054 0.588 0.62475C0.98 0.208958 1.45067 0.000708333 2 0H18C18.55 0 19.021 0.20825 19.413 0.62475C19.805 1.04125 20.0007 1.54133 20 2.125V14.875C20 15.4594 19.8043 15.9598 19.413 16.3763C19.0217 16.7928 18.5507 17.0007 18 17H2ZM10 9.5625L18 4.25V2.125L10 7.4375L2 2.125V4.25L10 9.5625Z' />
		</svg>
	);
};

Mail.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Mail;
