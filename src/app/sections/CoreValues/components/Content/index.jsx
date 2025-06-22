import PropTypes from 'prop-types';

const Content = ({ icon: Icon, title, desc }) => {
    return (
        <div className='flex flex-col border-l-[3px] border-secondary gap-3 pl-5 py-5'>
            <div className='flex items-center gap-3'>
                {Icon && (
                    <span className='size-10 rounded-full bg-primary/15 flex justify-center items-center'>
                        {<Icon className='size-5 fill-primary shrink-0' />}
                    </span>
                )}
                <h3 className='text-2xl font-medium'>{title}</h3>
            </div>
            <p className='text-paragraph'>{desc}</p>
        </div>
    );
};

Content.propTypes = {
    icon: PropTypes.func,
    title: PropTypes.string,
    desc: PropTypes.string
};
export default Content;
