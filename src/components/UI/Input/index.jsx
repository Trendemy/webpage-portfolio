import { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Input = ({
	id,
	name,
	type = 'text',
	label,
	icon: Icon,
	value,
	placeholder,
	readOnly,
	disabled,
	required,
	onChange,
	outline,
	...props
}) => {
	const generatedId = useMemo(
		() => id || Math.random().toString(36).slice(2, 11),
		[id]
	);

	return (
		<div className={cx('form-control', { outline })}>
			{label && <label htmlFor={generatedId}>{label}</label>}
			<div className={cx('form-input')}>
				<input
					type={type}
					value={value}
					id={generatedId}
					name={name}
					placeholder={placeholder}
					readOnly={readOnly}
					disabled={disabled}
					required={required}
					onChange={onChange}
					{...props}
				/>
				{Icon && (
					<span className={cx('icon')}>
						<Icon />
					</span>
				)}
			</div>
		</div>
	);
};

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number']),
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	icon: PropTypes.func,
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
};

export default Input;
