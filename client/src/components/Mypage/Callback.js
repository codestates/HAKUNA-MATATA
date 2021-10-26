import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { REACT_APP_API_URL } from '../../config';
import { login } from '../../store/login-slice';
import { useHistory } from 'react-router';

function Callback() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(async () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      await axios.post(`${REACT_APP_API_URL}/users/oauth/github`, {
        authorizationCode
      });
      dispatch(login());
      history.push('/mypage');
    }
  });
  return <div>로딩중입니다.</div>;
}

export default Callback;
