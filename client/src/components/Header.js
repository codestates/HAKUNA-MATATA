import React, { useState } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import userImg from '../images/user.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profile, reset } from '../store/move-slice';
import { logout } from '../store/login-slice';
import { useHistory } from 'react-router';

const Header = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const movePage = useSelector((state) => state.movePage);

  const dispatch = useDispatch();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  const handleSignupModal = () => {
    setSignupModal(!signupModal);
  };
  const handleLogout = () => {
    axios
      .post(
        'http://localhost:4000/users/logout',
        {},
        {
          withCredentials: true
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(logout());

        history.push('/');
      });
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
      {!isLogin && loginModal && (
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
            setSignupModal={setSignupModal}
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
            <button className={`${style.bump} ${style.button}`}>
              {' '}
              + Add Post
            </button>
          </Link>

          <img
            src={userImg}
            alt="user image"
            onClick={handleMenu}
            className={style.img}
          />
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
            <button
              className={
                movePage.profile
                  ? `${style.modifyButton} ${style.focus}`
                  : style.modifyButton
              }
              onClick={() => {
                dispatch(profile());
                history.push('/mypage');
              }}
            >
              마이페이지
            </button>

            <button className={style.modifyButton} onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
