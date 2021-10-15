import React, { useState } from 'react';
import style from './WriteComment.module.css';
import userImg from '../../images/icons/user.png';
import axios from 'axios';
import PropTypes from 'prop-types';
import { REACT_APP_API_URL } from '../../config';

const WriteComment = ({ pathName, setComments, comments, setPosts, posts }) => {
  const [commentContent, setCommentContent] = useState({});

  const { comment } = commentContent;

  const sendComment = async () => {
    try {
      const url = `${REACT_APP_API_URL}/posts/${pathName}/comments`;
      const config = {
        'Content-Type': 'application/json',
        withCredentials: true
      };

      const newCommentId = await axios.post(url, { content: comment }, config);

      // console.log(posts);
      setPosts({ ...posts, comments: comments.length + 1 });

      if (newCommentId.data.id) {
        const newComments = await axios.get(url);
        setComments(newComments.data.comments);
      }

      setCommentContent({});
      // console.log(comment);
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
          value={comment}
        />
      </div>

      <div className={style.submitWrap}>
        <button type="submit" className={style.submitcom} onClick={sendComment}>
          댓글 쓰기
        </button>
      </div>
    </section>
  );
};

WriteComment.propTypes = {
  pathName: PropTypes.any,
  setComments: PropTypes.any,
  comments: PropTypes.any,
  setPosts: PropTypes.any,
  posts: PropTypes.any
};

export default WriteComment;
