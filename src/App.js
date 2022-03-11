import React, { useState } from "react"
import Header from "./components/Header"
import NewPost from "./components/NewPost"
import Feed from "./components/Feed"
import reducer from "./reducer"
import Post from "./components/Post"

export const UserContext = React.createContext();
export const [username, setUsername] = useState("Duardo")
export const [posts, setPosts] = React.useReducer(reducer, {posts:[]});

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, {posts:[]})

  return (
    <UserContext.Provider value={username}>
      <Header username={username} setUsername={setUsername} />
        <PostContext.Provider value={dispatch}>
          
        </PostContext.Provider>
      <Feed posts={state.posts} />
    </UserContext.Provider>
  )
}

export default App
