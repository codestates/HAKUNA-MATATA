import { Fragment } from 'react';
import style from './Footer.module.css';
import youtube from '../images/youtube.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className={style.footer}>
            <div className={style.images}>
              <img src={instagram} />
              <img src={github} />
              <img src={youtube} />
            </div>
          </div>
          <div className={style.copyright}>
            <p>
              © Copyright ⓒ 2021 Hakuna <br />
              MatataThe HADA Project Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
