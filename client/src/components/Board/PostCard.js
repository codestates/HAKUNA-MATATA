import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './PostCard.module.css';
import comments from '../../images/comments.png';
import heart from '../../images/heart.png';
import eye from '../../images/eye.png';
import user from '../../images/user.png';
import PropTypes from 'prop-types';
import romantic from '../../images/thumbnail/romantic.jpg';
import friends from '../../images/thumbnail/friends.jpg';
import work from '../../images/thumbnail/work.jpg';
import family from '../../images/thumbnail/family.jpg';

export default function PostCard({ itemInfo }) {
  const [bgImage, setBgImage] = useState(romantic);

  useEffect(() => {
    const categoryName = itemInfo.category.name;

    if (categoryName === '친구') setBgImage(friends);
    else if (categoryName === '직장') setBgImage(work);
    else if (categoryName === '가족') setBgImage(family);
  }, []);

  return (
    <>
      {!itemInfo ? null : (
        <li className={style.item}>
          <Link to={`/posts/${itemInfo.id}`}>
            <article>
              <div
                style={{
                  backgroundImage: `url(${bgImage})`
                }}
                className={style.itemImage}
              ></div>
              <div className={style.itemTitle}>
                <h4>{itemInfo.title}</h4>
              </div>
              <div className={style.itemInfo}>
                <div className={style.subInfo}>
                  <ul>
                    <li>
                      <img src={comments} />
                      <span>{itemInfo.comments}</span>
                    </li>
                    <li>
                      <img src={heart} />
                      <span>{itemInfo.likes}</span>
                    </li>
                    <li>
                      <img src={eye} />
                      <span>{itemInfo.views}</span>
                    </li>
                  </ul>
                </div>
                <div className={style.mainInfo}>
                  <div className={style.userInfo}>
                    <img src={user} />
                    <span>{itemInfo.user.nickname}</span>
                  </div>
                  <div className={style.dateInfo}>
                    <span>
                      {new Date(itemInfo.created_at).toLocaleDateString(
                        'ko-KR'
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </li>
      )}
    </>
  );
}

PostCard.propTypes = {
  itemInfo: PropTypes.any
};
