import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../images/user.png';
import LoginModal from './Modal/LoginModal';
import SignupModal from './Modal/SignupModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  console.log(setIsLogin);
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
          <LoginModal />
        </div>
      )}
      {signupModal && (
        <div>
          <div
            className={signupModal && style.backDrop}
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
