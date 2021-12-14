import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_POSTS } from "../dummy_posts";
import { Post } from "../models";

interface state {
  posts: Post[];
}

const initialState: state = {
  posts: DUMMY_POSTS,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    addPost(state, action) {
      state.posts.unshift(action.payload);
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
