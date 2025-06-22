import PropTypes from 'prop-types';
import { cn } from '~/utils';

const Section = ({ className, style, children }) => {
    return (
        <section className={cn('py-14', className)} style={style}>
            {children}
        </section>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

export default Section;
