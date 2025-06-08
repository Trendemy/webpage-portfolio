import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import classNames from 'classnames/bind';
import { sections } from '@data';
import { LazyImage } from '@components/UI';
import Question from './components/Question';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const FAQ = ({ title = '', questions = [], images = [], animation }) => {
   return (
      <section className='py-5'>
         <Element name={sections.faq.id} className='container'>
            <div className={cx('wrapper')} data-aos={animation}>
               <div className={cx('content')}>
                  <h2 className='heading-2 text-primary uppercase'>{title}</h2>
                  <div className={cx('box-questions')}>
                     {questions.map((question, index) => (
                        <Question
                           key={question.id}
                           index={index + 1}
                           title={question.title}
                           answer={question.answer}
                        />
                     ))}
                  </div>
               </div>
               <div className={cx('images')}>
                  <LazyImage
                     src={images[0]}
                     alt='image faq'
                     className={cx('img-1')}
                  />
                  <LazyImage
                     src={images[1]}
                     alt='image faq'
                     className={cx('img-2')}
                  />
               </div>
            </div>
         </Element>
      </section>
   );
};

FAQ.propTypes = {
   title: PropTypes.string.isRequired,
   questions: PropTypes.array.isRequired,
   images: PropTypes.array.isRequired,
   animation: PropTypes.string
};
export default FAQ;
