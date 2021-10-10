import React, { useState } from 'react';
import ModalInput from './ModalInput';
import ModalButton from './ModalButton';
import style from './css/SignupModal.module.css';
import UsingAgreeModal from './UsingAgreeModal';
import PersonalAgree from './PersonalAgree';
import PropTypes from 'prop-types';
function SignupModal({ handleLoginModal, handleSignupModal }) {
  const [usingOpen, setUsingOpen] = useState(false);
  const [PersonalOpen, setPersonalOpen] = useState(false);
  const openLoginModal = () => {
    handleSignupModal();
    handleLoginModal();
  };
  const opneModalHandler = () => {
    setUsingOpen(!usingOpen);
  };

  const openPersonalHandler = () => {
    setPersonalOpen(!PersonalOpen);
  };
  return (
    <div className={style.container}>
      {usingOpen && (
        <div className={style.modalBackDrop} onClick={opneModalHandler}>
          <UsingAgreeModal opneModalHandler={opneModalHandler} />
        </div>
      )}
      {PersonalOpen && (
        <div className={style.modalBackDrop} onClick={openPersonalHandler}>
          <PersonalAgree
            PersonalOpen={PersonalOpen}
            openPersonalHandler={openPersonalHandler}
          />
        </div>
      )}

      <h2 className={style.title}>회원가입</h2>
      <div className={style.modalExplain}>
        하쿠나 마타타에 회원가입을 환영합니다.
      </div>
      <div className={style.agreeContainer}>
        <div>
          <input type="checkbox" id="agree1" className={style.check} />
          <label htmlFor="agree1" className={style.checkbox}>
            이용약관에 동의
          </label>
          <button
            href="#"
            className={style.agreeDetail}
            onClick={opneModalHandler}
          >
            [자세히 보기]
          </button>
        </div>

        <div className={style.agreeMargin}>
          <input type="checkbox" id="agree2" className={style.check} />
          <label htmlFor="agree2" className={style.checkbox}>
            개인정보취급방침에 동의
          </label>
          <button
            href="#"
            className={style.agreeDetail}
            onClick={openPersonalHandler}
          >
            [자세히 보기]
          </button>
        </div>
      </div>

      <div className={style.inputBox}>
        <ModalInput placeholder={'이메일'} />
        <ModalInput placeholder={'비밀번호'} password />
        <ModalInput placeholder={'비밀번호 확인'} password />
        <ModalButton>회원가입</ModalButton>
        <ModalButton oauth={true}>깃허브로 회원가입</ModalButton>
      </div>
      <div className={style.signup} onClick={openLoginModal}>
        하쿠나 마타타에 로그인 하세요.
      </div>
    </div>
  );
}
SignupModal.propTypes = {
  handleLoginModal: PropTypes.any,
  handleSignupModal: PropTypes.any
};
export default SignupModal;