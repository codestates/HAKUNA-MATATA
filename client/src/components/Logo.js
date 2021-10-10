import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo image" className={style.logo} />
        <p>안녕하세요 버그 픽스중입니다</p>
      </Link>
    </div>
  );
};

export default Logo;
