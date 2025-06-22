import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Tag = ({ className, icon: Icon, name, number }) => {
    return (
        <div
            className={cn(
                'absolute flex justify-center items-center bg-transparent rounded-xl backdrop-blur-xl shadow-[0_2px_5px_rgba(0,0,0,0.2)] py-1.5 px-3.5 md:py-2.5 md:px-5 gap-2.5 select-none',
                className
            )}
        >
            <div className='size-12 md:size-14 flex justify-center items-center bg-primary rounded-full'>
                <Icon className='size-5 md:size-6 shrink-0 text-white' />
            </div>
            <div className='flex flex-col justify-center text-base md:text-xl font-semibold gap-0'>
                <span>{name}</span>
                <span>{number}</span>
            </div>
        </div>
    );
};

Tag.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Tag;
