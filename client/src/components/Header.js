import React, { useState } from 'react';
import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../images/user.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profile, mypost, reset } from '../store/move-slice';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const isLogin = useSelector((state) => state.isLogin.value);

  const dispatch = useDispatch();
  const movePage = useSelector((state) => state.movePage);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  const handleSignupModal = () => {
    setSignupModal(!signupModal);
  };

  document.addEventListener('click', (e) => {
    if (
      isOpen &&
      e.target.className !== 'Header_successMenu__3ypHM' &&
      e.target.className !== 'Header_img__oz08g'
    ) {
      setIsOpen(false);
    }
    if (document.location.href !== 'http://localhost:3000/mypage') {
      dispatch(reset());
    }
  });

  return (
    <>
      {loginModal && (
        <div>
          <div
            className={loginModal && style.backDrop}
            onClick={handleLoginModal}
          ></div>
          <LoginModal
            handleSignupModal={handleSignupModal}
            handleLoginModal={handleLoginModal}
          />
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
            <Link to="/">
              <span>Board</span>
            </Link>
            <Link to="/add-post">
              <Button className={style.bump}> + Add Post</Button>
            </Link>


          <img
            src={userImg}
            alt="user image"
            onClick={handleMenu}
            className={style.img}
          />
          {/* 로그인이 되면 isLogin상태를 리덕스에서 가져와서 
          isOpen && !isLogin ?style.menuBox : style.hidden 
          즉 프로필버튼눌러서 isOpen=true가되고 isLogin도 true라면 클래스가 hidden이라가려짐
           */}
          <div className={isOpen && !isLogin ? style.menuBox : style.hidden}>
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
          </div>

          <div className={isOpen && isLogin ? style.successMenu : style.hidden}>
            <Link to="/mypage">
              <button
                className={
                  movePage.profile
                    ? `${style.modifyButton} ${style.focus}`
                    : style.modifyButton
                }
                onClick={() => dispatch(profile())}
              >
                마이페이지
              </button>
            </Link>
            <Link to="/mypage">
              <button
                className={
                  movePage.mypost
                    ? `${style.modifyButton} ${style.focus}`
                    : style.modifyButton
                }
                onClick={() => dispatch(mypost())}
              >
                내 게시글
              </button>
            </Link>
            <Link to="#">
              <button className={style.modifyButton}>로그아웃</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
