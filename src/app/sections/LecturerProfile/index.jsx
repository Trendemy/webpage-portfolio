import { Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { sections } from '~/data';
import { Image } from '~/components/UI';
import { ZigzagArrow } from '~/components/Icons';
import { Section } from '~/app/sections';
import HighlightTitle from '~/app/sections/components/HighlightTitle';
import BrushStroke from './components/BrushStroke';

const LecturerProfile = ({ avatar, title, description, animation }) => {
    return (
        <Section className='relative overflow-hidden'>
            <div className='circle-glow' />
            <Element className='container' name={sections.introduction.id}>
                <div
                    className='relative flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-20 gap-10'
                    data-aos={animation}
                >
                    <div className='flex-1 relative flex'>
                        <div className='absolute flex w-3/4 bottom-0 right-0 text-secondary'>
                            <BrushStroke className='w-full shrink-0' />
                        </div>
                        {avatar && (
                            <Image
                                src={avatar}
                                alt='Lecturer'
                                className='rounded-full object-cover aspect-square'
                            />
                        )}
                    </div>
                    <div className='flex-1'>
                        <HighlightTitle
                            as='h2'
                            className='heading-2 uppercase text-center xl:text-left mb-5 mt-20 xl:mt-0'
                            title={title}
                            highlight={title}
                        >
                            <HighlightTitle.Underline className='translate-y-4/5' />
                        </HighlightTitle>
                        <p className='text-paragraph'>{description}</p>
                    </div>
                    <div className='absolute flex xl:w-32 w-20 top-0 xl:right-1/5 right-2/5 text-secondary'>
                        <ZigzagArrow className='w-full shrink-0' />
                    </div>
                </div>
            </Element>
        </Section>
    );
};
LecturerProfile.propTypes = {
    avatar: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    animation: PropTypes.string
};
export default LecturerProfile;
