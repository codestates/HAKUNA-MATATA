import React, { useState } from 'react';
import style from './SignupInput.module.css';
import axios from 'axios';
function SignupInput() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      // 칸을 다안채웠을떄 나오는거 다시 구현해야함!
      console.log('빈칸을 다 채우셔야합니다.');
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
          console.log(res);
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
        onChange={handleInputValue('email')}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className={style.modalInput}
        onChange={handleInputValue('password')}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className={style.modalInput}
      />
      <button className={style.modalOauth} onClick={handleSignup}>
        회원가입
      </button>
      <button className={style.modalButton}>깃허브로 회원가입</button>
    </>
  );
}

export default SignupInput;
