import { Fragment } from 'react';
import style from './Footer.module.css';
import youtube from '../images/youtube.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className={style.footer}>
          <div className={style.images}>
            <a href="https://instagram.com/">
              <img src={instagram} />
            </a>
            <a href="https://github.com/">
              <img src={github} />
            </a>
            <a href="https://youtube.com">
              <img src={youtube} />
            </a>
          </div>
          <p className={style.copyright}>
            © Copyright ⓒ 2021 Hakuna Matata <br />
            &emsp;&emsp;The HADA Project Team
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
