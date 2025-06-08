import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { LazyImage } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Experience = ({ children, className, animation }) => {
   return (
      <div className={classNames(cx('row'), className)} data-aos={animation}>
         {children}
      </div>
   );
};

const ExperienceHeader = ({ children, className }) => {
   return (
      <div className={cx('heading')}>
         <h2 className={classNames('text-center', className)}>{children}</h2>
      </div>
   );
};
Experience.Header = ExperienceHeader;

const ExperienceBody = ({ children, className }) => {
   return <div className={classNames(cx('box'), className)}>{children}</div>;
};
Experience.Body = ExperienceBody;

const ExperienceBox = ({ title, images }) => {
   return (
      <div className={classNames(cx('card'))}>
         <h5 className={cx('card-title')}>{title}</h5>
         <div className={cx('card-spacer')} />
         <div className={cx('card-content')}>
            {images?.map((img, index) => (
               <div key={index} className={cx('card-item')}>
                  <LazyImage src={img} />
                  <LazyImage src={img} />
               </div>
            ))}
         </div>
      </div>
   );
};
Experience.Box = ExperienceBox;

Experience.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
   animation: PropTypes.string
};
ExperienceHeader.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};
ExperienceBody.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};
ExperienceBox.propTypes = {
   title: PropTypes.string,
   images: PropTypes.array
};
export default Experience;
