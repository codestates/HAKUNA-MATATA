import React from 'react';
import style from './LoginModal.module.css';
import ModalInput from './ModalInput';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

function LoginModal({ handleSignupModal, handleLoginModal }) {
  const openLoginModal = () => {
    handleLoginModal();
    handleSignupModal();
  };

  return ReactDOM.createPortal(
    <div className={style.containerWrap}>
      <div className={style.containerbg} onClick={handleLoginModal}></div>
      <div className={style.container}>
        <h2 className={style.title}>로그인</h2>
        <div className={style.modalExplain}>하쿠나 마타타에 로그인 하세요.</div>
        <div className={style.inputBox}>
          <ModalInput />
        </div>
        <div className={style.signup} onClick={openLoginModal}>
          하쿠나 마타타에 회원가입 하세요.
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}
LoginModal.propTypes = {
  handleSignupModal: PropTypes.any,
  handleLoginModal: PropTypes.any
};
export default LoginModal;
