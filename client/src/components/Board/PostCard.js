import React from 'react';
import style from './PostCard.module.css';
import comments from '../../images/comments.png';
import heart from '../../images/heart.png';
import eye from '../../images/eye.png';
import user from '../../images/user.png';

export default function PostCard() {
  return (
    <li className={style.item}>
      <a>
        <article>
          <div className={style.itemImage}>text</div>
          <div className={style.itemTitle}>
            <h4>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요</h4>
          </div>
          <div className={style.itemInfo}>
            <div className={style.subInfo}>
              <ul>
                <li>
                  <img src={comments} />
                  <span>500</span>
                </li>
                <li>
                  <img src={heart}/>
                  <span>500</span>
                </li>
                <li>
                  <img src={eye}/>
                  <span>500</span>
                </li>
              </ul>
            </div>
            <div className={style.mainInfo}>
              <div className={style.userInfo}>
                <img src={user}/>
                <span>nickname</span>
              </div>
              <div className={style.dateInfo}>
                <span>2021.10.10</span>
              </div>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
}