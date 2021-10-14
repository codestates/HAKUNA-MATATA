import React, { useState } from 'react';
import style from './OrderPost.module.css';
import search from '../../images/icons/search.png';
import PropTypes from 'prop-types';

export default function OrderPosts({
  filterOnclickFn,
  searchTextHandler,
  searchText,
  searchOnclickFn
}) {
  const [isActive, setActive] = useState([true, false, false, false]);

  const pageButtonCurrent = (index) => {
    const newActive = [false, false, false, false];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <div className={style.orderWrap}>
      <div className={style.filterWrap}>
        <ul>
          <li>
            <a
              name=""
              className={isActive[0] ? style.addClass : null}
              onClick={(e) => {
                pageButtonCurrent(0);
                filterOnclickFn(e);
              }}
            >
              최신순
            </a>
          </li>
          <li>
            <a
              name="likes"
              className={isActive[1] ? style.addClass : null}
              onClick={(e) => {
                pageButtonCurrent(1);
                filterOnclickFn(e);
              }}
            >
              인기순
            </a>
          </li>
          <li>
            <a
              name="comments"
              className={isActive[2] ? style.addClass : null}
              onClick={(e) => {
                pageButtonCurrent(2);
                filterOnclickFn(e);
              }}
            >
              댓글순
            </a>
          </li>
          <li>
            <a
              name="views"
              className={isActive[3] ? style.addClass : null}
              onClick={(e) => {
                pageButtonCurrent(3);
                filterOnclickFn(e);
              }}
            >
              조회순
            </a>
          </li>
        </ul>
      </div>
      <div className={style.searchWrap}>
        <label>
          <input
            type="text"
            value={searchText}
            onChange={searchTextHandler}
            placeholder="검색하세요."
          />
          <img
            src={search}
            onClick={() => {
              searchOnclickFn(searchText);
            }}
          />
        </label>
      </div>
    </div>
  );
}

OrderPosts.propTypes = {
  filterOnclickFn: PropTypes.any,
  searchText: PropTypes.any,
  searchTextHandler: PropTypes.any,
  searchOnclickFn: PropTypes.any
};
