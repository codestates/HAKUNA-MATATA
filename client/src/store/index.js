import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false
};

const authSlice = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    }
  }
});

export const authActions = authSlice.actions;

const store = configureStore({ reducer: {} });

export default store;
