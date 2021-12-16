import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../models";

interface state {
  posts: Post[];
}

const initialState: state = {
  posts: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
