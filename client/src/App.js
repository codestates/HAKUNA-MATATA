import React, { Fragment, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getposts } from './store/post-slice';

function App() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('http://localhost:4000/posts', {
        withCredentials: true
      })
      .then((data) => dispatch(getposts(data.data.posts.rows)))
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
