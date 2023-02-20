import React from "react";

const CustomButton = (props) => {
  function handleClick() {}

  return (
    <div>
      <button className="inactive" onClick={handleClick}>
        {props.message}
      </button>
    </div>
  );
};

export default CustomButton;
