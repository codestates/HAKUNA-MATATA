import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './store/modal-slice';
import authSlice from './store/login-slice';
import movePage from './store/move-slice';
import posts from './store/post-slice';
import comments from './store/comments-slice';
import filterpost from './store/filterpost-slice';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

// persistConfig는 새로운 persist를 선언한다.
// key: reducer의 어느 지점에서부터 데이터를 저장할 것인지
// storage: 웹의 localstorage를 뜻한다.
const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const rootReducer = combineReducers({
  modal: modalSlice,
  isLogin: authSlice,
  movePage: movePage,
  posts: posts,
  comments: comments,
  filterpost: filterpost
});

// persistReducer는 persisConfig가 추가된 reducer을 반환한다.
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST]
      }
    })
});

// persistStore는 새로고침, 종료해도 지속될 store생성
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
