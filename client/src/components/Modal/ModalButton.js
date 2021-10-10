import React from 'react';
import PropTypes from 'prop-types';
import style from './css/ModalButton.module.css';

function ModalButton({ children, oauth }) {
  return (
    <button className={oauth === true ? style.modalOauth : style.modalButton}>
      {children}
    </button>
  );
}
ModalButton.propTypes = {
  children: PropTypes.any.isRequired,
  oauth: PropTypes.any
};
export default ModalButton;
