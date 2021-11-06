import React from 'react';
import style from './LoginModal.module.css';
import ModalInput from './ModalInput';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../store/modal-slice';

function LoginModal() {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className={style.containerWrap}>
      <div
        className={style.containerbg}
        onClick={() => dispatch(showLoginModal(false))}
      ></div>
      <div className={style.container}>
        <div>
          <h2 className={style.title}>로그인</h2>
          <div className={style.modalExplain}>
            하쿠나 마타타에 로그인 하세요.
          </div>
          <div className={style.inputBox}>
            <ModalInput />
          </div>
          <div
            className={style.signup}
            onClick={() => {
              dispatch(showLoginModal(false));
              dispatch(showSignupModal(true));
            }}
          >
            하쿠나 마타타에 회원가입 하세요.
          </div>
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
