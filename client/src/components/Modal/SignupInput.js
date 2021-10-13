import React, { useState } from 'react';
import style from './SignupInput.module.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
function SignupInput({ setSignupModal }) {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    checkpw: ''
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password, checkpw } = loginInfo;
    console.log(email, password);
    if (!email || !password || !checkpw) {
      // 칸을 다안채웠을떄 나오는거 다시 구현해야함!
      console.log('빈칸을 다 채우셔야합니다.');
    } else if (password !== checkpw) {
      console.log('비밀번호를 다시 확인해주세요');
    } else {
      axios
        .post(
          'http://localhost:4000/users/signup',
          {
            email,
            password
          },
          {
            withCredentials: true
          }
        )
        .then((res) => {
          if (res.status === 201) {
            setSignupModal(false);
            alert('회원가입되었습니다.');
          }

          history.push('/');
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <input
        type="email" //
        placeholder="이메일"
        className={style.modalInput}
        value={loginInfo.email}
        onChange={handleInputValue('email')}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className={style.modalInput}
        value={loginInfo.password}
        onChange={handleInputValue('password')}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className={style.modalInput}
        value={loginInfo.checkpw}
        onChange={handleInputValue('checkpw')}
      />
      <button className={style.modalOauth} onClick={handleSignup}>
        회원가입
      </button>
      <button className={style.modalButton}>깃허브로 회원가입</button>
    </>
  );
}
SignupInput.propTypes = {
  setSignupModal: PropTypes.any
};
export default SignupInput;
