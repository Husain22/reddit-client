import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import redditLogo from "./redditLogo.png"
import "./App.css"

import { Header } from "./components/header/Header"
import { Posts } from "./components/posts/Posts"
import { IndividualPost } from "./components/posts/individualPost/IndividualPost"
import { Subreddits } from "./components/subreddits/Subreddits"
import { getSubredditPosts } from "./Reddit"
import { changePosts } from "./components/posts/postsSlice"

function App() {
  const activeSub = useSelector((state) => state.subreddits.activeSubreddit)
  const dispatch = useDispatch()

  useEffect(() => {
    getSubredditPosts(activeSub).then((response) => {
      dispatch(changePosts(response))
    })
  }, [activeSub, dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/individualPost" element={<IndividualPost />}></Route>
            <Route path="/" element={<Posts />}></Route>
          </Routes>

          <Subreddits logo={redditLogo} className="sub-reddit" />
        </main>
      </div>
    </Router>
  )
}

export default App
