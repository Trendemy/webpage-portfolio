import PropTypes from 'prop-types';
import classNames from 'classnames';
import { APP_NAME } from '@config/env';

const HighlightedSubtitle = ({ subtitle, className }) => {
	const subtitleParts = subtitle.split(new RegExp(`(${APP_NAME})`, 'gi'));
	return (
		<p className={classNames('subtitle', className)}>
			{subtitleParts.map((part, index) =>
				part.toLowerCase() === APP_NAME.toLowerCase() ? (
					<span key={index} className='text-brand'>
						{part}
					</span>
				) : (
					part
				)
			)}
		</p>
	);
};
HighlightedSubtitle.propTypes = {
	subtitle: PropTypes.string.isRequired,
	className: PropTypes.string
};
export default HighlightedSubtitle;
