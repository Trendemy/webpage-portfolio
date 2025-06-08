import PropTypes from 'prop-types';

const Signal = ({ className, strokeWidth, width, height }) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 85 86'
         width={width}
         height={height}
         strokeWidth={strokeWidth}
         className={className}
         fill='none'
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M37.1766 37.6844C47.9928 27.2392 65.3647 27.0138 75.9777 37.1811L70.9755 42.0118C63.0732 34.4414 50.1385 34.6091 42.0848 42.3866C34.0312 50.164 33.9086 62.6057 41.8109 70.1761L36.8087 75.0068C26.1956 64.8395 26.3603 48.1297 37.1766 37.6844Z'
            fill='currentColor'
         />
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M28.4625 29.3388C44.182 14.1584 69.4287 13.8307 84.8528 28.6069L79.8506 33.4376C67.1373 21.2583 46.3275 21.5284 33.3708 34.0409C20.414 46.5533 20.2167 66.57 32.93 78.7493L27.9278 83.58C12.5037 68.8038 12.7431 44.5192 28.4625 29.3388Z'
            fill='currentColor'
         />
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M45.4885 45.6521C51.6244 39.7266 61.4793 39.5988 67.4999 45.3666L62.4977 50.1971C59.1878 47.0262 53.77 47.0966 50.3967 50.3542C47.0235 53.6118 46.9721 58.823 50.282 61.9939L45.2798 66.8246C39.2591 61.0568 39.3526 51.5775 45.4885 45.6521Z'
            fill='currentColor'
         />
      </svg>
   );
};

Signal.propTypes = {
   className: PropTypes.string,
   strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Signal;
