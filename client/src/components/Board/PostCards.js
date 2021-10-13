import React from 'react';
import style from './PostCards.module.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';


export default function PostCards() {
  const posts = useSelector(state =>
    state.posts)
  console.log(posts);

  return (
    <div className={style.itemsWrap}>
      <ul className={style.itemsBox}>
        {posts.map((post) => {
          return (
            <PostCard key={post.id}
            content={post.content}
            image={post.image}
            comments={post.comments}
            likes={post.likes}
            views={post.views}
            created={post.created_at}
            nickname={post.nickname}/>
          )
        })}

        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </ul>
      {/* <div className={style.pageNation}></div> */}
    </div>
  );
}