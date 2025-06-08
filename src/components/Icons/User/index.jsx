import PropTypes from 'prop-types';

const User = ({ className, strokeWidth, width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 16 20'
			width={width}
			height={height}
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path d='M0 20H16V16.4286C15.9979 15.1031 15.4072 13.8324 14.3575 12.8951C13.3077 11.9579 11.8846 11.4305 10.4 11.4286H5.6C4.11544 11.4305 2.69228 11.9579 1.64254 12.8951C0.592794 13.8324 0.00211627 15.1031 0 16.4286V20ZM2.4 5C2.4 5.98891 2.72843 6.95561 3.34377 7.77785C3.95911 8.6001 4.83371 9.24096 5.85697 9.6194C6.88024 9.99784 8.00621 10.0969 9.09251 9.90393C10.1788 9.711 11.1766 9.2348 11.9598 8.53553C12.743 7.83627 13.2763 6.94536 13.4924 5.97545C13.7085 5.00555 13.5976 4.00021 13.1737 3.08658C12.7499 2.17295 12.0321 1.39206 11.1112 0.842652C10.1903 0.293245 9.10758 0 8 0C6.51479 0 5.09041 0.526784 4.0402 1.46447C2.99 2.40215 2.4 3.67392 2.4 5Z' />
		</svg>
	);
};

User.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default User;
