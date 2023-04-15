import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
  },
  reducers: {
    getPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { getPost } = postSlice.actions;
export const selectPost = (state) => state.post.post;

export default postSlice.reducer;
