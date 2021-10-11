import React from 'react';
import style from './OrderPost.module.css';
import heart from '../../images/heart.png'

export default function OrderPosts() {

  return (
    <div className={style.orderWrap}>
      <div className={style.filterWrap}>
        <ul>
          <li><a>최신순</a></li>
          <li><a>인기순</a></li>
          <li><a>댓글순</a></li>
          <li><a>조회순</a></li>
        </ul>
      </div>
      <div className={style.searchWrap}>
        <label>
          <input type="text" placeholder="검색하세요."/>
          <img src={heart} />
        </label>
      </div>
    </div>
  );
}
