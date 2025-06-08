import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Button, LazyImage } from '@components/UI';
import { Facebook, In } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Lecturer = ({ avatar, name, expertise, bio, facebook, linkedIn }) => {
	return (
		<div className={cx('card')}>
			<div className={cx('box-avatar')}>
				<LazyImage src={avatar} alt={name} className={cx('avatar')} />
			</div>
			<div className={cx('details')}>
				<div className='information'>
					<h3 className={cx('name')}>{name}</h3>
					<span className={cx('expertise')}>{expertise}</span>
					<p className={cx('bio')}>{bio}</p>
				</div>
				<div className={cx('contact')}>
					<Button href={facebook} primary outline className={cx('btn')}>
						<Facebook />
					</Button>
					<Button href={linkedIn} primary outline className={cx('btn')}>
						<In />
					</Button>
				</div>
			</div>
		</div>
	);
};

Lecturer.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	expertise: PropTypes.string,
	bio: PropTypes.string,
	facebook: PropTypes.string,
	linkedIn: PropTypes.string
};
export default Lecturer;
