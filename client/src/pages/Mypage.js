import React, { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import style from './Mypage.module.css';
import userImage from '../images/user.png';
import pencilImage from '../images/pencil.png';
import SubButton from '../components/Mypage/SubButton.js';
import Profile from '../components/Mypage/Profile';
import Mypost from '../components/Mypage/Mypost';
import Setting from '../components/Mypage/Setting';
import { useSelector, useDispatch } from 'react-redux';
import { profile, mypost, setting } from '../store/move-slice';
const Mypage = () => {
  const [imgSrc, setImgSrc] = useState(userImage);
  const movePage = useSelector((state) => state.movePage);
  const dispatch = useDispatch();

  const processImage = (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const fileReader = new FileReader();
    if (imageFile) {
      fileReader.readAsDataURL(imageFile);
    }

    fileReader.onload = (e) => setImgSrc(e.target.result);
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
                <div className={style.username}>nickname</div>
                <div className={style.introduce}>소개가 비었습니다.</div>
              </div>
            </div>
            <hr />
            <div className={style.profileBody}>
              <div className={style.buttonContainer}>
                <SubButton movePage={profilePage} focus={movePage.profile}>
                  프로필
                </SubButton>
                <SubButton movePage={mypostPage} focus={movePage.mypost}>
                  게시글
                </SubButton>
                <SubButton movePage={settingPage} focus={movePage.setting}>
                  설정
                </SubButton>
              </div>
              <div className={style.inputContainer}>
                {movePage.profile ? <Profile /> : null}
                <ul className={style.overflow}>
                  {movePage.mypost ? <Mypost /> : null}
                  {movePage.mypost ? <Mypost /> : null}
                  {movePage.mypost ? <Mypost /> : null}
                  {movePage.mypost ? <Mypost /> : null}
                </ul>
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

export default Mypage;
