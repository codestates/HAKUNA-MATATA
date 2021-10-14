import { Fragment } from 'react';
import React from 'react';
import style from './Footer.module.css';
import youtube from '../images/youtube.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <Fragment>
      <footer className={style.footer}>
        <div className={style.images}>
          <a
            href="https://instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagram} />
          </a>
          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} />
          </a>
          <a
            href="https://youtube.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={youtube} />
          </a>
        </div>
        <p className={style.copyright}>
          © Copyright ⓒ 2021 Hakuna Matata <br />
          &emsp;&emsp;The HADA Project Team
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
