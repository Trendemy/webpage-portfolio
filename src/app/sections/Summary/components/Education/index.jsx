import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {
   Article,
   Certificate,
   Project,
   Education as EducationIcon
} from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Education = ({ children, className, animation }) => {
   return (
      <div className={classNames(className)} data-aos={animation}>
         {children}
      </div>
   );
};

const EducationHeader = ({ children, className }) => {
   return (
      <div>
         <h2 className={classNames('text-center', className)}>{children}</h2>
      </div>
   );
};
Education.Header = EducationHeader;

const EducationBody = ({ children, className, style }) => {
   return (
      <div className={cx('frame', className)} style={style}>
         {children}
      </div>
   );
};
Education.Body = EducationBody;

const EducationBox = ({ children, className, style }) => {
   return (
      <div className={cx('box', className)} style={style}>
         {children}
      </div>
   );
};
Education.Box = EducationBox;

const EducationContent = ({
   icon,
   year,
   title,
   details,
   type,
   isFirst,
   isLast,
   reverse
}) => {
   const icons = {
      CERTIFICATE: Certificate,
      ARTICLE: Article,
      EDUCATION: EducationIcon,
      PROJECT: Project
   };
   const Icon = icons[icon];
   return (
      <>
         <div
            className={cx('inner', { reverse }, `bg-${type}`)}
            style={{
               borderTopLeftRadius: isFirst ? '2.4rem' : undefined,
               borderBottomLeftRadius: isFirst ? '2.4rem' : undefined,
               borderTopRightRadius: isLast ? '2.4rem' : undefined,
               borderBottomRightRadius: isLast ? '2.4rem' : undefined
            }}
         >
            <div className={cx('line', `bg-${type}`)}>
               <div className={cx('bubble')}>
                  <div className={cx('border', `text-${type}`)}>
                     <Icon />
                  </div>
               </div>
            </div>
            <h3 className={cx('year')}>{year}</h3>
            <div className={cx('content')}>
               <h5 className={cx('title')}>{title}</h5>
               <p className={cx('details')}>{details}</p>
            </div>
         </div>
         <div className={cx('inner-vertical')}>
            <div className={cx('icon-container')}>
               <div className={cx('brand')}>
                  <div className={cx('brand-top')}>
                     {isFirst && <div className={cx('brand-top__dot')}></div>}
                  </div>
                  <div className={cx('brand-bottom')}>
                     {isLast && <div className={cx('brand-bottom__dot')}></div>}
                  </div>
               </div>
               <div className={cx('year', `text-${type}`)}>{year}</div>
            </div>
            <div className={cx('link')}></div>
            <div className={cx('wrapper')}>
               <div className={cx('content', type)}>
                  <h5 className={cx('title')}>{title}</h5>
                  <p className={cx('details')}>{details}</p>
               </div>
            </div>
         </div>
      </>
   );
};
Education.Content = EducationContent;

Education.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
   animation: PropTypes.string
};
EducationHeader.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};
EducationBody.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
   style: PropTypes.object
};
EducationBox.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node,
   style: PropTypes.object
};
EducationContent.propTypes = {
   type: PropTypes.oneOf(['primary', 'secondary']),
   icon: PropTypes.string,
   year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   title: PropTypes.string,
   details: PropTypes.string,
   isFirst: PropTypes.bool,
   isLast: PropTypes.bool,
   reverse: PropTypes.bool
};
export default Education;
