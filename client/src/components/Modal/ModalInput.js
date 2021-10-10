import React, { useState, useEffect } from 'react';
import style from './ModalInput.module.css';
import PropTypes from 'prop-types';
// import ModalButton from './ModalButton';

function ModalInput({ placeholder, password }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

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

    console.log(enteredPassword);

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
          type={password ? 'password' : 'text'}
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
          type={password ? 'password' : 'text'}
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
        <submit>
          <button className={style.modalButton} disabled={!formIsValid}>
            로그인
          </button>
        </submit>
        <submit>
          <button className={style.modalOauth}>깃허브로 로그인</button>
        </submit>
      </div>
    </form>
  );
}

ModalInput.propTypes = {
  placeholder: PropTypes.node.isRequired,
  password: PropTypes.any
};
export default ModalInput;
