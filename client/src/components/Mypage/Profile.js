import React, { useState } from 'react';
import style from './Profile.module.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../store/login-slice';
import { REACT_APP_API_URL } from '../../config';

const Profile = () => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const dispatch = useDispatch();

  const [profileInfo, setProfileInfo] = useState({
    nickname: userInfo.nickname,
    userBio: userInfo.bio
  });

  const onChangeInput = (key) => (e) => {
    setProfileInfo({ ...profileInfo, [key]: e.target.value });
  };

  const handleSaveProfile = async () => {
    try {
      const { nickname, userBio } = profileInfo;
      if (!nickname) {
        alert('닉네임을 입력해주세요');
      }
      const response = await axios.patch(
        `${REACT_APP_API_URL}/users/userinfo`,
        { nickname, userBio },
        { withCredentials: true }
      );
      setProfileInfo({
        nickname: profileInfo.nickname,
        userBio: profileInfo.bio
      });
      dispatch(getUserInfo(response.data.userInfo));
    } catch (err) {
      if (err.response.status === 409) {
        alert('요청하신 닉네임은 사용하실 수 없습니다.');
      }
    }
  };

  return (
    <>
      <input className={style.disabled} placeholder={userInfo.email} disabled />
      <input
        placeholder="닉네임을 입력하세요."
        value={profileInfo.nickname || ''}
        className={style.input}
        onChange={onChangeInput('nickname')}
      />
      <textarea
        placeholder="소개를 입력하세요."
        className={style.textarea}
        onChange={onChangeInput('userBio')}
        value={profileInfo.userBio || ''}
      ></textarea>
      <button className={style.button} onClick={handleSaveProfile}>
        프로필 저장
      </button>
    </>
  );
};

export default Profile;
