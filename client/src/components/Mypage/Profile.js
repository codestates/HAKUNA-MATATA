import React from 'react';
import style from './Profile.module.css';
import Input from './Input';
import MypageButton from './MypageButton';
// import { useSelector } from 'react-redux';

const Profile = () => {
  return (
    <>
      <input
        className={style.disabled}
        placeholder="email.email.com"
        disabled
      />
      <Input placeholder={'nickname'} />
      <textarea
        placeholder="소개를 입력하세요."
        className={style.textarea}
      ></textarea>
      <MypageButton />
    </>
  );
};

export default Profile;
