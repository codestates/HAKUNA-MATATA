import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './store/login-slice';
import movePage from './store/move-slice';
import posts from './store/post-slice';
import comments from './store/comments-slice';
import filterpost from './store/filterpost-slice';
const store = configureStore({
  reducer: {
    isLogin: authSlice,
    movePage: movePage,
    posts: posts,
    comments: comments,
    filterpost: filterpost
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
