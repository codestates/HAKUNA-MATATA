import React, { useState } from 'react';
import style from './CategoryPost.module.css';

export default function CategoryPosts() {
  const [onclick, setonclick] = useState({
    CategoryPost: true,
    CategoryPost2: false,
    CategoryPost3: false,
    CategoryPost4: false,
    CategoryPost5: false
  });

  function CategoryPost(text) {
    switch (text) {
      case '전체':
        setonclick({
          CategoryPost: true,
          CategoryPost2: false,
          CategoryPost3: false,
          CategoryPost4: false,
          CategoryPost5: false
        });
        break;
      case '연애':
        setonclick({
          CategoryPost: false,
          CategoryPost2: true,
          CategoryPost3: false,
          CategoryPost4: false,
          CategoryPost5: false
        });
        break;
      case '친구':
        setonclick({
          CategoryPost: false,
          CategoryPost2: false,
          CategoryPost3: true,
          CategoryPost4: false,
          CategoryPost5: false
        });
        break;
      case '직장':
        setonclick({
          CategoryPost: false,
          CategoryPost2: false,
          CategoryPost3: false,
          CategoryPost4: true,
          CategoryPost5: false
        });
        break;
      case '가족':
        setonclick({
          CategoryPost: false,
          CategoryPost2: false,
          CategoryPost3: false,
          CategoryPost4: false,
          CategoryPost5: true
        });
        break;
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => CategoryPost('전체')}>
          <div
            className={
              onclick.CategoryPost
                ? `${style.CategoryPost} ${style.click}`
                : `${style.CategoryPost} ${style.unclick}`
            }
          >
            전체
          </div>
        </button>
      </div>

      <div>
        <button onClick={() => CategoryPost('연애')}>
          <div
            className={
              onclick.CategoryPost2
                ? `${style.CategoryPost2} ${style.click}`
                : `${style.CategoryPost2} ${style.unclick}`
            }
          >
            연애
          </div>
        </button>
      </div>

      <div>
        <button onClick={() => CategoryPost('친구')}>
          <div
            className={
              onclick.CategoryPost3
                ? `${style.CategoryPost3} ${style.click}`
                : `${style.CategoryPost3} ${style.unclick}`
            }
          >
            친구
          </div>
        </button>
      </div>

      <div>
        <button onClick={() => CategoryPost('직장')}>
          <div
            className={
              onclick.CategoryPost4
                ? `${style.CategoryPost4} ${style.click}`
                : `${style.CategoryPost4} ${style.unclick}`
            }
          >
            직장
          </div>
        </button>
      </div>

      <div>
        <button onClick={() => CategoryPost('가족')}>
          <div
            className={
              onclick.CategoryPost5
                ? `${style.CategoryPost5} ${style.click}`
                : `${style.CategoryPost5} ${style.unclick}`
            }
          >
            가족
          </div>
        </button>
      </div>
    </div>
  );
}
