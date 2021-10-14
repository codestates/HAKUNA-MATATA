import React, { Fragment, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserInfo, login, logout } from './store/login-slice';
import { REACT_APP_API_URL } from './config';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${REACT_APP_API_URL}/users/userinfo`, { withCredentials: true })
      .then((res) => {
        dispatch(login());
        dispatch(getUserInfo(res.data.userInfo));
      })
      .catch(() => {
        dispatch(logout());
      });
  }, []);

  return (
    <div className="box">
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
