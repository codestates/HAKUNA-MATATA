import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterPost = createSlice({
  name: 'filterPost',
  initialState: initialState,
  reducers: {
    filterpost: (state, { payload }) => {
      state.push(payload);
    }
  }
});

export const { addpost, logout, filterpost } = filterPost.actions;

export default filterPost.reducer;
