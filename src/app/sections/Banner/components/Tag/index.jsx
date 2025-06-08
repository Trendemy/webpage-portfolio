import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Tag = ({ className, icon, name, number }) => {
	return (
		<div className={classNames(cx('tag'), className)}>
			<div className={cx('icon')}>{icon}</div>
			<div className={cx('content')}>
				<p>{name}</p>
				<p>{number}</p>
			</div>
		</div>
	);
};

Tag.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.node,
	name: PropTypes.string,
	number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Tag;
