import React, { useState } from 'react';
import style from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from '../../store/login-slice';

const Profile = () => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);

  const [profileInfo, setProfileInfo] = useState({
    nickname: '',
    userBio: ''
  });
  const dispatch = useDispatch();
  const onChangeInput = (key) => (e) => {
    setProfileInfo({ ...profileInfo, [key]: e.target.value });
  };
  const handleSaveProfile = () => {
    const { nickname, userBio } = profileInfo;
    // console.log('@@@@', userInfo.nickname);
    if (!nickname) {
      console.log('닉네임 칸을 입력해주세요.');
      return;
    }

    axios
      .patch(
        'http://localhost:4000/users/userinfo',
        {
          nickname,
          userBio
        },
        {
          withCredentials: true
        }
      )
      .then((res) => {
        setProfileInfo({
          nickname: '',
          userBio: ''
        });
        dispatch(getUserInfo(res.data.userInfo));
      });
  };
  return (
    <>
      <input className={style.disabled} placeholder={userInfo.email} disabled />
      <input
        placeholder={userInfo.nickname}
        className={style.input}
        onChange={onChangeInput('nickname')}
        value={'' || profileInfo.nickname}
      />
      <textarea
        placeholder="소개를 입력하세요."
        className={style.textarea}
        onChange={onChangeInput('userBio')}
        value={'' || profileInfo.userBio}
      ></textarea>
      <button className={style.button} onClick={handleSaveProfile}>
        프로필 저장
      </button>
    </>
  );
};

export default Profile;
