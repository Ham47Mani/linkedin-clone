import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { articleType } from "../constants/types";
import { createPost, getPosts } from "./articleActions";

// Initialze  the initial state
const initialState : {posts: articleType[], loadingCreationPost: boolean, loadingPosts: boolean} = {
  posts : [],
  loadingCreationPost: false,
  loadingPosts: false
};

// Create Reducer
const articleReducer = createSlice({
  initialState,
  name: "articles",
  reducers: {
    SetLoadingCreatePostStatus: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loadingCreationPost: action.payload
      }
    },
    SetLoadingPosts: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loadingPosts: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // ================== Start Create Post ==================
      .addCase(createPost.fulfilled, (state, action) => {
        return {
          ...state, posts: [...state.posts, action.payload]
        };
      })
      .addCase(createPost.rejected, (_state, action) => {
        alert(action.error.message);
      })
      // ================== End Create Post ==================

      // ================== Start GetPosts ==================
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(getPosts.fulfilled, (state, action:any) => {
        return {
          ...state, posts: action.payload
        };
      })
      .addCase(getPosts.rejected, (_state, action) => {
        alert(action.error.message);
      })
      // ================== End GetPosts ==================
    },
});

// Export the actions and reducers
export const { SetLoadingCreatePostStatus, SetLoadingPosts} = articleReducer.actions;
export default articleReducer.reducer;