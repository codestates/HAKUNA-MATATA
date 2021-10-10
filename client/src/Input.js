import React from 'react';
import style from './css/Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ placeholder }) => {
  return <input placeholder={placeholder} className={style.input}></input>;
};

Input.propTypes = {
  placeholder: PropTypes.node.isRequired
};
export default Input;
