import PropTypes from 'prop-types';
import { useHeaderHeight, useRoutes } from '~/hooks';
import Navbar from '~/app/layouts/Header/Navbar';
import Section from '~/app/layouts/Header/Section';

const Header = ({ onHeightChange }) => {
    const { routes, sections } = useRoutes();
    const { ref, offset } = useHeaderHeight(onHeightChange);

    return (
        <header
            className='fixed top-0 inset-x-0 bg-white select-none shadow-md xl:shadow-none z-10'
            ref={ref}
        >
            <Navbar routes={routes} />
            {sections && <Section sections={sections} offset={offset} />}
        </header>
    );
};

Header.propTypes = {
    onHeightChange: PropTypes.func
};

export default Header;
