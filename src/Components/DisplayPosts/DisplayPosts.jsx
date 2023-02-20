const DisplayPosts = (props) => {
  return (
    <div className="post-feed">
      {props.parentPosts.map((post, index) => {
        return (
          <div key={index}>
            <h4>{post.name}</h4>
            <p>{post.post}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
