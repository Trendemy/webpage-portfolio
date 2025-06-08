import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Plus } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Chapter = ({ title, content, height, isShow, onToggle, refContent }) => {
	return (
		<div className={cx('frame', { show: isShow })}>
			<div className={cx('heading')} onClick={onToggle}>
				<h3 className={cx('title')}>{title}</h3>
				<div className={cx('icon')}>
					<Plus />
				</div>
			</div>
			<div className={cx('saperator')}></div>
			<div className={cx('box')}>
				<ul
					className={cx('chapters')}
					ref={refContent}
					style={{
						height: isShow ? height : 0,
					}}
				>
					{content.map((text, index) => (
						<li key={index} className={cx('chapter')}>
							{text}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

Chapter.propTypes = {
	title: PropTypes.string,
	content: PropTypes.array,
	height: PropTypes.number,
	isShow: PropTypes.bool,
	onToggle: PropTypes.func,
	refContent: PropTypes.func,
};
export default Chapter;
