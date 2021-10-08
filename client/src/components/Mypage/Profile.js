import React from 'react';
import style from './css/Profile.module.css';
import Input from './Input';
import MypageButton from './MypageButton';

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
