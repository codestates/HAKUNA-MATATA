import React from 'react';
// import { Link } from 'react-router-dom';
// import style from './Mypost.module.css';
// import dotMenu from '../../images/dot-menu.png';
// import comments from '../../images/comments.png';
// import heart from '../../images/heart.png';
// import eye from '../../images/eye.png';
import { useSelector } from 'react-redux';

const Mypost = () => {
  // const [dotButton, setDotButton] = useState(false);
  const posts = useSelector((state) => state.posts);
  console.log('@@', posts);
  // const handleDotButton = () => {
  //   setDotButton(!dotButton);
  // };
  return (
    <div></div>
    // <li className={style.post}>
    //   <div>
    //     <div className={style.category}>직장</div>
    //     <div className={style.postTitle}>
    //       코드스테이츠 페어가 힘들게 하네요...
    //     </div>
    //     <div className={style.subInfo}>
    //       <div className={style.imageBox}>
    //         <img className={style.image} src={comments} alt="댓글 수" />
    //         <span className={style.number}>128</span>
    //       </div>
    //       <div className={style.imageBox}>
    //         <img className={style.image} src={heart} alt="하트 수" />
    //         <span className={style.number}>30</span>
    //       </div>
    //       <div className={style.imageBox}>
    //         <img className={style.image} src={eye} alt="조회 수" />
    //         <span className={style.number}>1.3k</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={style.postRight}>
    //     <button
    //       className={
    //         dotButton ? `${style.dotBox} ${style.dotClick}` : style.dotBox
    //       }
    //       onClick={handleDotButton}
    //     >
    //       <img
    //         className={style.dotMenu}
    //         src={dotMenu}
    //         alt="수정, 삭제 메뉴버튼"
    //       />
    //     </button>
    //     <div className={style.date}>2021.09.22</div>
    //     <div className={dotButton ? style.menuBox : style.hidden}>
    //       <Link to="#">
    //         <button className={style.modifyButton}>수정</button>
    //       </Link>
    //       <button className={style.deleteButton}>삭제</button>
    //     </div>
    //   </div>
    // </li>
  );
};

export default Mypost;
