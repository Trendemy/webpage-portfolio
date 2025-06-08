const CircleBlur = () => {
   return (
      <svg
         width='782'
         height='1278'
         viewBox='0 0 782 1278'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
      >
         <g filter='url(#filter0_f_14525_6258)'>
            <ellipse
               cx='140.936'
               cy='639'
               rx='140.936'
               ry='139'
               fill='#0FC8A9'
            />
         </g>
         <defs>
            <filter
               id='filter0_f_14525_6258'
               x='-500'
               y='0'
               width='1281.87'
               height='1278'
               filterUnits='userSpaceOnUse'
               colorInterpolationFilters='sRGB'
            >
               <feFlood floodOpacity='0' result='BackgroundImageFix' />
               <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  result='shape'
               />
               <feGaussianBlur
                  stdDeviation='250'
                  result='effect1_foregroundBlur_14525_6258'
               />
            </filter>
         </defs>
      </svg>
   );
};

export default CircleBlur;
