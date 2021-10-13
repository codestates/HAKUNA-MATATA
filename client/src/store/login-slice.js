import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false, userInfo: {} };

const authSlice = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    }
  }
});

export const { login, logout, getUserInfo } = authSlice.actions;

export default authSlice.reducer;
