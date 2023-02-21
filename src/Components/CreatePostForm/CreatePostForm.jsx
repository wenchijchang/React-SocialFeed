import React, { useState } from "react";

const CreatePostForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    console.log(newPost);
    props.addNewPost(newPost);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post</label>
        <input
          type="text"
          className="form-control"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "1em" }}
      >
        Create
      </button>
    </form>
  );
};

export default CreatePostForm;
