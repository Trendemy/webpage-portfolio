import PropTypes from 'prop-types';
import { Plus } from '~/components/Icons';
import { cn } from '~/utils';

const Chapter = ({ title, content, isShow, onToggle }) => {
    return (
        <div
            className={cn('w-full h-fit bg-white rounded-3xl', {
                'h-full': isShow
            })}
        >
            <div
                className='flex justify-between items-center cursor-pointer select-none p-5'
                onClick={onToggle}
            >
                <h3 className='heading-4 text-primary'>{title}</h3>
                <div
                    className={cn(
                        'size-8 rounded-full bg-primary text-white flex justify-center items-center transition',
                        {
                            'rotate-45 bg-secondary-2': isShow
                        }
                    )}
                >
                    <Plus className='size-5 shrink-0 stroke-5' />
                </div>
            </div>
            <div
                className={cn('border-t border-gray-400 border-dashed', {
                    'opacity-0 invisible': !isShow
                })}
            />
            <div
                className={cn(
                    'grid grid-rows-[0fr] transition-all overflow-hidden',
                    {
                        'grid-rows-[1fr] ': isShow
                    }
                )}
            >
                <ul
                    className={cn(
                        'min-h-0 opacity-0 invisible transition-all px-5',
                        {
                            'opacity-100 visible p-5': isShow
                        }
                    )}
                >
                    {content.map((text, index) => (
                        <li
                            key={index}
                            className='relative before:content before:absolute before:size-3 before:bg-primary before:rounded-full before:top-1/2 before:left-0 before:-translate-y-1/2 pl-5'
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Chapter.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,
    isShow: PropTypes.bool,
    onToggle: PropTypes.func
};
export default Chapter;
