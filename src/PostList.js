import React from "react";
import PostView from "./PostView";

function PostList({posts, deletePost}) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostView 
          post={post} 
          key={index} 
          deletePost={() => deletePost(index)}
        />
      )
      )}
    </div>
  ); 
}

export default PostList;
