import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Select from 'react-select';
import style from './EditPost.module.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import axios from 'axios';

const options = [
  { value: '연애', label: '연애' },
  { value: '친구', label: '친구' },
  { value: '가족', label: '가족' },
  { value: '직장', label: '직장' }
];

const EditPost = () => {
  const location = useLocation();
  let history = useHistory();

  const [content, setContent] = useState(location.state.content);
  const [title, setTitle] = useState(location.state.title);
  const [category, setCategory] = useState({
    value: location.state.category.name,
    label: location.state.category.name
  });

  if (!location.state) {
    history.push('/');
  }

  console.log(title, content);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const categoryHandler = (e) => {
    // setCategory(e.target.options);
    setCategory(options.value);
    console.dir(e.value);
  };

  const editPostHandler = async () => {
    const url = `http://localhost:4000/posts/${location.state.id}`;

    try {
      const updatedPost = await axios.patch(
        url,
        { title, content, category },
        { withCredentials: true }
      );
      console.log(updatedPost);

      history.push(`/posts/${location.state.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.container}>
      <div>
        <Select
          options={options}
          placeholder="카테고리 선택"
          value={category}
          className={style.select}
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
      <button className={style.submit} onClick={editPostHandler}>
        게시글 수정
      </button>
    </div>
  );
};

EditPost.propTypes = {
  props: PropTypes.any,
  location: PropTypes.any
};

export default EditPost;
