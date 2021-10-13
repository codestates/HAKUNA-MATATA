import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const comments = createSlice({
  name: 'comments',
  initialState: initialState,
  reducers: {
    getposts: (state, { payload }) => {
      state.push(payload);
    }
  }
});

export const { addpost, logout, getposts } = comments.actions;

export default comments.reducer;
