import classNames from 'classnames/bind';
import { APP_NAME } from '@config/env';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const LoadingPage = () => {
	return (
		<div className={cx('loading-page')}>
			<span className={cx('app-name')}>{APP_NAME}</span>
		</div>
	);
};

export default LoadingPage;
