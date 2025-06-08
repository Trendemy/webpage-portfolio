import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import Education from './components/Education';
import Experience from './components/Experience';
import ArrowDeco from './components/ArrowDeco';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Summary = ({
   title = '',
   subtitle = '',
   education = [],
   experience = [],
   animation
}) => {
   return (
      <section className='py-5'>
         <Element className='container' name={sections.education.id}>
            <div className='row' data-aos={animation}>
               <div className={classNames(cx('heading'), 'text-center')}>
                  <span className={cx('arrow')}>
                     <ArrowDeco />
                  </span>
                  <h2 className={'heading-2 text-primary'}>{title}</h2>
                  <p className={cx('subtitle')}>{subtitle}</p>
               </div>
            </div>
            <Education animation={animation}>
               <Education.Header className={'heading-3'}>
                  Học vấn
               </Education.Header>
               <Education.Body>
                  <Education.Box>
                     {education?.map((content, index) => (
                        <Education.Content
                           key={index}
                           {...content}
                           reverse={index % 2 === 1}
                           type={index % 2 === 1 ? 'secondary' : 'primary'}
                           isFirst={index == 0}
                           isLast={index === education.length - 1}
                        />
                     ))}
                  </Education.Box>
               </Education.Body>
            </Education>
            <Experience animation={animation}>
               <Experience.Header className={'heading-3'}>
                  Kinh nghiệm
               </Experience.Header>
               <Experience.Body>
                  {experience?.map((content, index) => (
                     <Experience.Box
                        key={index}
                        title={content.title}
                        images={content.images}
                     />
                  ))}
               </Experience.Body>
            </Experience>
         </Element>
      </section>
   );
};

Summary.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   education: PropTypes.array,
   experience: PropTypes.array,
   animation: PropTypes.string
};
export default Summary;
