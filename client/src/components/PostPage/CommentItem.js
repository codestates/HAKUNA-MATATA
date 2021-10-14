import React, { useState } from 'react';
import style from './CommentItem.module.css';
import userImg from '../../images/icons/user.png';
import { Link } from 'react-router-dom';
import dotMenu from '../../images/icons/dot-menu.png';
import PropTypes from 'prop-types';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';

const CommentItem = ({
  comment,
  comments,
  pathName,
  setComments,
  setPosts,
  posts
}) => {
  const [dotButton, setDotButton] = useState(false);
  const [modifyContent, setModifyContent] = useState(comment.content);
  const [showModifyBox, setShowModifyBox] = useState(false);

  const url = `${REACT_APP_API_URL}/posts/${pathName}/comments`;

  const handleDotButton = () => {
    setDotButton(!dotButton);
  };

  const showModifyBoxHandler = (data) => {
    setShowModifyBox(data);
    setDotButton(false);
  };

  const deleteCommentHandler = async (e) => {
    const commentId = e.target.id;

    try {
      const deleteCommentId = await axios.delete(
        `${REACT_APP_API_URL}/posts/${pathName}/comments/${commentId}`,
        { withCredentials: true }
      );

      setPosts({ ...posts, comments: comments.length - 1 });

      if (deleteCommentId.data.id) {
        const updatedComments = await axios.get(url);
        setComments(updatedComments.data.comments);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editComment = (e) => {
    const editComment = e.target.value;
    setModifyContent(editComment);
  };

  const modifyCommentReq = async (e) => {
    const body = { content: modifyContent };
    const commentId = e.target.id;

    try {
      const updatedComments = await axios.patch(
        `${REACT_APP_API_URL}/posts/${pathName}/comments/${commentId}`,
        body,
        { withCredentials: true }
      );

      if (updatedComments.data.newCommentInfo) {
        const newlyCreatedComments = await axios.get(url);
        setComments(newlyCreatedComments.data.comments);
        setShowModifyBox(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={style.section2}>
      <div className={style.comments}>
        <p>
          <img className={style.userImg} src={userImg} alt="user image" />
          <span>{comment.user.nickname}</span>
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
            <button
              className={style.modifyButton}
              onClick={() => showModifyBoxHandler(true)}
            >
              수정
            </button>
          </Link>
          <button
            className={style.deleteButton}
            onClick={(e) => deleteCommentHandler(e)}
            id={comment.id}
          >
            삭제
          </button>
        </div>
      </div>
      <div>{comment.content}</div>
      <span>{new Date(comment.created_at).toLocaleDateString('ko-KR')}</span>
      {showModifyBox && (
        <div>
          <input
            className={style.modiInput}
            type="text"
            name="content"
            value={modifyContent}
            onChange={(e) => editComment(e)}
          />
          <div className={style.modifyBox}>
            <button id={comment.id} onClick={(e) => modifyCommentReq(e)}>
              수정
            </button>
            <button onClick={() => showModifyBoxHandler(false)}>취소</button>
          </div>
        </div>
      )}
    </section>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.any,
  pathName: PropTypes.any,
  setComments: PropTypes.any,
  setPosts: PropTypes.any,
  posts: PropTypes.any,
  comments: PropTypes.any
};

export default CommentItem;
