import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Content = ({ className, icon: Icon, title, desc }) => {
	return (
		<div className={classNames(cx('content'), className)}>
			<div className={cx('heading')}>
				{Icon && <span className={cx('icon')}>{<Icon />}</span>}
				<h3 className={cx('title')}>{title}</h3>
			</div>
			<p className='text-paragraph'>{desc}</p>
		</div>
	);
};

Content.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.func,
	title: PropTypes.string,
	desc: PropTypes.string,
};
export default Content;
