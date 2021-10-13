import React, { Fragment, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserInfo, login, logout } from './store/login-slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:4000/users/userinfo', { withCredentials: true })
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
