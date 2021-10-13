import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryPost from '../components/Board/CategoryPost';
import OrderPost from '../components/Board/OrderPost';
import PostCards from '../components/Board/PostCards';
import style from './Board.module.css';

function Board() {
  const [postItems, setPostItems] = useState([]);
  const [querys, setQuerys] = useState({
    user: '',
    category: '',
    offset: '',
    limit: '',
    order: '',
    sort: 'asc',
    content: ''
  });

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/posts');
      setPostItems(response.data.posts.rows);
      console.log(response.data.posts.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const getPostsQuerys = async (newQuerys) => {
    const keys = Object.keys(newQuerys);
    const values = Object.values(newQuerys);

    const string = keys.reduce((a, c, idx) => {
      if (values[idx]) {
        const query = keys[idx] + '=' + values[idx] + '&';
        return a + query;
      } else {
        return a;
      }
    }, '');
    console.log(string);
    try {
      const response = await axios.get(`http://localhost:4000/posts?${string}`);
      setPostItems(response.data.posts.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const categoryOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      category: e.target.innerText
    };
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  const filterOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      order: e.target.name
    };
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  const searchOnclickFn = (searchText) => {
    const newQuerys = {
      ...querys,
      content: searchText
    };
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className={style.section}>
      <CategoryPost categoryOnclickFn={categoryOnclickFn} />
      <OrderPost
        filterOnclickFn={filterOnclickFn}
        searchOnclickFn={searchOnclickFn}
      />
      <PostCards postItems={postItems} />
    </section>
  );
}

export default Board;
