import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  profile: true,
  mypost: false,
  setting: false
};
const movePage = createSlice({
  name: 'movePage',
  initialState: initialState,
  reducers: {
    profile: (state) => {
      (state.profile = true), (state.mypost = false), (state.setting = false);
    },
    mypost: (state) => {
      (state.profile = false), (state.mypost = true), (state.setting = false);
    },
    setting: (state) => {
      (state.profile = false), (state.mypost = false), (state.setting = true);
    },
    reset: (state) => {
      (state.profile = false), (state.mypost = false), (state.setting = false);
    }
  }
});

export const { profile, mypost, setting, reset } = movePage.actions;
export default movePage.reducer;
