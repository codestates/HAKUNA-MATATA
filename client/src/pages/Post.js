import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import CommentItem from '../components/PostPage/CommentItem';
import MainContent from '../components/PostPage/MainContent';
import WriteComment from '../components/PostPage/WriteComment';
import style from './Post.module.css';
import axios from 'axios';
import { useHistory } from 'react-router';

const Post = () => {
  const [liked, setLiked] = useState(false);

  let history = useHistory();

  function errorRedirectHandler() {
    history.push('/404');
  }

  const likeHandler = () => {
    axios
      .post(
        `http://localhost:4000/posts/${postId}/likes`,
        {},
        { withCredentials: true }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        const errorMessage = err.response.data.message;

        if (errorMessage === 'Already liked it!') {
          setLiked(true);
        }
      });
  };

  useEffect(() => {
    const test = window.location.pathname;
    console.log(test);

    axios
      .get(`http://localhost:4000${test}`)
      .then((data) => {
        console.log(data.data.posts);
        const postId = data.data.posts.id;
        console.log(postId);

        axios
          .get(`http://localhost:4000/posts/${postId}/comments`)
          .then((data) => {
            console.log(data.data.comments);
          });
      })
      .catch((err) => {
        console.log(err);
        errorRedirectHandler();
      });
  }, []);

  return (
    <div className={style.container}>
      <div>
        <form action="http://localhost:4000/users/signin" method="POST">
          <input type="text" name="email" />
          <input type="text" name="password" />
          <button type="submit">Upload</button>
        </form>
      </div>
      <section>
        <MainContent likeHandler={likeHandler} />
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
