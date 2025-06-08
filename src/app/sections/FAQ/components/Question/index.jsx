import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { PlusCircle } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Question = ({ index, title, answer }) => {
	const [active, setActive] = useState(false);

	return (
		<div className={classNames(cx('box', { active }))}>
			<div className={cx('heading')} onClick={() => setActive((a) => !a)}>
				<h3 className={cx('title')}>{index + '. ' + title}</h3>
				<span className={cx('icon-container')}>
					<PlusCircle className={cx('icon-svg')} />
				</span>
			</div>
			<div className={cx('box-answer')}>
				<ul className={cx('box-answer__inner')}>
					{answer.split('\n').map((line, i) => (
						<li key={i}>{line}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

Question.propTypes = {
	index: PropTypes.number,
	title: PropTypes.string,
	answer: PropTypes.string
};
export default Question;
