import PropTypes from 'prop-types';
import { cn } from '~/utils';

const MenuToggle = ({ active, style, onClick, ...props }) => {
    return (
        <button
            type='button'
            className='w-8 h-5 shrink-0 flex flex-col justify-between bg-transparent cursor-pointer'
            onClick={onClick}
            style={{
                ...style,
                WebkitTapHighlightColor: 'transparent'
            }}
            {...props}
        >
            <span
                className={cn(
                    'h-1 bg-primary duration-300 rounded-full shrink-0',
                    {
                        'bg-secondary-2 translate-y-2 -rotate-45': active
                    }
                )}
            ></span>
            <span
                className={cn(
                    'h-1 bg-primary duration-300 rounded-full shrink-0',
                    {
                        'bg-secondary-2 opacity-0': active
                    }
                )}
            ></span>
            <span
                className={cn(
                    'h-1 bg-primary duration-500 rounded-full shrink-0',
                    {
                        'bg-secondary-2 -translate-y-2 rotate-45': active
                    }
                )}
            ></span>
        </button>
    );
};

MenuToggle.propTypes = {
    style: PropTypes.object,
    active: PropTypes.bool,
    onClick: PropTypes.func
};
export default MenuToggle;
