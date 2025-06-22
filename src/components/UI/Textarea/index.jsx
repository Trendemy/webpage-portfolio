import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Textarea = ({
    placeholder,
    className,
    id,
    name,
    value,
    disabled,
    readOnly,
    onChange,
    rows,
    cols,
    required,
    resize,
    ...props
}) => {
    return (
        <textarea
            className={cn(
                'text-base bg-gray-100 rounded-xl outline-none p-5',
                { 'resize-none': !resize },
                className
            )}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            rows={rows}
            cols={cols}
            required={required}
            onChange={onChange}
            {...props}
        ></textarea>
    );
};

Textarea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    rows: PropTypes.number,
    cols: PropTypes.number,
    required: PropTypes.bool,
    resize: PropTypes.bool
};

export default Textarea;
