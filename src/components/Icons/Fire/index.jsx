import PropTypes from 'prop-types';

const Fire = ({ width = '20', height = '20', className, fill = 'none' }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            width={width}
            height={height}
            fill={fill}
            className={className}
        >
            <path
                d='M5.55625 6.36386C5.46718 7.31386 5.40468 8.99512 5.96562 9.71074C5.96562 9.71074 5.70156 7.86386 8.06875 5.54668C9.02187 4.61386 9.24218 3.34511 8.90937 2.39355C8.72031 1.85449 8.375 1.40918 8.075 1.09824C7.9 0.915426 8.03437 0.613864 8.28906 0.624801C9.82968 0.693551 12.3266 1.12168 13.3875 3.78418C13.8531 4.95293 13.8875 6.16074 13.6656 7.38886C13.525 8.17324 13.025 9.91699 14.1656 10.1311C14.9797 10.2842 15.3734 9.6373 15.55 9.17168C15.6234 8.97793 15.8781 8.92949 16.0156 9.08418C17.3906 10.6482 17.5078 12.4904 17.2234 14.0764C16.6734 17.142 13.5687 19.3732 10.4844 19.3732C6.63125 19.3732 3.56406 17.1686 2.76875 13.1779C2.44843 11.567 2.61093 8.37949 5.09531 6.12949C5.27968 5.96074 5.58125 6.11074 5.55625 6.36386Z'
                fill='url(#paint0_radial_15512_2696)'
            />
            <path
                d='M11.8922 12.097C10.4719 10.2689 11.1078 8.18298 11.4562 7.35173C11.5031 7.24236 11.3781 7.13923 11.2797 7.20642C10.6687 7.62205 9.41717 8.60017 8.83436 9.97673C8.0453 11.8377 8.10155 12.7486 8.56874 13.8611C8.84999 14.5314 8.52342 14.6736 8.35936 14.6986C8.19999 14.7236 8.05311 14.6174 7.93592 14.5064C7.59886 14.1827 7.35863 13.7715 7.24217 13.3189C7.21717 13.222 7.09061 13.1955 7.0328 13.2752C6.5953 13.8799 6.36873 14.8502 6.3578 15.5361C6.32342 17.6564 8.07498 19.3752 10.1937 19.3752C12.864 19.3752 14.8094 16.422 13.275 13.9533C12.8297 13.2345 12.4109 12.7642 11.8922 12.097Z'
                fill='url(#paint1_radial_15512_2696)'
            />
            <defs>
                <radialGradient
                    id='paint0_radial_15512_2696'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(9.72121 19.4218) rotate(-179.751) scale(11.0293 18.0969)'
                >
                    <stop offset='0.314' stopColor='#FF9800' />
                    <stop offset='0.662' stopColor='#FF6D00' />
                    <stop offset='0.972' stopColor='#F44336' />
                </radialGradient>
                <radialGradient
                    id='paint1_radial_15512_2696'
                    cx='0'
                    cy='0'
                    r='1'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='translate(10.3406 8.44679) rotate(90.5787) scale(11.5401 8.68476)'
                >
                    <stop offset='0.214' stopColor='#FFF176' />
                    <stop offset='0.328' stopColor='#FFF27D' />
                    <stop offset='0.487' stopColor='#FFF48F' />
                    <stop offset='0.672' stopColor='#FFF7AD' />
                    <stop offset='0.793' stopColor='#FFF9C4' />
                    <stop
                        offset='0.822'
                        stopColor='#FFF8BD'
                        stopOpacity='0.804'
                    />
                    <stop
                        offset='0.863'
                        stopColor='#FFF6AB'
                        stopOpacity='0.529'
                    />
                    <stop
                        offset='0.91'
                        stopColor='#FFF38D'
                        stopOpacity='0.209'
                    />
                    <stop offset='0.941' stopColor='#FFF176' stopOpacity='0' />
                </radialGradient>
            </defs>
        </svg>
    );
};

Fire.propTypes = {
    className: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Fire;
