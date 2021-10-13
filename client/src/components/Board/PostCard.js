import React from 'react';
import style from './PostCard.module.css';
import comments from '../../images/comments.png';
import heart from '../../images/heart.png';
import eye from '../../images/eye.png';
import user from '../../images/user.png';
import PropTypes from 'prop-types';

export default function PostCard({key,image,content,comment,likes,views,created,nickname}) {
  return (
    <li className={style.item} key={key}>
      <a>
        <article>
          <div className={style.itemImage}>{image}</div>
          <div className={style.itemTitle}>
            <h4>{content}</h4>
          </div>
          <div className={style.itemInfo}>
            <div className={style.subInfo}>
              <ul>
                <li>
                  <img src={comments} />
                  <span>{comment}</span>
                </li>
                <li>
                  <img src={heart}/>
                  <span>{likes}</span>
                </li>
                <li>
                  <img src={eye}/>
                  <span>{views}</span>
                </li>
              </ul>
            </div>
            <div className={style.mainInfo}>
              <div className={style.userInfo}>
                <img src={user}/>
                <span>{nickname}</span>
              </div>
              <div className={style.dateInfo}>
                <span>{created}</span>
              </div>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
}

PostCard.propTypes = {
  key: PropTypes.any,
  content: PropTypes.any,
  image: PropTypes.any,
  comment: PropTypes.any,
  likes: PropTypes.any,
  views: PropTypes.any,
  created: PropTypes.any,
  nickname: PropTypes.any
};

