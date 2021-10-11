import React from 'react';
import style from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div class="container">
      <div class="img"></div>
      <div class="test">
        <div class="statusCode">404</div>
        <p class="desc">
          죄송합니다.
          <br />
          현재 찾을 수 없는 페이지를 요청 하셨습니다.
          <br />
          <br />
          존재하지 않는 주소를 입력하셨거나,
          <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          <br />
          주소를 다시 한번 확인해주시기 바랍니다.
          <br />
          <br />
          감사합니다.
        </p>

        <div class="wrapper">
          <a href="#" class="goHome">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;