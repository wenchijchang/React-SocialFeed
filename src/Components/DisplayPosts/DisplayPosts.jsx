// import CustomButton from "../CustomButton/CustomButton";
// import LikeButton from "../CustomButton/LikeButton";
// import DislikeButton from "../CustomButton/DislikeButton";
import Post from "../Post/Post";

const DisplayPosts = (props) => {
  return (
    <div className="post-feed">
      {props.parentPosts.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default DisplayPosts;
