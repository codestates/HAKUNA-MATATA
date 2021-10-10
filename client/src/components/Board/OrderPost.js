import React from 'react';
import style from '../Board/css/OrderPost.module.css';

export default function OrderPosts() {
  function OrderPost() {
    console.log(0);
  }

  function SearchPost() {
    console.log(0);
  }

  return (
    <div>
      <div>
        <button onClick={OrderPost}>
          <div className={style.OrderPost}>최신순</div>
        </button>
      </div>

      <div>
        <button onClick={OrderPost}>
          <div className={style.OrderPost2}>인기순</div>
        </button>
      </div>

      <div>
        <button onClick={OrderPost}>
          <div className={style.OrderPost3}>댓글순</div>
        </button>
      </div>

      <div>
        <button onClick={OrderPost}>
          <div className={style.OrderPost4}>조회순</div>
        </button>
      </div>

      <div>
        <div className={style.SearchPost}></div>
        <div className={style.SearchPostInput}>검색하세요.</div>
        <div className={style.SearchIcon}></div>

        <button onClick={SearchPost}>
          <div className={style.SearchInputIcon}></div>
          <div className={style.SearchInputBar}></div>
        </button>
      </div>
    </div>
  );
}
