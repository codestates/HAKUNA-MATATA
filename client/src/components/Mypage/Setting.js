import React, { useState } from 'react';
import style from './Setting.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/login-slice';
import { useHistory } from 'react-router';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config.js';

const Setting = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [changePassword, setChangePassword] = useState({
    password: '',
    checkPassword: ''
  });
  const handleInputValue = (key) => (e) => {
    setChangePassword({ ...changePassword, [key]: e.target.value });
  };
  const withDrawal = () => {
    axios.delete(`${REACT_APP_API_URL}/users/userinfo`, {
      withCredentials: true
    });
    dispatch(logout());
    history.push('/');
  };

  const handleSaveProfile = () => {
    const { password, checkPassword } = changePassword;
    console.log(password, checkPassword);
    if (!password || !checkPassword) {
      console.log('빈칸을 채워주세요');
    } else if (password !== checkPassword) {
      console.log('비밀번호가 일치하지 않습니다.');
    } else {
      axios
        .patch(
          'http://localhost:4000/users/userinfo',
          {
            password
          },
          {
            withCredentials: true
          }
        )
        .then((res) =>
          console.log(res, '성공적으로 비밀번호가 변경되었습니다.')
        );
    }
    setChangePassword({
      password: '',
      checkPassword: ''
    });
  };
  return (
    <>
      <div className={style.changePassword}>
        <span className={style.text}>비밀번호 변경</span>
        <input
          type="password"
          placeholder="비밀번호 변경"
          className={style.input}
          value={changePassword.password}
          onChange={handleInputValue('password')}
        />
        <input
          type="password"
          placeholder="비밀번호 변경 확인"
          className={style.input}
          value={changePassword.checkPassword}
          onChange={handleInputValue('checkPassword')}
        />
        <button className={style.button} onClick={handleSaveProfile}>
          프로필 저장
        </button>
      </div>
      <div className={style.withdrawal}>
        <span className={style.text}>회원 탈퇴</span>
        <p className={style.explain}>
          탈퇴를 하셔도 삭제하지 않은 게시물과 댓글은 남아있게 됩니다.
        </p>
        <button className={style.withdrawalButton} onClick={withDrawal}>
          회원 탈퇴하기
        </button>
      </div>
    </>
  );
};

export default Setting;
