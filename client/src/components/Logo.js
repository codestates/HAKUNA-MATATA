import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo image" className={style.logo} />
      </Link>
    </div>
  );
};

export default Logo;
