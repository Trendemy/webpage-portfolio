import PropTypes from 'prop-types';
import { Image } from '~/components/UI';

const ObjectCard = ({ image, name, description }) => {
    return (
        <div className='flex items-center gap-5'>
            <div className='size-32 flex'>
                <Image
                    src={image}
                    alt={name}
                    className='rounded-full aspect-square object-cover'
                />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <h5 className='heading-4'>{name}</h5>
                <p className='text-paragraph'>{description}</p>
            </div>
        </div>
    );
};

ObjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default ObjectCard;
