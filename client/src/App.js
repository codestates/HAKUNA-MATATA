import React, { Fragment, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, login } from './store/login-slice';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:4000/users/userinfo', {
        withCredentials: true
      })
      .then((res) => {
        dispatch(login());
        dispatch(getUserInfo(res.data.userInfo));
      })
      .catch((err) => console.log(err));
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
