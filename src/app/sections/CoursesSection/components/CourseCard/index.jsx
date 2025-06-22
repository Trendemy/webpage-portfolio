import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from '~/components/UI';
import { Bookmark, Star, Student } from '~/components/Icons';
import { cn } from '~/utils';

const CourseCard = ({
    to,
    thumbnail,
    avatar,
    author,
    lesson,
    number,
    student,
    star,
    className
}) => {
    return (
        <Link
            className={cn(
                'flex flex-col border-2 rounded-2xl border-gray-400 transition-shadow cursor-pointer gap-5 px-5 py-10',
                className
            )}
            to={to}
        >
            <div className='flex'>
                <Image
                    src={thumbnail}
                    alt={lesson}
                    className='flex-1 aspect-[1/0.5] object-cover'
                />
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                <div className='flex items-center gap-5'>
                    <Image
                        src={avatar}
                        alt={author}
                        className='size-10 rounded-full object-cover'
                    />
                    <p className='text-base font-bold'>{author}</p>
                </div>
                <h3 className='text-2xl font-medium text-primary'>{lesson}</h3>
            </div>
            <div className='border border-gray-400 border-dashed' />
            <div className='flex justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <div className='size-4 flex text-secondary'>
                        <Bookmark className='shrink-0' />
                    </div>
                    <span>{number}</span>
                    <span>Bài giảng</span>
                </div>
                <div className='flex items-center text-sm gap-2'>
                    <div className='size-4 flex text-secondary'>
                        <Student className='shrink-0' />
                    </div>
                    <span>{student}</span>
                    <span>Học viên</span>
                </div>
                <div className='flex items-center text-sm gap-2'>
                    <div className='size-4 flex text-secondary'>
                        <Star className='shrink-0' />
                    </div>
                    <span>{star.toFixed(1)}</span>
                </div>
            </div>
        </Link>
    );
};

CourseCard.propTypes = {
    to: PropTypes.string,
    thumbnail: PropTypes.string,
    avatar: PropTypes.string,
    author: PropTypes.string,
    lesson: PropTypes.string,
    number: PropTypes.number,
    student: PropTypes.number,
    star: PropTypes.number,
    className: PropTypes.string
};
export default CourseCard;
