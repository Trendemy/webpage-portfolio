import PropTypes from 'prop-types';
import { Underline } from '~/components/Icons';
import { APP_NAME } from '~/config/env';

const HighlightedUnderline = ({
    title,
    highlight = '',
    className,
    as: Tag
}) => {
    const parts = highlight
        ? title.split(new RegExp(`(${highlight})`, 'gi'))
        : [title];
    return (
        <Tag className={className}>
            {parts.map((part, index) => {
                const isExactHighlight =
                    part.toLowerCase() === highlight.toLowerCase();
                const words = part.split(/(\s+)/);
                return (
                    <span
                        key={index}
                        className={
                            isExactHighlight
                                ? 'relative w-fit text-primary whitespace-nowrap'
                                : ''
                        }
                    >
                        {words.map((word, i) => {
                            const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
                            const isAppName =
                                cleanWord.toLowerCase() ===
                                APP_NAME.toLowerCase();

                            return (
                                <span
                                    key={i}
                                    className={isAppName ? 'text-brand' : ''}
                                >
                                    {word}
                                </span>
                            );
                        })}

                        {isExactHighlight && (
                            <span className='absolute inset-x-0 bottom-0 flex justify-center items-center text-secondary translate-y-4/5'>
                                <Underline className='shrink-0' />
                            </span>
                        )}
                    </span>
                );
            })}
        </Tag>
    );
};

HighlightedUnderline.propTypes = {
    as: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    className: PropTypes.string
};
export default HighlightedUnderline;
