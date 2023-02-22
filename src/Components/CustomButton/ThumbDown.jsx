import { useState } from "react";
import { TfiThumbDown } from "react-icons/tfi";

const ThumbDown = (props) => {
  const [dislike, setDislike] = useState(false);

  return (
    <div>
      <TfiThumbDown
        onClick={() => setDislike(!dislike)}
        color={dislike ? "red" : "gray"}
        size={"25px"}
      />
    </div>
  );
};

export default ThumbDown;
