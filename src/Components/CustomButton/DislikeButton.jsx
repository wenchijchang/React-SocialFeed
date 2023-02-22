import { useState } from "react";
import "./LikeDislikeButton.css";

const DislikeButton = (props) => {
  const [buttonClass, setButtonClass] = useState("inactive");
  const [message, setMessage] = useState(true);

  function handleClick() {
    if (buttonClass === "inactive") {
      setButtonClass("dislike");
      setMessage(false);
    } else {
      setButtonClass("inactive");
      setMessage(true);
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={handleClick}>
        {message ? "Dislike" : "Disliked"}
      </button>
    </div>
  );
};

export default DislikeButton;
