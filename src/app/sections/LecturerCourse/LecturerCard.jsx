import PropTypes from 'prop-types';
import { Button, Image } from '~/components/UI';
import { Facebook, In } from '~/components/Icons';

const LecturerCard = ({ avatar, name, expertise, bio, facebook, linkedIn }) => {
    return (
        <div className='flex flex-col xl:flex-row'>
            <div className='flex-1 flex'>
                <Image
                    src={avatar}
                    alt={name}
                    className='rounded-t-3xl xl:rounded-tr-none xl:rounded-s-3xl object-cover'
                />
            </div>
            <div className='flex-[1.5] border border-gray-400 border-t-0 xl:border-t xl:border-s-0 rounded-b-3xl xl:rounded-bl-none xl:rounded-e-3xl p-5'>
                <div className='flex flex-col items-center xl:items-start'>
                    <h3 className='heading-4 mb-2'>{name}</h3>
                    <span className='text-paragraph font-bold'>
                        {expertise}
                    </span>
                    <div className='w-full border-t border-gray-400 border-dashed my-1.5' />
                    <p className='text-paragraph'>{bio}</p>
                </div>
                <div className='flex justify-center xl:justify-end gap-3 mt-5'>
                    <Button
                        href={facebook}
                        primary
                        outline
                        className='flex justify-center items-center'
                    >
                        <Facebook className='shrink-0 h-3' />
                    </Button>
                    <Button
                        href={linkedIn}
                        primary
                        outline
                        className='flex justify-center items-center'
                    >
                        <In className='shrink-0 h-3' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

LecturerCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    expertise: PropTypes.string,
    bio: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string
};
export default LecturerCard;
