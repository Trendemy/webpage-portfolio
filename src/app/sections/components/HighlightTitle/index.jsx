import PropTypes from 'prop-types';
import { APP_NAME } from '~/config/env';
import { Underline as UnderlineIcon } from '~/components/Icons';
import { cn } from '~/utils';

const HighlightTitle = ({
    as: Tag,
    title,
    highlight = '',
    className,
    children
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

                        {isExactHighlight && children}
                    </span>
                );
            })}
        </Tag>
    );
};

const Underline = ({ className }) => {
    return (
        <div
            className={cn(
                'absolute inset-x-0 bottom-0 flex justify-center items-center text-secondary',
                className
            )}
        >
            <UnderlineIcon className='w-full shrink-0' />
        </div>
    );
};
HighlightTitle.Underline = Underline;

Underline.propTypes = {
    className: PropTypes.string
};
HighlightTitle.propTypes = {
    as: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};
export default HighlightTitle;
