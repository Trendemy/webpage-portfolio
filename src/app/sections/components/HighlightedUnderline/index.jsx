import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Underline } from '@components/Icons';
import { APP_NAME } from '@config/env';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

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
                  className={cx({
                     highlight: isExactHighlight
                  })}
               >
                  {words.map((word, i) => {
                     const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
                     const isAppName =
                        cleanWord.toLowerCase() === APP_NAME.toLowerCase();

                     return (
                        <span
                           key={i}
                           className={cx({
                              'text-brand': isAppName
                           })}
                        >
                           {word}
                        </span>
                     );
                  })}

                  {isExactHighlight && (
                     <span className={cx('underline')}>
                        <Underline />
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
