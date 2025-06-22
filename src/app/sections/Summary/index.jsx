import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import { Section } from '~/app/sections';
import EducationContainer from './EducationContainer';
import ExperienceContainer from './ExperienceContainer';
import ArrowDeco from './components/ArrowDeco';

const Summary = ({
    title = '',
    education = [],
    experience = [],
    animation
}) => {
    return (
        <Section>
            <Element className='container' name={sections.education.id}>
                <div className='relative' data-aos={animation}>
                    <div className='absolute'>
                        <ArrowDeco />
                    </div>
                    <h2 className='heading-2 text-primary uppercase text-center mb-10'>
                        {title}
                    </h2>
                </div>
                <EducationContainer
                    title='Học vấn'
                    data={education}
                    animation={animation}
                />
                <ExperienceContainer
                    title='Kinh nghiệm'
                    data={experience}
                    animation={animation}
                />
            </Element>
        </Section>
    );
};

Summary.propTypes = {
    title: PropTypes.string,
    education: PropTypes.array,
    experience: PropTypes.array,
    animation: PropTypes.string
};
export default Summary;
