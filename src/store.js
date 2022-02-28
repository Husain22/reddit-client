import { configureStore } from "@reduxjs/toolkit"
import searchBarSlice from "./components/searchBar/searchBarSlice"
import subredditsSlice from "./components/subreddits/subredditsSlice"
import individualPostSlice from "./components/posts/individualPost/individualPostSlice"
import postsSlice from "./components/posts/postsSlice"

export default configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice,
    individualPostId: individualPostSlice,
  },
})
