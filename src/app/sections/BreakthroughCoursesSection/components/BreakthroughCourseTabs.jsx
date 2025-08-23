import PropTypes from 'prop-types';
import { cn } from '~/utils';

function BreakthroughCourseTabs({ data, tab, setTab }) {
    return (
        <div className='flex flex-wrap gap-2 px-5'>
            {data.map((type) => (
                <button
                    key={type.id}
                    className={cn(
                        'min-w-32 text-base text-black font-medium bg-white text-center rounded-full cursor-pointer px-3 py-2',
                        {
                            'text-white bg-secondary-2': tab === type.id
                        }
                    )}
                    onClick={() => setTab(type.id)}
                >
                    {type.title}
                </button>
            ))}
        </div>
    );
}

BreakthroughCourseTabs.propTypes = {
    data: PropTypes.array,
    tab: PropTypes.string,
    setTab: PropTypes.func
};
export default BreakthroughCourseTabs;
