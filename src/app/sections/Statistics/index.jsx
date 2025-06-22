import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const Statistics = ({ data = [], duration = 5 }) => {
    const [hasStartedCounting, setHasStartedCounting] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    useEffect(() => {
        if (inView) {
            setHasStartedCounting(true);
        }
    }, [inView]);

    const isFloat = (num) => num % 1 !== 0;

    return (
        Array.isArray(data) &&
        data.length > 0 && (
            <section
                className='relative after:content after:absolute after:size-15 xl:after:size-20 after:bg-secondary after:rounded-2xl xl:after:-top-12 after:-top-5 after:right-12 after:rotate-[60deg]'
                ref={ref}
            >
                <div className='relative bg-primary xl:p-20 py-32 overflow-hidden'>
                    <div className='absolute top-12 xl:top-1/2 xl:left-0 w-full xl:w-24 h-[1px] bg-white xl:-translate-y-1/2' />
                    <div className='absolute top-0 xl:top-1/2 left-1/2 xl:left-16 w-[1px] h-20 xl:h-3/4 bg-white xl:-translate-y-1/2 -translate-x-1/2 xl:translate-x-0' />
                    <div className='container'>
                        <div className='flex flex-col xl:flex-row justify-between items-center xl:gap-0 gap-30'>
                            {data.map(
                                (item, index) =>
                                    item.number > 0 && (
                                        <div
                                            className='flex flex-col justify-center items-center text-white text-4xl font-bold uppercase gap-3'
                                            key={index}
                                        >
                                            <span>
                                                {hasStartedCounting && (
                                                    <CountUp
                                                        start={0}
                                                        end={item.number}
                                                        decimals={
                                                            isFloat(item.number)
                                                                ? 1
                                                                : 0
                                                        }
                                                        duration={duration}
                                                    />
                                                )}
                                                {item.max && item.max !== 0
                                                    ? `/${item.max}`
                                                    : '+'}
                                            </span>
                                            <div className='w-full border border-white' />
                                            <span>{item.name}</span>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                    <div className='absolute xl:top-1/2 bottom-12 xl:right-0 w-full xl:w-24 h-[1px] bg-white xl:-translate-y-1/2' />
                    <div className='absolute xl:top-1/2 bottom-0 right-1/2 xl:right-16 w-[1px] h-20 xl:h-3/4 bg-white xl:-translate-y-1/2 translate-x-1/2 xl:translate-x-0' />
                </div>
            </section>
        )
    );
};
Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired
        })
    ).isRequired,
    duration: PropTypes.number
};
export default Statistics;
