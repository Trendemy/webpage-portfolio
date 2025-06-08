import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ChevronDown } from '@components/Icons';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Select = ({
	id,
	name,
	label,
	value,

	placeholder,
	disabled,
	onChange,
	options = [],
	...props
}) => {
	return (
		<div className={cx('form-control')}>
			{label && <label>{label}</label>}
			<div className={cx('form-select')}>
				<select
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					disabled={disabled}
					{...props}
				>
					{placeholder && <option value=''>{placeholder}</option>}
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
				<span className={cx('icon')}>
					<ChevronDown />
				</span>
			</div>
		</div>
	);
};

Select.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};
export default Select;
