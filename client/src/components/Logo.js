import React from 'react';

import logo from '../../public/images/logo.png';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo image" className={style.logo} />
    </div>
  );
};

export default Logo;
