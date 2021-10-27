import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyPage from '../pages/Mypage';
import Post from '../pages/Post';
import Board from '../pages/Board';
import About from '../pages/About';
import AddPost from '../pages/AddPost';
import EditPost from '../pages/EditPost';
import ErrorPage from '../pages/ErrorPage';
import Banner from './Banner';
import Callback from './Mypage/Callback';
const Main = () => {
  const loginState = useSelector((state) => state.isLogin);
  const { isLogin } = loginState;
  console.log(isLogin);

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
          <Banner title={''} />
          {isLogin ? <MyPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/posts/:postId">
          <Banner title={'고민글'} />
          <Post />
        </Route>
        <Route path="/add-post">
          <Banner title={'새로운 고민 추가'} />
          <AddPost />
        </Route>
        <Route path="/edit-post">
          <Banner title={'고민글 수정'} />
          <EditPost />
        </Route>
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route path="/callback">
          <Callback />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
