import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Button = ({
    className,
    type = 'button',
    style,
    primary,
    secondary,
    outline,
    disabled = false,
    onClick,
    children,
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn(
                'relative text-lg font-bold bg-transparent rounded-[5px] cursor-pointer select-none px-7 py-3.5 z-1 transition-all duration-300 ease overflow-hidden',
                'after:content after:absolute after:w-[510%] after:aspect-square after:rounded-full after:bg-secondary-2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:transition-all after:duration-300 after:ease-in-out after:-z-1',
                {
                    'after:top-[100%] hover:after:top-[150%] hover:after:-translate-y-full hover:after:scale-100':
                        primary,
                    'bg-primary text-white': primary && !outline,
                    'bg-transparent text-primary border border-primary hover:border-secondary-2 hover:text-white':
                        primary && outline
                },
                {
                    'after:top-1/2 hover:after:-translate-y-1/2 hover:after:scale-100':
                        secondary,
                    'bg-secondary text-white': secondary
                },
                {
                    'cursor-not-allowed opacity-60 active:scale-100': disabled
                },
                className
            )}
            style={style}
            onClick={disabled ? undefined : onClick}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};
export default Button;
