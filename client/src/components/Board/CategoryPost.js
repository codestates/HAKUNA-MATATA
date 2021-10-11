import React, { useState } from 'react';
import style from './CategoryPost.module.css';

export default function CategoryPosts() {
  const [isActive, setActive] = useState([true, false, false, false, false]);

  const toggleClass = (index) => {
    const newActive = [false, false, false, false, false];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <div className={style.categoryWrap}>
      <ul>
        <li className={isActive[0] ? style.addClass : null}>
          <a onClick={() => toggleClass(0)}>전체</a>
        </li>
        <li className={isActive[1] ? style.addClass : null}>
          <a onClick={() => toggleClass(1)}>연애</a>
        </li>
        <li className={isActive[2] ? style.addClass : null}>
          <a onClick={() => toggleClass(2)}>친구</a>
        </li>
        <li className={isActive[3] ? style.addClass : null}>
          <a onClick={() => toggleClass(3)}>직장</a>
        </li>
        <li className={isActive[4] ? style.addClass : null}>
          <a onClick={() => toggleClass(4)}>가족</a>
        </li>
      </ul>
    </div>
  );
}