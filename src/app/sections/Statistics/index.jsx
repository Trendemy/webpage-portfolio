import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Statistics = ({ data = [], duration = 5 }) => {
	const [hasStartedCounting, setHasStartedCounting] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setHasStartedCounting(true);
		}
	}, [inView]);

	const isFloat = (num) => num % 1 !== 0;

	return (
		Array.isArray(data) &&
		data.length > 0 && (
			<section className={cx('section')} ref={ref}>
				<div className={cx('background')}>
					<div className={cx('line', 'line-left')}></div>
					<div className='container'>
						<div className={cx('wrapper')}>
							{data.map(
								(item, index) =>
									item.number > 0 && (
										<div className={cx('data')} key={index}>
											<p className={cx('number')}>
												{hasStartedCounting && (
													<CountUp
														start={0}
														end={item.number}
														decimals={isFloat(item.number) ? 1 : 0}
														duration={duration}
													/>
												)}
												{item.max && item.max !== 0 ? `/${item.max}` : '+'}
											</p>
											<p className={cx('separate')}></p>
											<p className={cx('name')}>{item.name}</p>
										</div>
									)
							)}
						</div>
					</div>
					<div className={cx('line', 'line-right')}></div>
				</div>
			</section>
		)
	);
};
Statistics.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			number: PropTypes.number.isRequired,
		})
	).isRequired,
	duration: PropTypes.number,
};
export default Statistics;
