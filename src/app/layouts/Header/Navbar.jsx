import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import { useClickOutside } from '~/hooks';
import { Register } from '~/components/ModalForm';
import Dropdown from '~/app/layouts/Header/Dropdown';
import { Button, MenuToggle } from '~/components/UI';
import { ChevronDown, LogoHeader } from '~/components/Icons';
import { cn } from '~/utils';

const Navbar = ({ routes = [] }) => {
    const [openNav, setOpenNav] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const { ref } = useClickOutside(() => setOpenNav(false));

    return (
        <div className='container'>
            <div className='flex justify-between items-center my-2.5'>
                <div className='h-fit flex justify-center items-center'>
                    <Link to='/'>
                        <LogoHeader />
                    </Link>
                </div>
                <div ref={ref} className='z-20'>
                    <ul
                        className={cn(
                            'absolute w-max top-full right-0 flex flex-col justify-center items-center bg-white xl:static xl:flex-row xl:translate-y-0 xl:rounded-none xl:p-0 xl:shadow-none xl:gap-12 xl:visible xl:opacity-100 xl:scale-100 transition-all duration-150 rounded-md shadow-[0_1px_12px_rgba(0,0,0,0.12)] gap-5 p-2',
                            openNav
                                ? 'visible opacity-100 scale-100'
                                : 'invisible opacity-0 scale-95'
                        )}
                    >
                        {routes.map(
                            (route) =>
                                route.title && (
                                    <li
                                        className='relative dropdown'
                                        key={route.path}
                                    >
                                        <NavLink
                                            onClick={(e) =>
                                                route.redirect === false &&
                                                e.preventDefault()
                                            }
                                            to={route.path}
                                            className={({ isActive }) =>
                                                cn(
                                                    'relative inline-flex items-center text-lg font-bold text-gray-900 gap-2 transition-colors',
                                                    'after:content after:w-0 after:h-0.5 after:absolute after:left-1/2 after:-bottom-2.5 after:rounded-full hover:after:w-full after:bg-secondary-2 after:-translate-x-1/2 after:transition-[width]',
                                                    {
                                                        'cursor-default':
                                                            route.redirect ===
                                                            false
                                                    },
                                                    'hover:text-secondary-2',
                                                    {
                                                        'text-secondary-2 after:w-full mb-3 xl:mb-0':
                                                            isActive
                                                    }
                                                )
                                            }
                                        >
                                            {route.title}
                                            {route.hasSubs && (
                                                <div className='size-5 flex'>
                                                    <ChevronDown className='stroke-3 shrink-0' />
                                                </div>
                                            )}
                                        </NavLink>
                                        {route.hasSubs && (
                                            <Dropdown items={route.subs} />
                                        )}
                                    </li>
                                )
                        )}
                        <li className={cn('nav-item')}>
                            <Button secondary onClick={() => setOpenForm(true)}>
                                Đăng ký ngay
                            </Button>
                            <Register
                                open={openForm}
                                onClose={() => setOpenForm(false)}
                            />
                        </li>
                    </ul>
                    <div className='flex xl:hidden'>
                        <MenuToggle
                            active={openNav}
                            onClick={() => setOpenNav((o) => !o)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string,
            subs: PropTypes.array
        })
    )
};

export default Navbar;
