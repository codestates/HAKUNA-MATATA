import React from 'react';
import Input from './Input';
import MypageButton from './MypageButton';
import style from './css/Setting.module.css';
const Setting = () => {
  return (
    <>
      <div className={style.changePassword}>
        <span className={style.text}>비밀번호 변경</span>
        <Input placeholder={'비밀번호 변경'} />
        <Input placeholder={'비밀번호 변경 확인'} />
        <MypageButton />
      </div>
      <div className={style.withdrawal}>
        <span className={style.text}>회원 탈퇴</span>
        <p className={style.explain}>
          탈퇴를 하셔도 삭제하지 않은 게시물과 댓글은 남아있게 됩니다.
        </p>
        <button className={style.withdrawalButton}>회원 탈퇴하기</button>
      </div>
    </>
  );
};

export default Setting;
