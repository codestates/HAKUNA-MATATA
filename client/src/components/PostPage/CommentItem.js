import React, { useState } from 'react';
import style from './CommentItem.module.css';
import userImg from '../../images/user.png';
import { Link } from 'react-router-dom';
import dotMenu from '../../images/dot-menu.png';

const CommentItem = () => {
  const [dotButton, setDotButton] = useState(false);
  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  return (
    <section className={style.section2}>
      <h1>댓글</h1>
      <div className={style.comments}>
        <p>
          <img src={userImg} alt="user image" />
          <span>nickname</span>
        </p>
        <button
          className={
            dotButton ? `${style.dotBox} ${style.dotClick}` : style.dotBox
          }
          onClick={handleDotButton}
        >
          <img src={dotMenu} alt="dot-menu bar" />
        </button>
        <div className={dotButton ? style.menuBox : style.hidden}>
          <Link to="#">
            <button className={style.modifyButton}>수정</button>
          </Link>
          <button className={style.deleteButton}>삭제</button>
        </div>
      </div>
      <div>헤어지세요.</div>
      <span>2021.09.22</span>
    </section>
  );
};

export default CommentItem;
