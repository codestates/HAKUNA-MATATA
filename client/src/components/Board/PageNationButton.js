import style from './PageNation.module.css';
import PropTypes from 'prop-types';

export default function PageNationButton({
  index,
  isActive,
  pageNumberOnclickFn
}) {
  return (
    <li>
      <a
        className={isActive ? style.addClass : null}
        onClick={(e) => {
          pageNumberOnclickFn(e);
        }}
      >
        {index + 1}
      </a>
    </li>
  );
}

PageNationButton.propTypes = {
  index: PropTypes.any,
  isActive: PropTypes.any,
  pageNumberOnclickFn: PropTypes.any
};
