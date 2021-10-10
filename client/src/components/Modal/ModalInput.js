import React from 'react';
import style from './css/ModalInput.module.css';
import PropTypes from 'prop-types';
function ModalInput({ placeholder, password }) {
  return (
    <input
      type={password ? 'password' : 'text'}
      placeholder={placeholder}
      className={style.modalInput}
    />
  );
}

ModalInput.propTypes = {
  placeholder: PropTypes.node.isRequired,
  password: PropTypes.any
};
export default ModalInput;
