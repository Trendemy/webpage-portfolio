import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Quotes } from '@components/Icons';
import { LazyImage } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

/**
 * Card Component
 *
 * - Displays user feedback with an avatar, name, role, and description.
 * - Includes a **quote icon** to highlight the testimonial.
 * - Uses **LazyImage** for optimized image loading.
 * @component
 * @param {Object} props - Component props.
 * @param {Object} [props.style={}] - Custom styles for the card.
 * @param {string} props.avatar - User's avatar image URL.
 * @param {string} props.name - User's name.
 * @param {string} props.role - User's role.
 * @param {string} props.desc - User's feedback text.
 */
const Card = ({ style, avatar, name, role, desc }) => {
	return (
		<div className={cx('card')} style={style}>
			<div className={cx('desc')}>
				<p className='text-paragraph'>{desc}</p>
			</div>
			<div className={cx('information')}>
				<LazyImage src={avatar} alt={name} className={cx('avatar')} />
				<div className={cx('details')}>
					<h3 className={cx('name')}>{name}</h3>
					<p className={cx('role')}>{role}</p>
				</div>
				<span className={cx('icon')}>
					<Quotes />
				</span>
			</div>
		</div>
	);
};

Card.propTypes = {
	style: PropTypes.object,
	avatar: PropTypes.string,
	name: PropTypes.string,
	role: PropTypes.string,
	desc: PropTypes.string
};

export default Card;
