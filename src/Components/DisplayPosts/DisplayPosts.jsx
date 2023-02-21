import CustomButton from "../CustomButton/CustomButton";

const DisplayPosts = (props) => {
  return (
    <div className="post-feed">
      {props.parentPosts.map((post, index) => {
        return (
          <div key={index}>
            <h4>{post.name}</h4>
            <p>{post.post}</p>
            <CustomButton message="Like" />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
