import React from 'react';

import style from './Banner.module.css';
import PropTypes from 'prop-types';

const Banner = ({ title }) => {
  return <div className={style.banner}>{title}</div>;

};

export default Banner;

Banner.propTypes = {
  title: PropTypes
};
