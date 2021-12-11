import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_POSTS } from "../dummy_posts";

const dataSlice = createSlice({
  name: "data",
  initialState: { posts: DUMMY_POSTS },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
