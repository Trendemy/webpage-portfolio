import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Textarea = ({
	placeholder,
	id,
	name,
	value,
	disabled,
	readOnly,
	onChange,
	rows,
	cols,
	required,
	...props
}) => {
	return (
		<div className={cx('form-text')}>
			<textarea
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readOnly}
				rows={rows}
				cols={cols}
				required={required}
				onChange={onChange}
				{...props}
			></textarea>
		</div>
	);
};

Textarea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	onChange: PropTypes.func,
	rows: PropTypes.number,
	cols: PropTypes.number,
	required: PropTypes.bool,
};

export default Textarea;
