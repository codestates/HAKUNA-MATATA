// import { Fragment } from 'react';
import { Route, Switch } from 'react-router';

import MyPage from '../pages/Mypage';
import Board from '../pages/Board';
import Post from '../pages/Post';
import About from '../pages/About';
import AddPost from '../pages/AddPost';

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
          <MyPage />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/add-post">
          <AddPost />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
