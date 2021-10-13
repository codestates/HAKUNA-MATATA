import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './Mypage.module.css';
import userImage from '../images/user.png';
import pencilImage from '../images/pencil.png';
// import SubButton from '../components/Mypage/SubButton.js';
import Profile from '../components/Mypage/Profile';
import Mypost from '../components/Mypage/Mypost';
import Setting from '../components/Mypage/Setting';
import { useSelector, useDispatch } from 'react-redux';
import { profile, mypost, setting } from '../store/move-slice';
import { getUserInfo, logout } from '../store/login-slice';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

// import commentPic from '../images/comments.png';
// import heart from '../images/heart.png';
// import eye from '../images/eye.png';
// import dotMenu from '../images/dot-menu.png';
const Mypage = () => {
  const history = useHistory();
  const [imgSrc, setImgSrc] = useState(userImage);
  const movePage = useSelector((state) => state.movePage);
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    userAutn();
  }, []);

  const userAutn = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users/userinfo', {
        withCredentials: true
      });
      dispatch(getUserInfo(response.data.userInfo));
    } catch (err) {
      console.log(err);
      dispatch(logout());
      history.push('/');
    }
  };

  const getMypost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/posts?user=${userInfo.login}`,
        { withCredentials: true }
      );
      setUserPosts(response.data.posts.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const processImage = (e) => {
    const imageFile = e.target.files[0];

    // const fileReader = new FileReader();
    // if (imageFile) {
    //   fileReader.readAsDataURL(imageFile);
    // }

    // fileReader.onload = (e) => setImgSrc(e.target.result);
    if (imageFile) {
      const formdata = new FormData();
      formdata.append('file', imageFile);

      axios
        .post(
          'http://localhost:4000/users/profile',
          { image: formdata },
          { withCredentials: true, 'content-type': 'multipart/form-data' }
        )
        .then((res) => {
          userAutn();
          setImgSrc(userInfo.image);
          console.log(res);
        });
    }
  };

  const profilePage = () => {
    dispatch(profile());
  };
  const mypostPage = () => {
    dispatch(mypost());
  };
  const settingPage = () => {
    dispatch(setting());
  };
  // const [dotButton, setDotButton] = useState(false);
  // const posts = useSelector((state) => state.posts);

  // const handleDotButton = () => {
  //   setDotButton(!dotButton);
  // };

  return (
    <>
      <section className={style.section}>
        <main className={style.mypage}>
          <div className={style.container}>
            <div className={style.profileHeader}>
              <label htmlFor="fileUpload" className={style.imageContainer}>
                <img src={imgSrc} className={style.userImage} />
                <img src={pencilImage} className={style.modifyImg} />
              </label>
              <input
                type="file"
                id="fileUpload"
                className={style.hide}
                onChange={processImage}
              />

              <div>
                <div className={style.username}>{userInfo.nickname}</div>
                <div className={style.introduce}>{userInfo.bio}</div>
              </div>
            </div>
            <hr />
            <div className={style.profileBody}>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => {
                    profilePage();
                  }}
                  className={
                    movePage.profile
                      ? `${style.button} ${style.click}`
                      : style.button
                  }
                >
                  프로필
                </button>
                <button
                  onClick={(e) => {
                    getMypost();
                    mypostPage(e);
                  }}
                  className={
                    movePage.mypost
                      ? `${style.button} ${style.click}`
                      : style.button
                  }
                >
                  게시글
                </button>
                <button
                  onClick={() => {
                    settingPage();
                  }}
                  className={
                    movePage.setting
                      ? `${style.button} ${style.click}`
                      : style.button
                  }
                >
                  설정
                </button>
              </div>
              <div className={style.inputContainer}>
                {movePage.profile ? <Profile /> : null}
                {movePage.mypost ? (
                  <ul className={style.overflow}>
                    {userPosts.map((post) => {
                      return <Mypost key={post.id} postInfo={post} />;
                    })}
                  </ul>
                ) : null}

                {movePage.setting ? <Setting /> : null}
              </div>
            </div>
            <Link to="/add-post">
              <button className={style.addButton}>ADD POST</button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

Mypage.propTypes = {
  key: PropTypes.any,
  category: PropTypes.any,
  title: PropTypes.any,
  likes: PropTypes.any,
  comments: PropTypes.any,
  views: PropTypes.any,
  created: PropTypes.any
};
export default Mypage;
