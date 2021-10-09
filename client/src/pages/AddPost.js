import React from 'react';
import Select from 'react-select';
import style from './AddPost.module.css';

const options = [
  { value: '연애', label: '연애' },
  { value: '친구', label: '친구' },
  { value: '가족', label: '가족' },
  { value: '직장', label: '직장' }
];

const AddPost = () => {
  return (
    <div className={style.container}>
      <div>
        <Select
          options={options}
          placeholder="카테고리 선택"
          className={style.select}
          isClearable
        />
        <input type="text" placeholder="+ 제목" className={style.title} />
        <textarea
          placeholder="+ 게시할 내용을 입력하세요"
          className={style.textarea}
        ></textarea>
      </div>
      <button type="submit" className={style.submit}>
        게시글 작성
      </button>
    </div>
  );
};

export default AddPost;
