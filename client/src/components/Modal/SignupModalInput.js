import React from 'react';
import style from './SignupModalInput.module.css';
import PropTypes from 'prop-types';

function SignupModalInput({ placeholder, password }) {
  return (
    <input
      type={password ? 'password' : 'text'}
      placeholder={placeholder}
      className={style.modalInput}
    />
  );
}

SignupModalInput.propTypes = {
  placeholder: PropTypes.node.isRequired,
  password: PropTypes.any
};
export default SignupModalInput;
