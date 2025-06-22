import PropTypes from 'prop-types';
import { Article, Certificate, Project, Education } from '~/components/Icons';
import { cn } from '~/utils';

const icons = {
    ARTICLE: Article,
    CERTIFICATE: Certificate,
    PROJECT: Project,
    EDUCATION: Education
};

const EducationContainer = ({ title, data, animation }) => {
    return (
        <div className='' data-aos={animation}>
            <h3 className='heading-3 uppercase text-center'>{title}</h3>
            <EducationDesktop data={data} />
            <EducationMobile data={data} />
        </div>
    );
};

const EducationDesktop = ({ data }) => {
    return (
        <div className='w-full hidden xl:flex items-center rounded-full shadow-[inset_2px_0px_2px_#45454533,_inset_0px_1px_4px_#57565626] gap-2 p-2 my-44'>
            {data.map((item, index) => {
                const Icon = icons[item.icon];

                return (
                    <div
                        key={index}
                        className={cn(
                            'flex-1 relative h-14 flex justify-center items-center',
                            index % 2 == 0
                                ? 'text-primary bg-primary'
                                : 'text-secondary bg-secondary',
                            {
                                'rounded-s-full': index === 0,
                                'rounded-e-full': data.length - 1 === index
                            }
                        )}
                    >
                        <div
                            className={cn(
                                'absolute w-1 h-28',
                                index % 2 == 0
                                    ? 'bottom-full bg-primary'
                                    : 'top-full bg-secondary'
                            )}
                        >
                            <div
                                className={cn(
                                    'absolute size-12 left-1/2 flex justify-center items-center rounded-full shadow-[2px_0px_2px_0px_#45454533_inset,_0px_1px_4px_0px_#57565626_inset] -translate-x-1/2',
                                    index % 2 == 0 ? 'bottom-full' : 'top-full'
                                )}
                            >
                                <div className='size-10 flex justify-center items-center border-3 rounded-full'>
                                    <Icon className='size-5' />
                                </div>
                            </div>
                        </div>
                        <h4 className='heading-4 font-bold text-white'>
                            {item.year}
                        </h4>
                        <div
                            className={cn(
                                'absolute flex text-center gap-2',
                                index % 2 == 0
                                    ? 'top-full flex-col mt-5'
                                    : 'bottom-full flex-col-reverse mb-5'
                            )}
                        >
                            <h5 className='text-base text-gray-900 font-bold'>
                                {item.title}
                            </h5>
                            <p className='text-gray-500'>{item.details}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const EducationMobile = ({ data }) => {
    return (
        <div className='xl:hidden flex flex-col gap-15 my-20'>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className='flex justify-between items-center'
                    >
                        <div className='relative size-20 flex justify-center items-center rounded-full shadow-[inset_2px_0px_2px_0px_#45454533,_inset_0px_1px_4px_0px_#57565626] p-1'>
                            <div className='absolute size-full scale-120 rounded-full border-2 border-[#889F9B] border-t-transparent border-b-transparent rotate-45'>
                                <div className='absolute size-full before:content before:absolute before:top-1/2 before:right-full before:h-0.5 before:w-full before:bg-[#889F9B] before:-translate-y-1/2 after:content after:absolute after:bottom-full after:h-10 after:w-0.5 after:bg-[#889F9B] after:left-1/2 after:-translate-x-1/2 -rotate-45'>
                                    {index === 0 && (
                                        <div className='absolute bottom-full size-2 border-2 border-[#889F9B] rounded-full left-1/2 -translate-x-1/2 -translate-y-10' />
                                    )}
                                </div>
                                {data.length - 1 === index && (
                                    <div className='absolute size-full after:content after:absolute after:top-full after:h-10 after:w-0.5 after:bg-[#889F9B] after:left-1/2 after:-translate-x-1/2 -rotate-45'>
                                        <div className='absolute top-full size-2 border-2 border-[#889F9B] rounded-full left-1/2 -translate-x-1/2 translate-y-10' />
                                    </div>
                                )}
                            </div>
                            <div
                                className={cn(
                                    'size-full border-5 flex justify-center items-center rounded-full',
                                    index % 2 === 0
                                        ? 'border-secondary text-secondary'
                                        : 'border-primary text-primary'
                                )}
                            >
                                <h3 className='text-xl font-semibold'>
                                    {item.year}
                                </h3>
                            </div>
                        </div>
                        <div className='flex-1 h-0.5 bg-[#889F9B] ml-1.5' />
                        <div className='size-2 border-2 border-[#889F9B] rounded-full mr-1.5' />
                        <div className='w-[70%] h-20 flex text-center rounded-full shadow-[inset_2px_0px_2px_0px_#45454533,_inset_0px_1px_4px_0px_#57565626] overflow-hidden p-1'>
                            <div
                                className={cn(
                                    'size-full border-3 rounded-full overflow-y-auto p-2',
                                    index % 2 === 0
                                        ? 'border-secondary'
                                        : 'border-primary'
                                )}
                            >
                                <h5 className='text-sm font-bold'>
                                    {item.title}
                                </h5>
                                <p className='text-[10px] text-gray-500'>
                                    {item.details}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

EducationContainer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    animation: PropTypes.string
};
EducationDesktop.propTypes = {
    data: PropTypes.array
};
EducationMobile.propTypes = {
    data: PropTypes.array
};

export default EducationContainer;
