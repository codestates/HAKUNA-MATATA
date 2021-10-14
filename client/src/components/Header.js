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
import { REACT_APP_API_URL } from '../config';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const movePage = useSelector((state) => state.movePage);

  const history = useHistory();
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
        `${REACT_APP_API_URL}/users/logout`,
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
    if (document.location.href !== '/mypage') {
      dispatch(reset());
    }
  });

  return (
    <>
      <header className={style.header}>
        <Logo />
        <div className={style.navbar}>
          <a
            href="https://github.com/codestates/HAKUNA-MATATA/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>About</span>
          </a>
          <Link to="/">
            <span>Board</span>
          </Link>
          <Link to="/add-post" className={style.addButton}>
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

      {!isLogin && loginModal && (
        <>
          <div
            className={loginModal && style.backDrop}
            onClick={handleLoginModal}
          ></div>
          <LoginModal
            handleSignupModal={handleSignupModal}
            handleLoginModal={handleLoginModal}
          />
        </>
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
    </>
  );
};

export default Header;
