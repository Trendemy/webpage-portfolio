import PropTypes from 'prop-types';

const Bookmark = ({ className, strokeWidth, width, height }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 18'
            width={width}
            height={height}
            className={className}
            strokeWidth={strokeWidth}
            fill='none'
        >
            <path
                d='M13.7143 0H2.28571C1.02857 0 0.0114288 0.9 0.0114288 2L0 18L8 15L16 18V2C16 0.9 14.9714 0 13.7143 0Z'
                fill='currentColor'
            />
        </svg>
    );
};

Bookmark.propTypes = {
    className: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Bookmark;
