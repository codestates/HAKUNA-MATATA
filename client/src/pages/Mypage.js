import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Mypage.module.css';
import userImage from '../images/icons/user.png';
import pencilImage from '../images/icons/pencil.png';
import emptyImg from '../images/empty.jpeg';
import Profile from '../components/Mypage/Profile';
import Mypost from '../components/Mypage/Mypost';
import Setting from '../components/Mypage/Setting';
import { useSelector, useDispatch } from 'react-redux';
import { profile, mypost, setting } from '../store/move-slice';
import { getUserInfo } from '../store/login-slice';
import PropTypes from 'prop-types';
import { REACT_APP_API_URL } from '../config';
import { logout } from '../store/login-slice';

axios.defaults.withCredentials = true;

const Mypage = () => {
  const dispatch = useDispatch();
  const movePage = useSelector((state) => state.movePage);
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const [imgSrc, setImgSrc] = useState(userImage);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    userAutn();
    dispatch(profile());
    getMyPost();
  }, []);

  const getMyPost = async () => {
    try {
      const response = await axios.get(
        `${REACT_APP_API_URL}/posts?user=${userInfo.id}`,
        { withCredentials: true }
      );

      setUserPosts(response.data.posts.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const userAutn = async () => {
    try {
      const url = `${REACT_APP_API_URL}/users/`;
      const res = await axios.get(url + 'userinfo', { withCredentials: true });
      dispatch(getUserInfo(res.data.userInfo));
    } catch (err) {
      dispatch(logout());
      history.push('/');
    }
  };

  const processImage = async (e) => {
    try {
      const imageFile = e.target.files[0];
      if (!imageFile) return;

      // 프로필 이미지 상태 변경
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        setImgSrc(e.target.result);
      };

      // POST 요청을 위한 formData 생성
      const formData = new FormData();
      formData.append('image', imageFile);

      const url = `${REACT_APP_API_URL}/users/profile`;
      const response = await axios.post(url, formData, {
        withCredentials: true
      });
      console.log('업로드 성공');
      console.log(response);
      userAutn();
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
                <img
                  src={
                    userInfo.image
                      ? `https://hakunamatata.kr${userInfo.image}`
                      : imgSrc
                  }
                  className={style.userImage}
                />
                <img src={pencilImage} className={style.modifyImg} />
              </label>
              <input
                type="file"
                name="image"
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
                    // getMypost();
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
                {movePage.profile && <Profile />}
                {movePage.mypost && (
                  <ul className={style.overflow}>
                    {userPosts.length ? (
                      userPosts.map((post) => {
                        return (
                          <Mypost
                            key={post.id}
                            postInfo={post}
                            getMyPost={getMyPost}
                          />
                        );
                      })
                    ) : (
                      <div className={style.emplyBox}>
                        <img src={emptyImg} />
                        <p>컨텐츠가 비었습니다.</p>
                      </div>
                    )}
                  </ul>
                )}
                {movePage.setting && <Setting />}
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
