import PropTypes from 'prop-types';

const ChevronDown = ({ className, strokeWidth, width, height, style }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={width}
      height={height}
      className={className}
      strokeWidth={strokeWidth}
      fill='none'
      stroke='currentColor'
      style={style}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m19.5 8.25-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
};

ChevronDown.propTypes = {
  className: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object
};
export default ChevronDown;
