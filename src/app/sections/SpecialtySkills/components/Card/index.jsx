import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { LazyImage } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Card = ({ icon, name, description }) => {
	return (
		<div className={cx('card')}>
			{icon && (
				<div className={cx('card-icon')}>
					<LazyImage src={icon} alt='icon' />
				</div>
			)}
			{name && <h3 className={cx('card-title')}>{name}</h3>}
			<div className={cx('card-saperator')}></div>
			{description && <p className={cx('card-description')}>{description}</p>}
		</div>
	);
};

Card.propTypes = {
	icon: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
};
export default Card;
