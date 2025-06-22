import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Label = ({ id, className, htmlFor, children, ...props }) => (
    <label
        className={cn('text-base font-normal text-gray-900', className)}
        htmlFor={htmlFor}
        id={id}
        {...props}
    >
        {children}
    </label>
);

Label.propTypes = {
    id: PropTypes.string,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export default Label;
