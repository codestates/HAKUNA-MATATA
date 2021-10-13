import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MyPage from '../pages/Mypage';
import Post from '../pages/Post';
import Board from '../pages/Board';
import About from '../pages/About';
import AddPost from '../pages/AddPost';
import EditPost from '../pages/EditPost';
import ErrorPage from '../pages/ErrorPage';
import style from './Banner.module.css';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Board />
        </Route>
        <Route path="/mypage">
          <section className={style.banner}></section>
          <MyPage />
        </Route>
        <Route path="/posts/:postId">
          <section className={style.banner}>고민글</section>
          <Post />
        </Route>
        <Route path="/add-post">
          <section className={style.banner}>새 고민글 추가</section>
          <AddPost />
        </Route>
        <Route path="/edit-post">
          <section className={style.banner}>고민글 수정</section>
          <EditPost />
        </Route>
        <Route path="/404">
          <ErrorPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
