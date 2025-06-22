import { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from '~/components/Icons';
import { cn } from '~/utils';

const Question = ({ index, title, answer }) => {
    const [active, setActive] = useState(false);

    return (
        <div
            className={cn(
                'flex flex-col border-l-2 border-gray-400 py-3 pl-3 transition-all duration-150',
                { 'border-secondary': active }
            )}
        >
            <div className='flex justify-between'>
                <h3
                    className='text-xl font-semibold cursor-pointer'
                    onClick={() => setActive((a) => !a)}
                >
                    {index + '. ' + title}
                </h3>
                <div
                    className={cn(
                        'size-5 flex text-primary cursor-pointer transition-all duration-150 select-none',
                        { 'text-secondary-2 rotate-45': active }
                    )}
                    onClick={() => setActive((a) => !a)}
                >
                    <PlusCircle className='shrink-0' />
                </div>
            </div>
            <div
                className={cn(
                    'invisible grid grid-rows-[0fr] transition-all duration-150 overflow-hidden px-2',
                    {
                        'visible grid-rows-[1fr] py-2': active
                    }
                )}
            >
                <ul className='min-h-0'>
                    {answer.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Question.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    answer: PropTypes.string
};
export default Question;
