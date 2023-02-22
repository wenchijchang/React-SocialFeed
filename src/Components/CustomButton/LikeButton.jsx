import { useState } from "react";
import "./LikeDislikeButton.css";

const LikeButton = (props) => {
  const [buttonClass, setButtonClass] = useState("inactive");
  const [message, setMessage] = useState(true);

  function handleClick() {
    if (buttonClass === "inactive") {
      setButtonClass("like");
      setMessage(false);
    } else {
      setButtonClass("inactive");
      setMessage(true);
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={handleClick}>
        {message ? "Like" : "Liked"}
      </button>
    </div>
  );
};

export default LikeButton;
