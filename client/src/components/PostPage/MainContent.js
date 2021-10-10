import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './MainContent.module.css';
import dotMenu from '../../images/dot-menu.png';
import userImg from '../../images/user.png';
import comments from '../../images/comments.png';
import eye from '../../images/eye.png';
import like from '../../images/heart.png';

const MainContent = () => {
  const [dotButton, setDotButton] = useState(false);
  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  return (
    <section className={style.section1}>
      <div className={style['section1-header']}>
        <p>전체 연애 게시물 제목</p>
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
      <div className={style['section1-content']}>
        <h1>게시물 제목</h1>
        <div className={style.basicinfo}>
          <span>
            <img src={userImg} alt="user image" />
            <span>nickname</span>
          </span>
          <span>2021.09.22</span>
        </div>
        <div className={style.maincontent}>
          <div>
            코드스테이츠 페어가 저를 너무 힘들게해요ㅜ ㅜ <br />
            어떻게 하면 좋을지 모르겠어요. <br />
            누가 나좀 도와주세요. <br />
            댓글좀 남겨주십쇼!!
          </div>
        </div>
        <div className={style.reactions}>
          <p>
            <img src={comments} />
            <span>128</span>
          </p>
          <p>
            <img src={like} />
            <span>30</span>
          </p>
          <p>
            <img src={eye} />
            <span>1.3k</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;