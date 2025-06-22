import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const Section = ({ sections = [], offset = 0 }) => {
    return (
        <div className='hidden xl:flex bg-secondary-2 py-5'>
            <div className='container'>
                <ul className='flex justify-between'>
                    {sections.map((section, index) => (
                        <li key={section.id}>
                            <Link
                                to={section.id}
                                key={index}
                                className='relative text-base font-medium text-white cursor-pointer after:absolute after:content after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:rounded-full after:bg-white after:-translate-x-1/2 after:translate-y-full after:transition-[width] hover:after:w-full p-1'
                                activeClass='after:w-full'
                                offset={-offset}
                                spy={true}
                                smooth={true}
                            >
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Section.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ),
    offset: PropTypes.number
};

export default Section;
