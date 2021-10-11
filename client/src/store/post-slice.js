import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const posts = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    getposts: (state, { payload }) => {
      state.push(payload);
    }
  }
});

export const { addpost, logout, getposts } = posts.actions;

export default posts.reducer;
