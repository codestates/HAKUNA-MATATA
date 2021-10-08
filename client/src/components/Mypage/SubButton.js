import PropTypes from 'prop-types';
import style from './css/SubButton.module.css';

const Button = ({ children, handleSubButton, focus }) => {
  return (
    <>
      <button
        className={focus ? `${style.button} ${style.click}` : style.button}
        onClick={() => handleSubButton(children)}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  handleSubButton: PropTypes.any.isRequired,
  focus: PropTypes.any.isRequired
};
export default Button;
