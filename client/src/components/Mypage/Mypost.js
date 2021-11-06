import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Mypost.module.css';
import dotMenu from '../../images/icons/dot-menu.png';
import PropTypes from 'prop-types';
import commentPic from '../../images/icons/comments.png';
import heart from '../../images/icons/heart.png';
import eye from '../../images/icons/eye.png';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config.js';

const Mypost = ({ postInfo, getMyPost }) => {
  const history = useHistory();

  const [dotButton, setDotButton] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  const handleDelete = async (e) => {
    const postId = e.target.id;
    try {
      await axios.delete(`${REACT_APP_API_URL}/posts/${postId}`, {
        withCredentials: true
      });
      getMyPost();
    } catch (err) {
      console.log(err);
    }
  };

  const getPostId = async () => {
    try {
      const url = `${REACT_APP_API_URL}/posts/${postInfo.id}`;
      const response = await axios.get(url, {
        withCredentials: true
      });

      setPosts(response.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  const modifyPost = () => {
    history.push({ pathname: '/edit-post', state: posts });
  };

  return (
    <li className={style.post}>
      <div className={style.postInfo}>
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
          id={postInfo.id}
          onClick={(e) => {
            handleDotButton();
            getPostId(e);
          }}
        >
          <img
            className={style.dotMenu}
            src={dotMenu}
            alt="수정, 삭제 메뉴버튼"
          />
        </button>
        <div className={style.date}>{postInfo.created}</div>
        <div className={dotButton ? style.menuBox : style.hidden}>
          <button
            className={style.modifyButton}
            onClick={() => modifyPost()}
            id={postInfo.id}
          >
            수정
          </button>

          <button
            className={style.deleteButton}
            onClick={(e) => handleDelete(e)}
            id={postInfo.id}
          >
            삭제
          </button>
        </div>
      </div>
    </li>
  );
};

Mypost.propTypes = {
  postInfo: PropTypes.any.isRequired,
  getMyPost: PropTypes.any
};
export default Mypost;
