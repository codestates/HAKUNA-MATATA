import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './store/index';
import movePageReducer from './store/moveReducer';

const store = configureStore({
  reducer: {
    isLogin: authSliceReducer,
    movePage: movePageReducer
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
