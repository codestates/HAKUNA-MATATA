import React from 'react';
import { Link } from 'react-router-dom';
import style from './css/Mypage.module.css';
import CategoryPost from '../components/Board/CategoryPost';
import OrderPost from '../components/Board/OrderPost';
import PostCard from '../components/Board/PostCard';

function Board() {
  return (
    <div>
      <CategoryPost />
      <OrderPost />
      <PostCard />
        <Link to="/add-post">
              <button className={style.addButton}>ADD POST</button>
        </Link>
    </div>
  );
}

export default Board;
