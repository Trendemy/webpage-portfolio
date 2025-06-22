import PropTypes from 'prop-types';
import { Quotes } from '~/components/Icons';
import { Image } from '~/components/UI';

/**
 * Card Component
 *
 * - Displays user feedback with an avatar, name, role, and description.
 * - Includes a **quote icon** to highlight the testimonial.
 * - Uses **Image** for optimized image loading.
 * @component
 * @param {Object} props - Component props.
 * @param {Object} [props.style={}] - Custom styles for the card.
 * @param {string} props.avatar - User's avatar image URL.
 * @param {string} props.name - User's name.
 * @param {string} props.role - User's role.
 * @param {string} props.desc - User's feedback text.
 */
const Card = ({ avatar, name, role, desc }) => {
    return (
        <div className='w-full flex flex-col gap-5'>
            <div>
                <p className='text-paragraph'>{desc}</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className='size-20'>
                    <Image
                        src={avatar}
                        alt={name}
                        className='aspect-square rounded-full object-cover'
                    />
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='text-lg font-bold'>{name}</h3>
                    <p className='text-lg font-normal text-primary'>{role}</p>
                </div>
                <div className='w-12 flex mb-auto -translate-y-5'>
                    <Quotes className='shrink-0 fill-primary' />
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    desc: PropTypes.string
};

export default Card;
