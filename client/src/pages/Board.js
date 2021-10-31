import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Board.module.css';
import bannerImg from '../images/thumbnail/moon.jpg';
import logoTitle from '../images/logoTitle.png';
import emptyImg from '../images/empty.jpeg';
import CategoryPost from '../components/Board/CategoryPost';
import OrderPost from '../components/Board/OrderPost';
import PostCards from '../components/Board/PostCards';
import PageNation from '../components/Board/PageNation';
import { REACT_APP_API_URL } from '../config';
import { useDispatch } from 'react-redux';
import { reset } from '../store/move-slice';

function Board() {
  const [isActive, setActive] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [postItems, setPostItems] = useState([]);
  const [postPages, setPostPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPostPages, setShowPostPages] = useState(0);
  const [querys, setQuerys] = useState({
    user: '',
    category: '',
    offset: 1,
    limit: 9,
    order: '',
    sort: '',
    content: ''
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, []);
  const getPosts = async () => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/posts`);
      const { rows, count } = response.data.posts;

      let pageCount = Math.ceil(count / querys.limit);
      setPostPages(pageCount);
      const newPostPages = new Array(pageCount).fill(false).map((el, idx) => {
        if (idx === 0) return !el;
        return el;
      });
      setActive(newPostPages);
      setPostItems(rows);
      console.log(rows);
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
    //console.log(string);

    try {
      const response = await axios.get(`${REACT_APP_API_URL}/posts?${string}`);
      const { rows, count, page } = response.data.posts;
      pageButtonCurrent(page - 1);
      let pageCount = Math.ceil(count / querys.limit);
      setPostPages(pageCount);
      setPostItems(rows);
      searchClearFn();
    } catch (err) {
      console.log(err);
    }
  };

  const categoryOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      offset: 1,
      category: e.target.innerText,
      content: ''
    };
    setCurrentPage(0);
    setShowPostPages(0);
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  const filterOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      order: e.target.name
    };
    setQuerys(newQuerys);
    const newPostPages = new Array(postPages).fill(false).map((el, idx) => {
      if (idx === 0) return !el;
      return el;
    });
    setActive(newPostPages);
    getPostsQuerys(newQuerys);
  };

  const searchOnclickFn = (searchText) => {
    const newQuerys = {
      user: '',
      category: '',
      offset: 1,
      limit: 9,
      order: '',
      sort: '',
      content: searchText
    };
    setQuerys(newQuerys);
    const newPostPages = new Array(postPages).fill(false).map((el, idx) => {
      if (idx === 0) return !el;
      return el;
    });
    setActive(newPostPages);
    getPostsQuerys(newQuerys);
  };

  const searchTextHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchClearFn = () => {
    setSearchText('');
  };

  const pageNumberOnclickFn = (e) => {
    const newQuerys = {
      ...querys,
      offset: Number(e.target.innerText)
    };
    setQuerys(newQuerys);
    getPostsQuerys(newQuerys);
  };

  const pageArrowOnclickFn = (e) => {
    const target = e.target.name;
    let NextOffset = '';

    if (target === 'left') {
      NextOffset = querys.offset > 1 ? querys.offset - 1 : 1;
    } else {
      NextOffset =
        querys.offset + 1 > postPages ? postPages : querys.offset + 1;
    }

    const newQuerys = {
      ...querys,
      offset: NextOffset
    };

    setQuerys(newQuerys);
    // 여기서 GET 요청 후 postPages 업데이트 되면서 useEffect 실행
    getPostsQuerys(newQuerys);
    setCurrentPage(newQuerys.offset);
  };

  const pageButtonCurrent = (index) => {
    const newActive = new Array(postPages).fill(false);
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    pageButtonCurrent(0);
  }, [postPages]);

  useEffect(() => {
    if (currentPage <= 5) {
      setShowPostPages(0);
    } else {
      // current page 5의 배수로 증가
      if ((currentPage - 1) % 5 === 0 || currentPage % 5 === 0) {
        if (currentPage % 5 === 0) {
          // arrow left
          setShowPostPages(currentPage - 5);
          // console.log(currentPage);
        }
        if ((currentPage - 1) % 5 === 0) {
          // arrow right
          setShowPostPages(currentPage - 1);
          // console.log(currentPage);
        }
      }
    }
  }, [currentPage, postPages]);

  return (
    <>
      <section
        className={style.section1}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1>HAKUNA MATATA 하쿠나 마타타</h1>
        <img src={logoTitle} />
      </section>
      <section className={style.section2}>
        <CategoryPost categoryOnclickFn={categoryOnclickFn} />
        <OrderPost
          filterOnclickFn={filterOnclickFn}
          searchText={searchText}
          searchTextHandler={searchTextHandler}
          setSearchText={setSearchText}
          searchOnclickFn={searchOnclickFn}
        />
        {postItems.length ? (
          <>
            <PostCards postItems={postItems} />
            <PageNation
              isActive={isActive}
              postPages={postPages}
              showPostPages={showPostPages}
              pageNumberOnclickFn={pageNumberOnclickFn}
              pageArrowOnclickFn={pageArrowOnclickFn}
              pageButtonCurrent={pageButtonCurrent}
            />
          </>
        ) : (
          <div className={style.emplyBox}>
            <img src={emptyImg} />
            <p>컨텐츠가 비었습니다.</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Board;
