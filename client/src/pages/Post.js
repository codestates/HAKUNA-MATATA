import React, { useEffect, useState } from 'react';
import CommentItem from '../components/PostPage/CommentItem';
import MainContent from '../components/PostPage/MainContent';
import WriteComment from '../components/PostPage/WriteComment';
import style from './Post.module.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from '../config';

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [pathName, setPathName] = useState('');
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState({});
  const [posts, setPosts] = useState({});

  const history = useHistory();

  const errorRedirectHandler = () => {
    history.push('/404');
  };

  const getPosts = async () => {
    try {
      const path = window.location.pathname;
      const response = await axios.get(`${REACT_APP_API_URL}${path}`);
      const postId = response.data.posts.id;
      setAuthor(response.data.posts.user);
      setPathName(postId);
      setPosts(response.data.posts);
      getLikesState(path);
      getComments(path);
    } catch (err) {
      console.log(err);
      // errorRedirectHandler();
    }
  };

  const getComments = async (path) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}${path}/comments`);

      // console.log(response.data.comments);
      // console.log(comments);
      setComments(response.data.comments);
    } catch (err) {
      console.log(err);
    }
  };

  const getLikesState = async (path) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}${path}/likes`, {
        withCredentials: true
      });
      setLiked(response.data.state);
    } catch (err) {
      console.log(err);
      // errorRedirectHandler();
    }
  };

  const likeHandler = async () => {
    try {
      if (!liked) {
        await axios.post(
          `${REACT_APP_API_URL}/posts/${pathName}/likes`,
          {},
          { withCredentials: true }
        );
        setLiked(true);
      } else {
        await axios.delete(`${REACT_APP_API_URL}/posts/${pathName}/likes`, {
          withCredentials: true
        });

        setLiked(false);
      }
    } catch (err) {
      console.log(err);
      errorRedirectHandler();
    }
  };

  useEffect(() => {
    getPosts();
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
      <div>
        <form action="http://localhost:4000/users/logout" method="POST">
          <button type="submit">Logout</button>
        </form>
      </div>
      <section>
        <MainContent
          liked={liked}
          likeHandler={likeHandler}
          posts={posts}
          author={author}
        />

        {comments.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              comment={comment}
              pathName={pathName}
              setComments={setComments}
            />
          );
        })}

        <WriteComment pathName={pathName} setComments={setComments} />
      </section>
    </div>
  );
};

export default Post;
