import PropTypes from 'prop-types';
import { ChevronDown } from '~/components/Icons';
import { cn } from '~/utils';

const Select = ({
    id,
    name,
    value,
    placeholder,
    disabled,
    onChange,
    options = [],
    ...props
}) => {
    return (
        <div className='relative'>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={cn(
                    'w-full appearance-none border border-primary text-base rounded-xl',
                    'p-5 pr-12 bg-transparent outline-none',
                    'text-ellipsis overflow-hidden'
                )}
                {...props}
            >
                {placeholder && <option value=''>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className='absolute top-1/2 right-4 flex -translate-y-1/2 pointer-events-none'>
                <ChevronDown className='size-5 stroke-2 shrink-0' />
            </div>
        </div>
    );
};

Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};
export default Select;
