import { useEffect, useRef, useState } from 'react';
import { NavLink, Link as RouterLink, useLocation } from 'react-router';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useClickOutside, useIndexes, useRoutes } from '@hooks';
import { Register } from '@components/ModalForm';
import { Button, MenuToggle } from '@components/UI';
import { ChevronDown, LogoHeader } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Header = ({ onHeightChange }) => {
   const routes = useRoutes();
   const headerRef = useRef(null);
   const location = useLocation();
   const [offset, setOffset] = useState(0);

   const sectionData = routes.find((route) => {
      return (
         location.pathname === route.path ||
         location.pathname.startsWith(route.path + '/')
      );
   });

   useEffect(() => {
      const updateHeaderHeight = () => {
         const heightHeader = headerRef.current?.getBoundingClientRect().height;
         if (heightHeader) {
            setOffset(heightHeader);
            onHeightChange(heightHeader);
         }
      };
      updateHeaderHeight();
      window.addEventListener('resize', updateHeaderHeight);
      return () => {
         window.removeEventListener('resize', updateHeaderHeight);
      };
   }, [onHeightChange]);

   return (
      <header className={cx('navbar')} ref={headerRef}>
         <Nav routes={routes} />
         {sectionData?.sections && (
            <Section sections={sectionData?.sections || []} offset={offset} />
         )}
      </header>
   );
};

const Nav = ({ routes = [] }) => {
   const navRef = useRef(null);
   const [openNav, setOpenNav] = useState(false);
   const [openForm, setOpenForm] = useState(false);
   useClickOutside(navRef, () => setOpenNav(false));

   return (
      <div className={cx('navbar-main')}>
         <div className='container'>
            <div className={cx('wrapper')}>
               <div className={cx('navbar-brand')}>
                  <RouterLink to='' className='text-brand'>
                     <LogoHeader />
                  </RouterLink>
               </div>
               <div ref={navRef}>
                  <ul className={cx('navbar-nav', { open: openNav })}>
                     {routes.map(
                        (route) =>
                           route.title && (
                              <li className={cx('nav-item')} key={route.path}>
                                 <NavLink
                                    onClick={(e) =>
                                       route.redirect === false &&
                                       e.preventDefault()
                                    }
                                    to={route.path}
                                    className={({ isActive }) =>
                                       cx(
                                          'nav-link',
                                          {
                                             'cursor-default':
                                                route.redirect === false
                                          },
                                          { active: isActive }
                                       )
                                    }
                                 >
                                    {route.title}
                                    {route.hasSubs && (
                                       <span
                                          className={classNames(
                                             cx('nav-link__icon')
                                          )}
                                       >
                                          <ChevronDown />
                                       </span>
                                    )}
                                 </NavLink>
                                 {route.hasSubs && (
                                    <Dropdown items={route.subs} />
                                 )}
                              </li>
                           )
                     )}
                     <li className={cx('nav-item')}>
                        <Button
                           secondary
                           className={cx('btn-register')}
                           onClick={() => setOpenForm(true)}
                        >
                           Đăng ký ngay
                        </Button>
                        <Register
                           open={openForm}
                           onClose={() => setOpenForm(false)}
                        />
                     </li>
                  </ul>
                  <div className={cx('navbar-toggle')}>
                     <MenuToggle
                        primary
                        active={openNav}
                        onClick={() => setOpenNav((o) => !o)}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const Section = ({ sections = [], offset = 0 }) => {
   const sectionRef = useRef(null);
   const [openSection, setOpenSection] = useState(false);
   useClickOutside(sectionRef, () => setOpenSection(false));
   return (
      <div className={cx('navbar-sections')} ref={sectionRef}>
         <div className='container'>
            <div className={cx('navbar-sections-toggle')}>
               <MenuToggle
                  active={openSection}
                  onClick={() => setOpenSection((o) => !o)}
               />
            </div>
            <ul className={cx('navbar-sections-nav', { open: openSection })}>
               {sections.map((section, index) => (
                  <li className={cx('nav-item')} key={section.id}>
                     <Link
                        to={section.id}
                        key={index}
                        className={cx('nav-link')}
                        activeClass={cx('active')}
                        offset={-offset}
                        spy={true}
                        smooth={true}
                     >
                        {section.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

const Dropdown = ({ items = [] }) => {
   const { toggle, hasIndex } = useIndexes();

   return (
      <ul className={cx('dropdown')}>
         {items.map((item, index) => (
            <li
               key={index}
               className={cx('dropdown-item', {
                  active: hasIndex(index)
               })}
               onClick={item.subs ? () => toggle(index) : undefined}
            >
               <p className={cx('dropdown-item__heading')}>
                  <span className={cx('dropdown-item__label')}>
                     {item.title}
                  </span>
                  {item.subs && (
                     <span className={cx('dropdown-item__icon')}>
                        <ChevronDown />
                     </span>
                  )}
               </p>
               {item.subs && (
                  <SubMenu items={item.subs} isOpen={hasIndex(index)} />
               )}
            </li>
         ))}
      </ul>
   );
};

const SubMenu = ({ items = [], isOpen }) => {
   const { toggle, hasIndex } = useIndexes();

   return (
      <div
         className={cx('box-menu', { open: isOpen })}
         onClick={(e) => e.stopPropagation()}
      >
         <ul className={cx('menu')}>
            {items.map((item, index) => (
               <li
                  key={index}
                  className={cx('menu-item', {
                     active: hasIndex(index)
                  })}
                  onClick={item.subs ? () => toggle(index) : undefined}
               >
                  <NavLink to={item.path} className={cx('menu-item__heading')}>
                     <span className={cx('menu-item__label')}>
                        {item.title}
                     </span>
                     {item.subs && (
                        <span className={cx('menu-item__icon')}>
                           <ChevronDown />
                        </span>
                     )}
                  </NavLink>
                  {item.subs && (
                     <SubMenu items={item.subs} isOpen={hasIndex(index)} />
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};

Header.propTypes = {
   onHeightChange: PropTypes.func
};

Nav.propTypes = {
   routes: PropTypes.arrayOf(
      PropTypes.shape({
         path: PropTypes.string.isRequired,
         title: PropTypes.string,
         subs: PropTypes.array
      })
   )
};

Section.propTypes = {
   sections: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired
      })
   ),
   offset: PropTypes.number
};

Dropdown.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string.isRequired,
         subs: PropTypes.array
      })
   )
};

SubMenu.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         path: PropTypes.string.isRequired,
         title: PropTypes.string.isRequired,
         subs: PropTypes.array
      })
   ),
   isOpen: PropTypes.bool
};

export default Header;
