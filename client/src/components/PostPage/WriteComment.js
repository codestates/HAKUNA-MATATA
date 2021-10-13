import React, { useState } from 'react';
import style from './WriteComment.module.css';
import userImg from '../../images/user.png';
import axios from 'axios';
import PropTypes from 'prop-types';

const WriteComment = ({ pathName, setComments }) => {
  const [commentContent, setCommentContent] = useState({});

  const sendComment = async () => {
    try {
      const url = `http://localhost:4000/posts/${pathName}/comments`;
      const config = {
        'Content-Type': 'application/json',
        withCredentials: true
      };
      const { comment } = commentContent;

      const newCommentId = await axios.post(url, { content: comment }, config);

      // console.log(newCommentId);

      if (newCommentId.data.id) {
        const newComments = await axios.get(url);
        setComments(newComments.data.comments);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputValue = (key) => (e) => {
    setCommentContent({ [key]: e.target.value });
  };

  return (
    <section className={style.section3}>
      <div className={style.writecomment}>
        <img src={userImg} alt="user comment img" />
        <textarea
          placeholder="댓글을 입력하세요."
          className={style.textarea}
          onChange={handleInputValue('comment')}
        />
      </div>

      <button type="submit" className={style.submitcom} onClick={sendComment}>
        댓글 쓰기
      </button>
    </section>
  );
};

WriteComment.propTypes = {
  pathName: PropTypes.any,
  setComments: PropTypes.any
};

export default WriteComment;
