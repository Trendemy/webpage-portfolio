import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import { Image } from '~/components/UI';
import Question from './components/Question';
import { Section } from '~/app/sections';

const FAQSection = ({ title = '', questions = [], images = [], animation }) => {
    return (
        <Section>
            <Element className='container' name={sections.faq.id}>
                <div
                    className='grid grid-cols-1 xl:grid-cols-12 gap-20'
                    data-aos={animation}
                >
                    <div className='xl:col-span-7 flex flex-col gap-5'>
                        <h2 className='heading-2 text-primary uppercase text-center xl:text-left'>
                            {title}
                        </h2>
                        <div className='border border-gray-400 border-dashed' />
                        <div className='flex flex-col gap-5'>
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
                    <div className='relative xl:col-span-5 flex before:content after:content before:absolute after:absolute before:size-1/5 after:w-1/3 after:aspect-square before:bg-secondary after:bg-secondary before:top-1/2 after:right-0 after:bottom-0 after:translate-y-1/4 before:-z-1 after:-z-1'>
                        <div className='flex-1 flex justify-center'>
                            <Image
                                src={images[0]}
                                alt='image faq'
                                className='w-4/5 aspect-[2/3] object-cover rounded-md'
                            />
                        </div>
                        <div className='absolute w-2/5 bottom-0 left-0'>
                            <Image
                                src={images[1]}
                                alt='image faq'
                                className='w-full aspect-[3/4] object-cover -rotate-12 rounded-md shadow-xl'
                            />
                        </div>
                    </div>
                </div>
            </Element>
        </Section>
    );
};

FAQSection.propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    animation: PropTypes.string
};
export default FAQSection;
