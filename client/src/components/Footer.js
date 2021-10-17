import { Fragment } from 'react';
import React from 'react';
import style from './Footer.module.css';
import youtube from '../images/icons/youtube.png';
import github from '../images/icons/github.png';
import instagram from '../images/icons/instagram.png';

const Footer = () => {
  return (
    <Fragment>
      <footer className={style.footer}>
        <div className={style.images}>
          <a
            href="https://www.instagram.com/thehada___official/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={instagram} />
          </a>
          <a
            href="https://github.com/codestates/HAKUNA-MATATA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={github} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCPq9cHp36WkxVWRyVghkPhQ"
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
