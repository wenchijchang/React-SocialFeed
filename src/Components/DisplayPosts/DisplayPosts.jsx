// import CustomButton from "../CustomButton/CustomButton";
import LikeButton from "../CustomButton/LikeButton";
import DislikeButton from "../CustomButton/DislikeButton";

const DisplayPosts = (props) => {
  return (
    <div className="post-feed">
      {props.parentPosts.map((post, index) => {
        return (
          <div key={index}>
            <h4>{post.name}</h4>
            <p>{post.post}</p>
            <div className="btn-btn-secondary" style={{ textAlign: "right" }}>
              {/* <CustomButton /> */}
              <LikeButton /> <DislikeButton />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
