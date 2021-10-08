import style from './Header.module.css';
import Button from './Button';
import Logo from './Logo';
import userImg from '../../public/images/user.png';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <div className={style.navbar}>
          <span>About</span>
          <span>Board</span>
          <Button> + Add Post</Button>
          <img src={userImg} alt="user image" />
        </div>
      </header>
    </>
  );
};

export default Header;
