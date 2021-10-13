import React from 'react';
import style from './PostCards.module.css';
// import PostCard from './PostCard';
import PropTypes from 'prop-types';

export default function PostCards({ postsItems }) {
  console.log(postsItems);
  return (
    <div className={style.itemsWrap}>
      <ul className={style.itemsBox}>
        {/* {postsItems.map((item) => {
          return <PostCard key={item.id} itemInfo={item} />;
        })} */}
      </ul>
      {/* <div className={style.pageNation}></div> */}
    </div>
  );
}

PostCards.propTypes = {
  postsItems: PropTypes.any
};
