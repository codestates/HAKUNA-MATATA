import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../store/move-slice';
import { logout } from '../store/login-slice';
import { useHistory } from 'react-router';
import style from './Header.module.css';
import Logo from './Logo';
import userImg from '../images/icons/user.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { showLoginModal, showSignupModal } from '../store/modal-slice';
import { REACT_APP_API_URL } from '../config';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const movePage = useSelector((state) => state.movePage);
  const modal = useSelector((state) => state.modal);
  const { loginModal, signupModal } = modal;

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${REACT_APP_API_URL}/users/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(logout());
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  document.addEventListener('click', (e) => {
    if (
      isOpen &&
      e.target.className !== 'Header_successMenu__3ypHM' &&
      e.target.className !== 'Header_img__oz08g'
    ) {
      setIsOpen(false);
    }
  });

  return (
    <header className={style.header}>
      <Logo />
      <div className={style.navbar}>
        <a
          href="https://www.youtube.com/channel/UCPq9cHp36WkxVWRyVghkPhQ"
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
          className={style.img}
          alt="user image"
          onClick={handleMenu}
        />
        <div className={isOpen && !isLogin ? style.menuBox : style.hidden}>
          <button
            className={loginModal ? `${style.font} ${style.focus}` : style.font}
            onClick={() => dispatch(showLoginModal(true))}
          >
            로그인
          </button>
          <button
            className={
              signupModal ? `${style.font} ${style.focus}` : style.font
            }
            onClick={() => {
              dispatch(showSignupModal(true));
            }}
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
  );
};

export default Header;
