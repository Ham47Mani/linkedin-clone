import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userReducers";
import reduxThunk from 'redux-thunk';
import ArticleReducer from "./ArticleReducer";


const store = configureStore({
  reducer: {
    user: userReducers,
    articles: ArticleReducer,
  },
  middleware: [reduxThunk]
});

export default store;