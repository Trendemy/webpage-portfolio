import PropTypes from 'prop-types';
import { useIndexes } from '~/hooks';
import { ChevronDown } from '~/components/Icons';
import { cn } from '~/utils';
import SubMenu from '~/app/layouts/Header/SubMenu';

const Dropdown = ({ items = [] }) => {
    const { toggle, hasIndex } = useIndexes();

    return (
        <ul
            className={cn(
                'dropdown-content absolute w-max top-0 left-0 text-base font-medium text-gray-900 bg-white rounded-md flex flex-col justify-center shadow-[0_1px_12px_rgba(0,0,0,0.12)] -translate-x-full p-3',
                'xl:max-w-80 xl:top-full xl:left-1/2 xl:-translate-x-1/2 z-11'
            )}
        >
            {items.map((item, index) => (
                <li
                    key={index}
                    onClick={item.subs ? () => toggle(index) : undefined}
                >
                    <div className='flex justify-between items-center gap-2 cursor-pointer hover:text-secondary-2 transition-colors'>
                        <span className='flex-1'>{item.title}</span>
                        {item.subs && (
                            <div
                                className={cn('size-4 flex transition-all', {
                                    'rotate-180': hasIndex(index)
                                })}
                            >
                                <ChevronDown className='stroke-3 shrink-0' />
                            </div>
                        )}
                    </div>
                    {item.subs && (
                        <SubMenu items={item.subs} isOpen={hasIndex(index)} />
                    )}
                </li>
            ))}
        </ul>
    );
};

Dropdown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subs: PropTypes.array
        })
    )
};

export default Dropdown;
