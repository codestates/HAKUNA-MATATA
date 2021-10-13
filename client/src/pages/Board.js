import React from 'react';

import CategoryPost from '../components/Board/CategoryPost';
import OrderPost from '../components/Board/OrderPost';
import PostCards from '../components/Board/PostCards';
import style from './Board.module.css'

function Board() {
  return (
    <section className={style.section}>
      <CategoryPost />
      <OrderPost />
      <PostCards />
    </section>
  );
}

export default Board;
