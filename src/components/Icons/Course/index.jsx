import PropTypes from 'prop-types';

const Course = ({ className, strokeWidth, width, height }) => {
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
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.56267 1.5236C-1.58946e-07 3.0459 0 5.4977 0 10.4V15.6C0 20.5023 -1.58946e-07 22.9541 1.56267 24.4764C3.12533 25.9987 5.63867 26 10.6667 26H13.3333C18.3613 26 20.876 26 22.4373 24.4764C23.9987 22.9528 24 20.5023 24 15.6V10.4C24 5.4977 24 3.0459 22.4373 1.5236C20.8747 0.00129991 18.3613 0 13.3333 0H10.6667C5.63867 0 3.124 -1.54972e-07 1.56267 1.5236ZM6.66667 9.425C6.40145 9.425 6.1471 9.52772 5.95956 9.71057C5.77202 9.89342 5.66667 10.1414 5.66667 10.4C5.66667 10.6586 5.77202 10.9066 5.95956 11.0894C6.1471 11.2723 6.40145 11.375 6.66667 11.375H17.3333C17.5986 11.375 17.8529 11.2723 18.0404 11.0894C18.228 10.9066 18.3333 10.6586 18.3333 10.4C18.3333 10.1414 18.228 9.89342 18.0404 9.71057C17.8529 9.52772 17.5986 9.425 17.3333 9.425H6.66667ZM6.66667 14.625C6.40145 14.625 6.1471 14.7277 5.95956 14.9106C5.77202 15.0934 5.66667 15.3414 5.66667 15.6C5.66667 15.8586 5.77202 16.1066 5.95956 16.2894C6.1471 16.4723 6.40145 16.575 6.66667 16.575H13.3333C13.5985 16.575 13.8529 16.4723 14.0404 16.2894C14.228 16.1066 14.3333 15.8586 14.3333 15.6C14.3333 15.3414 14.228 15.0934 14.0404 14.9106C13.8529 14.7277 13.5985 14.625 13.3333 14.625H6.66667Z'
                fill='currentColor'
            />
        </svg>
    );
};

Course.propTypes = {
    className: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Course;
