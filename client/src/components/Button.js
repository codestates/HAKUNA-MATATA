import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className={style.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
