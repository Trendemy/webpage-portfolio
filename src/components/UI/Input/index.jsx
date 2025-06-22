import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Input = ({
    id,
    name,
    type = 'text',
    icon: Icon,
    value,
    placeholder,
    readOnly,
    disabled,
    required,
    onChange,
    outline,
    ...props
}) => {
    return (
        <div
            className={cn('flex items-center bg-gray-100 rounded-xl', {
                'bg-transparent border border-primary': outline
            })}
        >
            <input
                type={type}
                value={value}
                id={id}
                name={name}
                className={cn(
                    'flex-1 p-5 border-none outline-none text-base bg-transparent',
                    '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0',
                    '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0',
                    '[&[type=number]]:[-moz-appearance:textfield]'
                )}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                required={required}
                onChange={onChange}
                {...props}
            />
            {Icon && (
                <span
                    className={cn(
                        'inline-flex justify-center items-center select-none pointer-events-none pr-5'
                    )}
                >
                    <Icon className='size-5 fill-primary text-primary' />
                </span>
            )}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number']),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    icon: PropTypes.func,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default Input;
