import React from 'react';
import style from './PageNation.module.css';
import PageNationButton from './PageNationButton';
import arrowLeft from '../..//images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import PropTypes from 'prop-types';

export default function PageNation({
  isActive,
  postPages,
  showPostPages,
  pageNumberOnclickFn,
  pageArrowOnclickFn
}) {
  return (
    <>
      {!postPages ? null : (
        <div className={style.pageNationWrap}>
          <div className={style.arrowBox}>
            <a className={style.arrow}>
              <img
                src={arrowLeft}
                name="left"
                onClick={(e) => {
                  pageArrowOnclickFn(e);
                }}
              />
            </a>
          </div>
          <ul>
            {isActive.map((el, index) => {
              if (index >= showPostPages && index <= showPostPages + 4) {
                return (
                  <PageNationButton
                    key={index}
                    index={index}
                    isActive={el}
                    pageNumberOnclickFn={pageNumberOnclickFn}
                  />
                );
              }
            })}
          </ul>
          <div className={style.arrowBox}>
            <a className={style.arrow}>
              <img
                src={arrowRight}
                name="right"
                onClick={(e) => {
                  pageArrowOnclickFn(e);
                }}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

PageNation.propTypes = {
  isActive: PropTypes.any,
  postPages: PropTypes.any,
  showPostPages: PropTypes.any,
  pageNumberOnclickFn: PropTypes.any,
  pageArrowOnclickFn: PropTypes.any
};
