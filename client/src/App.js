import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/Modal/LoginModal';
import SignupModal from './components/Modal/SignupModal';
import axios from 'axios';
import { getUserInfo, login, logout } from './store/login-slice';
import { REACT_APP_API_URL } from './config';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const modal = useSelector((state) => state.modal);
  const { loginModal, signupModal } = modal;

  const authentication = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/users/auth`, {
        withCredentials: true
      });
      if (response.data.state) {
        dispatch(login());
        dispatch(getUserInfo(response.data.userInfo));
      } else {
        dispatch(logout());
      }
    } catch (err) {
      dispatch(logout());
    }
  };

  useEffect(() => {
    authentication();
  }, []);

  return (
    <div className="box">
      <Fragment>
        <Header />
        <Main />
        <Footer />
        {!isLogin && loginModal && <LoginModal />}
        {!isLogin && signupModal && <SignupModal />}
      </Fragment>
    </div>
  );
}

export default App;
