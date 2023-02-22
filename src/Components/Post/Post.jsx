import React from "react";
import { TfiAlignRight } from "react-icons/tfi";
// import CustomButton from "../CustomButton/CustomButton";
import ThumbDown from "../CustomButton/ThumbDown";
import ThumbUp from "../CustomButton/ThumbUp";

const Post = ({ post }) => {
  return (
    <div className="post-card" style={{ borderBottom: "1px solid" }}>
      {/* <div className="border-box"> */}
      <h4>{post.name}</h4>
      <p>{post.post}</p>
      <div style={{ textAlign: "right" }}>
        <div className="btn-group">
          {/* <CustomButton /> */}
          <ThumbUp /> <ThumbDown />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Post;
