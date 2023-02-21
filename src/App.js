import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { name: "Jennifer", post: "It's President's Day this coming Monday!" },
    {
      name: "Optimus Prime",
      post: "Sometimes even the wisest of men and machines can be in error.",
    },
  ]);

  function createPostForm(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="container">
      <div className="row sticky-top" style={{ marginTop: "2em" }}>
        <h1 style={{ margin: "1em" }}>
          Social<small className="text-muted">Feed</small>
        </h1>
        <div
          className="row"
          style={({ marginTop: "1em" }, { marginBottom: "1em" })}
        >
          <div className="col center-text">
            <div className="border-box">
              <CreatePostForm addNewPost={createPostForm} />
            </div>
            <div className="border-box">
              <DisplayPosts parentPosts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
