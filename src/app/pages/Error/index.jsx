import { useRouteError } from 'react-router';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { logger } from '@utils';

const cx = classNames.bind(styles);

const ErrorPage = () => {
	const error = useRouteError();
	logger('router error', error);
	return (
		<div className={cx('container')}>
			<h3>404 | NOT FOUND</h3>
		</div>
	);
};

export default ErrorPage;
