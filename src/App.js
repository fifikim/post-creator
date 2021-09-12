import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const addPost = (type, content) => {
    const newPost = {
      type,
      content
    };
    setPosts([...posts, newPost]);
  }

  const deletePost = (indexToDelete) =>
    setPosts((currentPosts) =>
      currentPosts.filter((post, index) => index !== indexToDelete)
  );

  return (
    <div className="App">
      <PostCreate addPost={addPost}/>
      <PostList posts={posts} deletePost={deletePost}/>
    </div>
  );
}

export default App;