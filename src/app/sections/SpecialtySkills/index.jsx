import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { sections } from '~/data';
import Card from './Card';
import { Section } from '~/app/sections';

const SpecialtySkills = ({ title, data, animation }) => {
    return (
        <Section>
            <Element className='container' name={sections.expertise.id}>
                {Array.isArray(data) && data.length > 0 && (
                    <div className='flex flex-col gap-10' data-aos={animation}>
                        <h2 className='heading-2 text-primary uppercase text-center'>
                            {title}
                        </h2>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-5'>
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
                )}
            </Element>
        </Section>
    );
};

SpecialtySkills.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    animation: PropTypes.string
};
export default SpecialtySkills;
