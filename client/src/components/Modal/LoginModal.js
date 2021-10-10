import React from 'react';
import style from './LoginModal.module.css';
import ModalInput from './ModalInput';
import ModalButton from './ModalButton';
import PropTypes from 'prop-types';
function LoginModal({ handleSignupModal }) {
  return (
    <div className={style.container}>
      <h2 className={style.title}>로그인</h2>
      <div className={style.modalExplain}>하쿠나 마타타에 로그인 하세요.</div>
      <div className={style.inputBox}>
        <ModalInput placeholder="이메일" />
        <ModalInput placeholder="비밀번호" password />
        <ModalButton>로그인</ModalButton>
        <ModalButton oauth={true}>깃허브로 로그인</ModalButton>
      </div>
      <div className={style.signup} onClick={handleSignupModal}>
        하쿠나 마타타에 회원가입 하세요.
      </div>
    </div>
  );
}
LoginModal.propTypes = {
  handleSignupModal: PropTypes.any
};
export default LoginModal;
