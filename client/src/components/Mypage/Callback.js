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
    try {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      console.log(authorizationCode);
      if (authorizationCode) {
        await axios.post(
          `${REACT_APP_API_URL}/users/oauth/github`,
          {
            authorizationCode
          },
          {
            withCredentials: true
          }
        );
        dispatch(login());
        history.push('/mypage');
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  return <div>로딩중입니다.</div>;
}

export default Callback;
