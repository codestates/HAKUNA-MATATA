import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../images/user.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [singupModal, setSignupModal] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  const handleSignupModal = () => {
    setSignupModal(!singupModal);
  };

  return (
    <>
      {loginModal && (
        <div
          className={loginModal && style.backDrop}
          onClick={handleLoginModal}
        >
          <LoginModal />
        </div>
      )}
      {singupModal && (
        <div>
          <div
            className={singupModal && style.backDrop}
            onClick={handleSignupModal}
          ></div>
          <SignupModal />
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
                singupModal ? `${style.font} ${style.focus}` : style.font
              }
              onClick={handleSignupModal}
            >
              회원가입
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
