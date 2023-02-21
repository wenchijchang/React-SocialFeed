import { useState } from "react";
import "./CustomButton.css";

const CustomButton = (props) => {
  const [buttonClass, setButtonClass] = useState("active");

  function handleClick() {
    if (buttonClass === "active") {
      setButtonClass("inactive");
      props.message = "Dislike";
    } else {
      setButtonClass("active");
      props.message = "Like";
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={handleClick}>
        {props.message}
      </button>
    </div>
  );
};

export default CustomButton;

{
  /* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */
}

// function myFunction(x) {
//   x.classList.toggle("fa-thumbs-down");
// }

// return (
//   <div className="wrap">
//     <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
//   </div>
// );
