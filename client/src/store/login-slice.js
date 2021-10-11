import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

const authSlice = createSlice({
  name: 'authentification',
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
