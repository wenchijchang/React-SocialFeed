import { useState } from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  const [buttonClass, setButtonClass] = useState("active");
  const [message, setMessage] = useState(true);

  function handleClick() {
    if (buttonClass === "active") {
      setButtonClass("inactive");
      setMessage(false);
    } else {
      setButtonClass("active");
      setMessage(true);
      // props.message = "Like";
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={handleClick}>
        {message ? "Like" : "Disliked"}
      </button>
    </div>
  );
};

export default CustomButton;
