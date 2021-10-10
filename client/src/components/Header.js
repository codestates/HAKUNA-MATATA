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
  const [signupModal, setSignupModal] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };
  const handleSignupModal = () => {
    setSignupModal(!signupModal);
  };

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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
