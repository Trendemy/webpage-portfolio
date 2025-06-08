import PropTypes from 'prop-types';

const Youtube = ({ className, strokeWidth }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 35 24'
			width='35'
			height='24'
			className={className}
			strokeWidth={strokeWidth}
			fill='none'
		>
			<path
				d='M33.8131 3.74333C33.6173 3.01981 33.2354 2.36019 32.7054 1.83017C32.1754 1.30015 31.5158 0.918215 30.7923 0.7224C28.1435 0 17.483 0 17.483 0C17.483 0 6.82189 0.0218666 4.17309 0.744267C3.44955 0.940093 2.78994 1.32205 2.25994 1.85209C1.72995 2.38214 1.34805 3.04178 1.15229 3.76533C0.351086 8.47173 0.040286 15.6432 1.17429 20.1613C1.37007 20.8849 1.75197 21.5445 2.28197 22.0745C2.81197 22.6045 3.47157 22.9865 4.19509 23.1823C6.84389 23.9047 17.5047 23.9047 17.5047 23.9047C17.5047 23.9047 28.1654 23.9047 30.814 23.1823C31.5376 22.9865 32.1972 22.6045 32.7272 22.0745C33.2572 21.5445 33.6392 20.8849 33.835 20.1613C34.68 15.4483 34.9404 8.2812 33.8131 3.74333Z'
				fill='#FF0000'
			/>
			<path
				d='M14.0898 17.0749L22.9336 11.9525L14.0898 6.83008V17.0749Z'
				fill='white'
			/>
		</svg>
	);
};

Youtube.propTypes = {
	className: PropTypes.string,
	strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Youtube;
