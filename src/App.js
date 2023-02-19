import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  function createPostForm(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <table></table>
    </div>
  );
}

export default App;
