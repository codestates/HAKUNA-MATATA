import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './MainContent.module.css';
import dotMenu from '../../images/dot-menu.png';
import userImg from '../../images/user.png';
import comments from '../../images/comments.png';
import filledHeart from '../../images/filledheart.png';
import eye from '../../images/eye.png';
import like from '../../images/heart.png';
import PropTypes from 'prop-types';

const MainContent = ({ liked, likeHandler, posts, author }) => {
  const [dotButton, setDotButton] = useState(false);

  // console.log(liked);

  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  document.addEventListener('click', (e) => {
    if (
      dotButton &&
      e.target.className !==
        'MainContent_dotBox__1WcjX MainContent_dotClick__2kD1_' &&
      e.target.className !== 'MainContent_menuBox__35m8U'
    ) {
      setDotButton(false);
    }
  });

  // useEffect(() => {
  //   if (dotButton) {
  //     const notiTimer = setTimeout(() => {
  //       setDotButton(false);
  //     }, 3000);
  //     return () => clearTimeout(notiTimer);
  //   }
  // }, [dotButton]);

  return (
    <section className={style.section1}>
      <div className={style['section1-header']}>
        <p>전체 &gt; 연애 &gt; 게시물 &gt; 제목</p>
        <button
          className={
            dotButton ? `${style.dotBox} ${style.dotClick}` : style.dotBox
          }
          onClick={handleDotButton}
        >
          <img src={dotMenu} alt="dot-menu bar" />
        </button>
        {dotButton && (
          <div className={style.menuBox}>
            <Link to="#">
              <button className={style.modifyButton}>수정</button>
            </Link>
            <button className={style.deleteButton}>삭제</button>
          </div>
        )}
      </div>
      <div className={style['section1-content']}>
        <h1>{posts.title}</h1>
        <div className={style.basicinfo}>
          <span>
            <img src={userImg} alt="user image" />
            <span>{author.nickname}</span>
          </span>
          <span>{new Date(posts.created_at).toLocaleDateString('ko-KR')}</span>
        </div>
        <div className={style.maincontent}>
          <div>{posts.content}</div>
        </div>
        <div className={style.reactions}>
          <p>
            <img src={comments} />
            <span>{posts.comments}</span>
          </p>
          <p>
            <img src={like} />
            <span>{posts.likes}</span>
          </p>
          <p>
            <img src={eye} />
            <span>{posts.views}</span>
          </p>
          <div className={style.test}>
            {liked ? (
              <img src={filledHeart} alt="likes" onClick={likeHandler} />
            ) : (
              <img src={like} alt="likes_none" onClick={likeHandler} />
            )}
            <p onClick={likeHandler}>공감</p>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  liked: PropTypes.any,
  likeHandler: PropTypes.any,
  posts: PropTypes.any,
  author: PropTypes.any
};

export default MainContent;
