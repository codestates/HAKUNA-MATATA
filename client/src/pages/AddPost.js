import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import style from './AddPost.module.css';
import { useHistory } from 'react-router';
import { REACT_APP_API_URL } from '../config';

const options = [
  { value: '연애', label: '연애' },
  { value: '친구', label: '친구' },
  { value: '가족', label: '가족' },
  { value: '직장', label: '직장' }
];

const AddPost = () => {
  let history = useHistory();

  const [content, setContents] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const body = { title, content, category };

  const addPostHandler = async () => {
    try {
      const addpost = await axios.post(`${REACT_APP_API_URL}/posts`, body, {
        withCredentials: true
      });

      console.log(addpost);

      history.push('/');
    } catch (err) {
      console.log(err);
      alert('로그인 해주세요.');
    }
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContents(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.value);
    console.dir(e.value);
  };

  return (
    <div className={style.container}>
      <div>
        <Select
          options={options}
          value={category.value}
          placeholder="카테고리 선택"
          onChange={(e) => categoryHandler(e)}
          isClearable
        />
        <input
          type="text"
          value={title}
          placeholder="+ 제목"
          className={style.title}
          onChange={(e) => titleHandler(e)}
        />
        <textarea
          value={content}
          placeholder="+ 게시할 내용을 입력하세요"
          className={style.textarea}
          onChange={(e) => contentHandler(e)}
        ></textarea>
      </div>
      <div className={style.submitWrap}>
        <button className={style.submit} onClick={addPostHandler}>
          게시글 작성
        </button>
      </div>
    </div>
  );
};

export default AddPost;
