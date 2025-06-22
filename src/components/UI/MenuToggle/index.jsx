import PropTypes from 'prop-types';
import { cn } from '~/utils';

const MenuToggle = ({ primary = false, active, onClick, ...props }) => {
    return (
        <button
            type='button'
            className='w-8 h-5 flex flex-col justify-between bg-transparent cursor-pointer'
            onClick={onClick}
            {...props}
        >
            <span
                className={cn(
                    'h-1 bg-black duration-300 z-50 rounded-full shrink-0',
                    {
                        'bg-primary': primary,
                        'bg-secondary-2 translate-y-2 -rotate-45': active
                    }
                )}
            ></span>
            <span
                className={cn(
                    'h-1 bg-black duration-300 z-50 rounded-full shrink-0',
                    {
                        'bg-primary': primary,
                        'bg-secondary-2 opacity-0': active
                    }
                )}
            ></span>
            <span
                className={cn(
                    'h-1 bg-black duration-500 z-50 rounded-full shrink-0',
                    {
                        'bg-primary': primary,
                        'bg-secondary-2 -translate-y-2 rotate-45': active
                    }
                )}
            ></span>
        </button>
    );
};
MenuToggle.propTypes = {
    primary: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func
};
export default MenuToggle;
