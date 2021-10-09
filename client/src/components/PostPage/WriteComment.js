import React from 'react';
import style from './WriteComment.module.css';
import userImg from '../../images/user.png';

const WriteComment = () => {
  return (
    <section className={style.section3}>
      <div className={style.writecomment}>
        <img src={userImg} alt="user comment img" />
        <textarea placeholder="댓글을 입력하세요." className={style.textarea} />
      </div>

      <button type="submit" className={style.submitcom}>
        댓글 쓰기
      </button>
    </section>
  );
};

export default WriteComment;
