import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Mypost.module.css';
import dotMenu from '../../images/dot-menu.png';
import PropTypes from 'prop-types';
import commentPic from '../../images/comments.png';
import heart from '../../images/heart.png';
import eye from '../../images/eye.png';
import axios from 'axios';
// import { useSelector } from 'react-redux';

const Mypost = ({ postInfo }) => {
  const [dotButton, setDotButton] = useState(false);
  // const posts = useSelector((state) => state.posts);
  const handleDotButton = () => {
    setDotButton(!dotButton);
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/posts/${postInfo.id}`)
      .then((res) => console.log(res));
  };
  return (
    <li className={style.post}>
      <div>
        <div className={style.category}>{postInfo.category.name}</div>
        <div className={style.postTitle}>{postInfo.title}</div>
        <div className={style.subInfo}>
          <div className={style.imageBox}>
            <img className={style.image} src={commentPic} alt="댓글 수" />
            <span className={style.number}>{postInfo.comments}</span>
          </div>
          <div className={style.imageBox}>
            <img className={style.image} src={heart} alt="하트 수" />
            <span className={style.number}>{postInfo.likes}</span>
          </div>
          <div className={style.imageBox}>
            <img className={style.image} src={eye} alt="조회 수" />
            <span className={style.number}>{postInfo.views}</span>
          </div>
        </div>
      </div>
      <div className={style.postRight}>
        <button
          className={
            dotButton ? `${style.dotBox} ${style.dotClick}` : style.dotBox
          }
          onClick={handleDotButton}
        >
          <img
            className={style.dotMenu}
            src={dotMenu}
            alt="수정, 삭제 메뉴버튼"
          />
        </button>
        <div className={style.date}>{postInfo.created}</div>
        <div className={dotButton ? style.menuBox : style.hidden}>
          <Link to="#">
            <button className={style.modifyButton}>수정</button>
          </Link>
          <button className={style.deleteButton} onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </li>
  );
};

Mypost.propTypes = {
  postInfo: PropTypes.any.isRequired
};
export default Mypost;
