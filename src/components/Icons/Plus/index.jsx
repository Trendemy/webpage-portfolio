import PropTypes from 'prop-types';

const Plus = ({
    className,
    strokeWidth,
    width,
    height,
    fill = 'none',
    stroke = 'currentColor'
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={width}
            height={height}
            className={className}
            strokeWidth={strokeWidth}
            fill={fill}
            stroke={stroke}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
            />
        </svg>
    );
};

Plus.propTypes = {
    className: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Plus;
