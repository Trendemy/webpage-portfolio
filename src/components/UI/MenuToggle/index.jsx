import PropTypes from 'prop-types';
import { cn } from '~/utils';

const MenuToggle = ({ active, className, style, onClick, ...props }) => {
    return (
        <button
            type='button'
            className={cn(
                'w-8 h-5 flex flex-col justify-between bg-transparent cursor-pointer',
                className
            )}
            onClick={onClick}
            style={style}
            {...props}
        >
            <span
                className={cn('h-1 bg-primary duration-200 rounded-full', {
                    'bg-secondary-2 translate-y-2 -rotate-45': active
                })}
            />
            <span
                className={cn('h-1 bg-primary duration-200 rounded-full', {
                    'bg-secondary-2 opacity-0': active
                })}
            />
            <span
                className={cn('h-1 bg-primary duration-200 rounded-full', {
                    'bg-secondary-2 -translate-y-2 rotate-45': active
                })}
            />
        </button>
    );
};

MenuToggle.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};
export default MenuToggle;
