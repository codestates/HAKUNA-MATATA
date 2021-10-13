import React from 'react';
// import style from './CategoryPost.module.css';
import PropTypes from 'prop-types';

export default function CategoryPosts() {
  // const [isActive, setActive] = useState([true, false, false, false, false]);

  // const toggleClass = (index) => {
  //   const newActive = [false, false, false, false, false];
  //   newActive[index] = !newActive[index];
  //   setActive(newActive);
  // };

  return (
    <div></div>
    // <div className={style.categoryWrap}>
    //   <ul>
    //     <li className={isActive[0] ? style.addClass : null}>
    //       <a
    //         onClick={(e) => {
    //           toggleClass(0);
    //           categoryOnclickFn(e);
    //         }}
    //       >
    //         전체
    //       </a>
    //     </li>
    //     <li className={isActive[1] ? style.addClass : null}>
    //       <a
    //         onClick={(e) => {
    //           toggleClass(1);
    //           categoryOnclickFn(e);
    //         }}
    //       >
    //         연애
    //       </a>
    //     </li>
    //     <li className={isActive[2] ? style.addClass : null}>
    //       <a
    //         onClick={(e) => {
    //           toggleClass(2);
    //           categoryOnclickFn(e);
    //         }}
    //       >
    //         친구
    //       </a>
    //     </li>
    //     <li className={isActive[3] ? style.addClass : null}>
    //       <a
    //         onClick={(e) => {
    //           toggleClass(3);
    //           categoryOnclickFn(e);
    //         }}
    //       >
    //         직장
    //       </a>
    //     </li>
    //     <li className={isActive[4] ? style.addClass : null}>
    //       <a
    //         onClick={(e) => {
    //           toggleClass(4);
    //           categoryOnclickFn(e);
    //         }}
    //       >
    //         가족
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}

CategoryPosts.propTypes = {
  categoryOnclickFn: PropTypes.any
};
