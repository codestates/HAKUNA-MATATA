import React, { useState } from 'react';
import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../images/user.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [userImgClicked, setUserImgClicked] = useState(false);
  const userImgHandler = () => {
    setUserImgClicked(!userImgClicked);
  };

  return (
    <>
      <header className={style.header}>
        <Logo />
        <div className={style.navbar}>
          <span>About</span>
          <Link to="/">
            <span>Board</span>
          </Link>
          <Link to="/add-post">
            <Button> + Add Post</Button>
          </Link>

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
            <Link to="#">
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
      </header>
    </>
  );
};

export default Header;
