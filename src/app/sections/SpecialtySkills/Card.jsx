import PropTypes from 'prop-types';
import { Image } from '~/components/UI';

const Card = ({ icon, name, description }) => {
    return (
        <div className='flex flex-col items-center border border-secondary rounded-lg gap-3 p-5'>
            {icon && (
                <div className='size-20 flex justify-center items-center rounded-full bg-primary'>
                    <Image src={icon} alt='icon' className='size-10' />
                </div>
            )}
            {name && <h3 className='heading-4 text-center'>{name}</h3>}
            <div className='w-4/5 border-t border-gray-400 border-dashed' />
            {description && (
                <p className='text-paragraph text-center'>{description}</p>
            )}
        </div>
    );
};

Card.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
};
export default Card;
