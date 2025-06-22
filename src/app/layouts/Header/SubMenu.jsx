import { NavLink } from 'react-router';
import PropTypes from 'prop-types';
import { useIndexes } from '~/hooks';
import { ChevronDown } from '~/components/Icons';
import { cn } from '~/utils';

const SubMenu = ({ items = [], isOpen }) => {
    const { toggle, hasIndex } = useIndexes();

    return (
        <div
            className={cn(
                'grid grid-rows-[0fr] overflow-hidden transition-all',
                {
                    'grid-rows-[1fr] mt-0.5': isOpen
                }
            )}
            onClick={(e) => e.stopPropagation()}
        >
            <ul className='flex flex-col justify-center gap-1 overflow-hidden'>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={cn(
                            'min-h-0 px-1 transition-all duration-150 ease-in-out',
                            {
                                active: hasIndex(index)
                            }
                        )}
                        onClick={item.subs ? () => toggle(index) : undefined}
                    >
                        <NavLink
                            to={item.path}
                            className='flex justify-between items-center cursor-pointer gap-1 hover:text-secondary-2 transition-colors'
                        >
                            <span className='flex-1'>{item.title}</span>
                            {item.subs && (
                                <span className='size-4 stroke-3 shrink-0'>
                                    <ChevronDown />
                                </span>
                            )}
                        </NavLink>
                        {item.subs && (
                            <SubMenu
                                items={item.subs}
                                isOpen={hasIndex(index)}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
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

export default SubMenu;
