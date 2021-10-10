import React, { useState } from 'react';
import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../images/user.png';

import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  
  const [userImgClicked, setUserImgClicked] = useState(false);
  
  const userImgHandler = () => {
    setUserImgClicked(!userImgClicked)
  };
  
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  const handleSignupModal = () => {
    setSignupModal(!signupModal);
  }

  return (
    <>
      {loginModal && (
        <div
          className={loginModal && style.backDrop}
          onClick={handleLoginModal}
        >
          <LoginModal handleSignupModal={handleSignupModal} />
        </div>
      )}
      {signupModal && (
        <div>
          <div
            className={signupModal && style.backDrop}
            onClick={handleSignupModal}
          ></div>
          <SignupModal
            handleLoginModal={handleLoginModal}
            handleSignupModal={handleSignupModal}
          />
        </div>
      )}

      <header className={style.header}>
        <Logo />
        <div className={style.navbar}>
          <span>About</span>
          <span>Board</span>
          <Button> + Add Post</Button>
          <img
            src={userImg}
            alt="user image"
            onClick={handleMenu}
            className={style.img}
          />
          <div className={isOpen ? style.menuBox : style.hidden}>
            <button
              className={
                loginModal ? `${style.font} ${style.focus}` : style.font
              }
              onClick={handleLoginModal}
            >
              로그인
            </button>
            <button
              className={
                signupModal ? `${style.font} ${style.focus}` : style.font
              }
              onClick={handleSignupModal}
            >
              회원가입
            </button>

          <button
            className={
              userImgClicked
                ? `${style.userImg} ${style.userImgClicked}`
                : style.userImg
            }
            onClick={userImgHandler}
          >
            <img src={userImg} alt="user image" />
          </button>
          <div className={userImgClicked ? style.menuBox : style.hidden}>
            <Link to="/mypage">
              <button className={style.modifyButton}>마이페이지</button>
            </Link>
            <Link to="#">
              <button className={style.modifyButton}>내 게시글</button>
            </Link>
            <Link to="#">
              <button className={style.modifyButton}>로그아웃</button>
            </Link>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;