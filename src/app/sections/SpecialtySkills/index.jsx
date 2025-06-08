import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import Card from './components/Card';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const SpecialtySkills = ({ title, subtitle, data, animation }) => {
   return (
      <section className='py-5'>
         <Element className='container' name={sections.expertise.id}>
            {Array.isArray(data) && data.length > 0 && (
               <div className={cx('row')} data-aos={animation}>
                  <div className='text-center mb-3'>
                     <h2 className='heading-2 text-primary uppercase'>
                        {title}
                     </h2>
                     <span className='subtitle'>{subtitle}</span>
                  </div>
                  <div className={cx('col')}>
                     <div className={cx('box')}>
                        {data &&
                           data.map((item, index) => (
                              <Card
                                 key={index}
                                 icon={item?.icon}
                                 name={item?.name}
                                 description={item?.description}
                              />
                           ))}
                     </div>
                  </div>
               </div>
            )}
         </Element>
      </section>
   );
};

SpecialtySkills.propTypes = {
   title: PropTypes.string,
   subtitle: PropTypes.string,
   data: PropTypes.array,
   animation: PropTypes.string
};
export default SpecialtySkills;
