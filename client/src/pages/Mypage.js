import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Mypage.module.css';
import userImage from '../images/icons/user.png';
import pencilImage from '../images/icons/pencil.png';
import Profile from '../components/Mypage/Profile';
import Mypost from '../components/Mypage/Mypost';
import Setting from '../components/Mypage/Setting';
import { useSelector, useDispatch } from 'react-redux';
import { profile, mypost, setting } from '../store/move-slice';
import { getUserInfo, logout } from '../store/login-slice';
import PropTypes from 'prop-types';
import { REACT_APP_API_URL } from '../config';

axios.defaults.withCredentials = true;

const Mypage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movePage = useSelector((state) => state.movePage);
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const [imgSrc, setImgSrc] = useState(userImage);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getMypost();
    userAutn();
    dispatch(profile());
  }, []);

  const userAutn = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/users/userinfo`, {
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
        `${REACT_APP_API_URL}/posts?user=${userInfo.nickname}`,
        {
          withCredentials: true
        }
      );

      setUserPosts(response.data.posts.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const processImage = async (e) => {
    try {
      const imageFile = e.target.files[0];

      const fileReader = new FileReader();
      if (imageFile) {
        fileReader.readAsDataURL(imageFile);
      }

      fileReader.onload = (e) => setImgSrc(e.target.result);

      if (imageFile) {
        const formdata = new FormData();
        formdata.append('image', imageFile);
        const response = await axios.post(
          `${REACT_APP_API_URL}/users/profile`,
          { image: formdata },
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        console.log(response);
        userAutn();
        setImgSrc(response.data.location.image);
      }
    } catch (err) {
      console.log(err);
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
                      return (
                        <Mypost
                          key={post.id}
                          postInfo={post}
                          getMypost={getMypost}
                        />
                      );
                    })}
                  </ul>
                ) : null}

                {movePage.setting ? <Setting /> : null}
              </div>
            </div>
          </div>
        </main>
        <Link to="/add-post">
          <button className={style.addButton}>ADD POST</button>
        </Link>
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
