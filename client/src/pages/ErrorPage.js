import React from 'react';
import style from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={style.container}>
      <div className={style.img}></div>
      <div className={style.test}>
        <div className={style.statusCode}>404</div>
        <p className={style.desc}>
          죄송합니다.
          <br />
          현재 찾을 수 없는 페이지를 요청 하셨습니다 🚧
          <br />
          아래 버튼을 눌러 홈으로 이동하세요 👣
        </p>

        <div className={style.wraaper}>
          <a href="/" className={style.goHome}>
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
