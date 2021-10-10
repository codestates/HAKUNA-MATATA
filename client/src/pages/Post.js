import React from 'react';
// import { Link } from 'react-router-dom';
import CommentItem from '../components/PostPage/CommentItem';
import MainContent from '../components/PostPage/MainContent';
import WriteComment from '../components/PostPage/WriteComment';
import style from './Post.module.css';

const Post = () => {
  return (
    <div className={style.container}>
      <section>
        <MainContent />
        <CommentItem />
        <CommentItem />
        <WriteComment />
      </section>

      {/* <Link to="/add-post">
        <button className={style.addButton}>ADD POST</button>
      </Link> */}
    </div>
  );
};

export default Post;
