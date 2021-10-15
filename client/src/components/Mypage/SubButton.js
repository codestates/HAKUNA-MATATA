import React from 'react';
import PropTypes from 'prop-types';
import style from './SubButton.module.css';

const Button = ({ children, movePage, focus, getMypost }) => {
  return (
    <>
      <button
        className={focus ? `${style.button} ${style.click}` : style.button}
        onClick={() => {
          movePage(children);
          getMypost();
          alert();
        }}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  movePage: PropTypes.any.isRequired,
  focus: PropTypes.any.isRequired,
  getMypost: PropTypes.any
};
export default Button;
