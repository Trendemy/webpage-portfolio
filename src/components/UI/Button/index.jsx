import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
	className,
	type = 'button',
	size = 'medium',
	style,
	primary,
	secondary,
	outline,
	disabled = false,
	href,
	to,
	onClick,
	children,
	...props
}) => {
	const classes = cx(
		'button',
		{ primary, secondary, size, outline, disabled },
		className
	);

	if (href) {
		return (
			<a
				href={disabled ? undefined : href}
				className={classes}
				target='_blank'
				rel='noopener noreferrer'
				{...props}
			>
				{children}
			</a>
		);
	}

	if (to) {
		return (
			<Link
				to={disabled ? '' : to}
				className={classes}
				{...props}
				onClick={(e) => disabled && e.preventDefault()}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			className={classes}
			style={style}
			onClick={disabled ? undefined : onClick}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	outline: PropTypes.bool,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	to: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.object,
	children: PropTypes.node.isRequired
};
export default Button;
