import React, { useState } from 'react';
import style from './SignupInput.module.css';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config.js';
function SignupInput() {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [emailErr, setEmailErr] = useState('hidden');
  const [passwordErr, setPasswordErr] = useState('hidden');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState('hidden');
  const { email, password, confirmPassword } = signupInfo;

  const handleInputValue = (key) => (e) => {
    const next = { ...signupInfo, [key]: e.target.value };
    setSignupInfo(next);

    isAllValid(next);
  };

  const isAllValid = (signupInfo) => {
    const { email, password, confirmPassword } = signupInfo;

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);
    const isConfirmPasswordValid = checkConfirmPassword(
      password,
      confirmPassword
    );

    return isEmailValid && isPasswordValid && isConfirmPasswordValid
      ? true
      : false;
  };

  const resetInfo = () => {
    setSignupInfo({
      email: '',
      password: '',
      confirmPassword: ''
    });
    setEmailErr('hidden');
    setPasswordErr('hidden');
    setConfirmPasswordErr('hidden');
  };

  const isExist = () => {
    const { email, password, confirmPassword } = signupInfo;
    checkExist(email, '이메일을') &&
    checkExist(password, '비밀번호를') &&
    checkExist(confirmPassword, '비밀번호 확인을')
      ? true
      : false;

    return checkExist;
  };

  const checkExist = (value, input) => {
    if (value === '') {
      alert(input + ' 입력해주세요!');
      return false;
    }
    return true;
  };
  const checkEmail = (email) => {
    console.log(email);
    let emailExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (email === '') {
      setEmailErr('hidden');
      return false;
    }
    if (!emailExp.test(email)) {
      setEmailErr('');
      return false;
    }
    setEmailErr('hidden');
    return true;
  };

  const checkPassword = (password) => {
    let passwordExp = /^[a-zA-z0-9]{6,12}$/;
    if (password === '') {
      setPasswordErr('hidden');
      return false;
    }
    if (!passwordExp.test(password)) {
      setPasswordErr('');
      return false;
    }
    setPasswordErr('hidden');
    return true;
  };

  const checkConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword === '') {
      setConfirmPasswordErr('hidden');
      return false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordErr('');
      return false;
    }
    setConfirmPasswordErr('hidden');
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (isExist() && isAllValid(signupInfo)) {
      try {
        const response = await axios.post(
          `${REACT_APP_API_URL}/users/signup`,
          { email, password },
          {
            withCredentials: true
          }
        );

        console.log(response);
        alert('하쿠나마타타! 환영합니다🎉');
        resetInfo();
      } catch (err) {
        console.log(err);
        alert('회원가입에 실패하였습니다. 다시 시도해주세요🎯');
      }
    }
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이메일"
          value={email}
          className={style.modalInput}
          onChange={handleInputValue('email')}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          className={style.modalInput}
          onChange={handleInputValue('password')}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          className={style.modalInput}
          onChange={handleInputValue('confirmPassword')}
        />
        <div>
          <div className={style.errMessage}>
            <div
              className={
                emailErr === 'hidden' ? style.hidden : style.errMessage
              }
            >
              잘못된 이메일 형식 입니다.
            </div>
            <div
              className={
                passwordErr === 'hidden' ? style.hidden : style.errMessage
              }
            >
              비밀번호는 영문 대소문자와 숫자 6~12자리로 입력해야합니다.
            </div>
            <div
              className={
                confirmPasswordErr === 'hidden'
                  ? style.hidden
                  : style.errMessage
              }
            >
              두 비밀번호가 맞지 않습니다.
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={style.modalOauth}
          onClick={handleSignup}
        >
          회원가입
        </button>
        <button className={style.modalButton}>깃허브로 회원가입</button>
      </form>
    </>
  );
}

export default SignupInput;
