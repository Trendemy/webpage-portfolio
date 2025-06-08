import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const MenuToggle = ({ primary = false, active, onClick, ...props }) => {
   return (
      <button
         type='button'
         className={cx('btn-menu', { primary }, { active })}
         onClick={onClick}
         {...props}
      >
         <span></span>
         <span></span>
         <span></span>
      </button>
   );
};
MenuToggle.propTypes = {
   primary: PropTypes.bool,
   active: PropTypes.bool,
   onClick: PropTypes.func
};
export default MenuToggle;
