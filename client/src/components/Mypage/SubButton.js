import React from 'react';
import PropTypes from 'prop-types';
import style from './SubButton.module.css';

const Button = ({ children, movePage, focus }) => {
  return (
    <>
      <button
        className={focus ? `${style.button} ${style.click}` : style.button}
        onClick={() => movePage(children)}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  movePage: PropTypes.any.isRequired,
  focus: PropTypes.any.isRequired
};
export default Button;
