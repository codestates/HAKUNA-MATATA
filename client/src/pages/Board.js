import React from 'react';
import CategoryPost from '../components/Board/CategoryPost';
import OrderPost from '../components/Board/OrderPost';
import PostCard from '../components/Board/PostCard';

function Board() {
  return (
    <div>
      <CategoryPost />
      <OrderPost />
      <PostCard />
    </div>
  );
}

export default Board;
