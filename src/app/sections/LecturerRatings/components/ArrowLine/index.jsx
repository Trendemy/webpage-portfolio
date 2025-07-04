import PropTypes from 'prop-types';
const ArrowLine = ({ className }) => {
    return (
        <svg
            viewBox='0 0 155 120'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
        >
            <path
                d='M152.24 86.3608C69.7117 140.044 -5.82445 82.3298 3.30211 45.0793C11.8573 10.1609 62.7392 12.318 88.0719 26.3515C112.172 39.7024 103.843 60.7874 81.0815 50.5162C53.3816 38.0167 45.2833 14.7566 48.3087 0.603121M152.24 86.3608L113.007 79.568M152.24 86.3608L150.986 119.492'
                stroke='currentColor'
                strokeWidth='5'
            />
        </svg>
    );
};

ArrowLine.propTypes = {
    className: PropTypes.string
};
export default ArrowLine;
