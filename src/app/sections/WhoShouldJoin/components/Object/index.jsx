import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { LazyImage } from '@components/UI';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Object = ({ image, name, description }) => {
	return (
		<div className={cx('object')}>
			<LazyImage src={image} alt={name} className={cx('photo')} />
			<div className={cx('details')}>
				<h5 className={cx('name')}>{name}</h5>
				<p className={cx('desc')}>{description}</p>
			</div>
		</div>
	);
};

Object.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
export default Object;
