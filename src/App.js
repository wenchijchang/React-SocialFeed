import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";

function App() {
  const [posts, setPosts] = useState([]);

  function createPostForm(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <CreatePostForm addNewPost={createPostForm} />
      <DisplayPosts parentPosts={posts} />
    </div>
  );
}

export default App;
