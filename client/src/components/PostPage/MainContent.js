import React, { useState } from 'react';
import style from './MainContent.module.css';
import dotMenu from '../../images/icons/dot-menu.png';
import userImg from '../../images/icons/user.png';
import comments from '../../images/icons/comments.png';
import filledHeart from '../../images/icons/filledheart.png';
import eye from '../../images/icons/eye.png';
import like from '../../images/icons/heart.png';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from '../../config';

const MainContent = ({ liked, likeHandler, posts, author, setPosts }) => {
  const loginState = useSelector((state) => state.isLogin);
  const { isLogin } = loginState;
  let history = useHistory();

  const [dotButton, setDotButton] = useState(false);
  const [modifyPost, setModifyPost] = useState({
    title: '',
    contents: ''
  });
  const [showModifyBox, setShowModifyBoxHandler] = useState(false);

  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  const deletePostHandler = async (e) => {
    const postId = e.target.id;

    try {
      const deletePostId = await axios.delete(
        `${REACT_APP_API_URL}/posts/${postId}`,
        { withCredentials: true }
      );

      if (deletePostId.data.id) {
        history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showHandler = (bool) => {
    setShowModifyBoxHandler(bool);
    setDotButton(false);
  };

  const EditPostHandler = () => {
    history.push({ pathname: '/edit-post', state: posts });
  };

  const editPostTitle = (e) => {
    const editPost = e.target.value;
    setModifyPost(editPost.title);
  };

  const editPostContent = (e) => {
    const editPost = e.target.value;
    setModifyPost(editPost.content);
  };

  const modifyPostReq = async (e) => {
    const body = { title: modifyPost.title, contents: modifyPost.contents };
    const postId = e.target.id;

    try {
      const updatedPosts = await axios.patch(
        `${REACT_APP_API_URL}/posts/${postId}`,
        body,
        { withCredentials: true }
      );

      if (updatedPosts.data.id) {
        const newlyUpdatedPosts = await axios.get(
          `${REACT_APP_API_URL}/posts/${postId}`
        );
        console.log(newlyUpdatedPosts);
        setPosts(newlyUpdatedPosts);
        setShowModifyBoxHandler(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={style.section1}>
      <div className={style['section1-header']}>
        <p>전체 &gt; 카테고리 &gt; {posts.title}</p>
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
            <button
              className={style.modifyButton}
              onClick={() => EditPostHandler()}
            >
              수정
            </button>
            <button
              id={posts.id}
              className={style.deleteButton}
              onClick={(e) => deletePostHandler(e)}
            >
              삭제
            </button>
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
          {showModifyBox && (
            <div className={style.modifyBox}>
              <input
                type="text"
                name="content"
                value={modifyPost.title}
                onChange={(e) => editPostTitle(e)}
              />
              <input
                type="text"
                name="content"
                value={modifyPost.content}
                onChange={(e) => editPostContent(e)}
              />
              <button id={posts.id} onClick={(e) => modifyPostReq(e)}>
                전송
              </button>
              <button onClick={() => showHandler(false)}>취소</button>
            </div>
          )}
        </div>
        <div className={style.maincontent}>
          <div>{posts.content}</div>
        </div>
        <div className={style.reactions}>
          <div className={style.iconWrap}>
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
          </div>
          <div className={style.likesWrap}>
            {isLogin && liked ? (
              <>
                <img src={filledHeart} alt="likes" onClick={likeHandler} />
                <p onClick={likeHandler}>공감</p>
              </>
            ) : null}
            {isLogin && !liked ? (
              <>
                <img src={like} alt="likes_none" onClick={likeHandler} />
                <p onClick={likeHandler}>공감</p>
              </>
            ) : null}
            {!isLogin && null}
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
  author: PropTypes.any,
  pathName: PropTypes.any,
  setPosts: PropTypes.any
};

export default MainContent;
