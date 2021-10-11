import React from 'react';
import style from './PostCards.module.css';
import PostCard from './PostCard';

export default function PostCards() {
  return (
    <div className={style.itemsWrap}>
      <ul className={style.itemsBox}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ul>
      {/* <div className={style.pageNation}></div> */}
    </div>
  );
}