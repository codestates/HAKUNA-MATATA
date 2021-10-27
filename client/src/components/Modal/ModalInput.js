import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style from './ModalInput.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, getUserInfo } from '../../store/login-slice';
import { profile } from '../../store/move-slice';
import { REACT_APP_API_URL } from '../../config';
import github from '../../images/icons/github.png';
// import GoogleLogin from 'react-google-login';

function ModalInput({ placeholder }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  const enteredPwIsValid = enteredPassword.trim() !== '';
  const passwordIsInvalid = !enteredPwIsValid && enteredPasswordTouched;

  useEffect(() => {
    if (enteredEmailIsValid && enteredPwIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredEmailIsValid, enteredPwIsValid]);
  // const onSuccessGoogle = (res) => {
  //   console.log(res);
  //   console.log('로그인성공');
  //   dispatch(login());
  //   history.push('/mypage');
  // };
  // const onFailureGoogle = () => {
  //   console.log('로그인 실패');
  // };
  const socialLoginHandler = () => {
    window.location.assign(
      'https://github.com/login/oauth/authorize?client_id=17c8170cceb9ae757d2e'
    );
  };
  // const kakaoHandler = () => {
  //   window.location.assign(
  //     'https://kauth.kakao.com/oauth/authorize?client_id=75011143644a81f5cebbd1fcd73a2abe&redirect_uri=http://localhost:3000/callback&response_type=code'
  //   );
  // };

  const handleLogin = () => {
    axios
      .post(
        `${REACT_APP_API_URL}/users/signin`,
        {
          email: enteredEmail,
          password: enteredPassword
        },
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data.userInfo);
        dispatch(getUserInfo(res.data.userInfo));
        dispatch(profile());
        dispatch(login());
        history.push('/mypage');
      });
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);
    setEnteredPasswordTouched(true);

    if (!enteredEmailIsValid || !enteredPwIsValid) {
      return;
    }

    setEnteredEmail('');
    setEnteredEmailTouched(false);
    setEnteredPassword('');
    setEnteredPasswordTouched(false);
  };

  const emailInputClasses = emailIsInvalid ? style.invalid : style.form;
  const passwordInputClasses = passwordIsInvalid ? style.invalid : style.form;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={emailInputClasses}>
        <label className={style.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder={placeholder}
          className={style.modalInput}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailIsInvalid && (
          <p className={style.error}>Entered Email is not valid</p>
        )}
      </div>

      <div className={passwordInputClasses}>
        <label className={style.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          className={style.modalInput}
          onChange={passwordChangeHandler}
          onBlur={passwordInputBlurHandler}
          value={enteredPassword}
        />
        {passwordIsInvalid && (
          <p className={style.error}>Entered password is not correct!</p>
        )}
      </div>

      <div>
        <button
          className={style.modalButton}
          disabled={!formIsValid}
          onClick={handleLogin}
        >
          로그인
        </button>

        <button className={style.modalOauth} onClick={socialLoginHandler}>
          <div className={style.gihubLogin}>
            <img src={github} />
            깃허브로 로그인
          </div>
        </button>
        {/* <button className={style.modalOauth} onClick={kakaoHandler}>
          <div className={style.gihubLogin}>
            <img src={github} />
            카카오톡으로 로그인
          </div>
        </button>
        <GoogleLogin
          clientId="832180924318-udhdrarrb2drp04jtkgolpal7kj5q0gn.apps.googleusercontent.com"
          onSuccess={onSuccessGoogle}
          onFailure={onFailureGoogle}
          cookiePolicy="single_host_origin"
        /> */}
      </div>
    </form>
  );
}

ModalInput.propTypes = {
  placeholder: PropTypes.any,
  password: PropTypes.any
};
export default ModalInput;
