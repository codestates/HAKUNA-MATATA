import React from 'react';
import style from './PostCards.module.css';
import PostCard from './PostCard';
import PropTypes from 'prop-types';

export default function PostCards({ postItems }) {
  return (
    <div className={style.itemsWrap}>
      <ul className={style.itemsBox}>
        {postItems.map((item) => {
          return <PostCard key={item.id} itemInfo={item} />;
        })}
      </ul>
    </div>
  );
}

PostCards.propTypes = {
  postItems: PropTypes.any
};
