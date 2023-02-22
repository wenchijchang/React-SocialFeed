import { useState } from "react";
import { TfiThumbUp } from "react-icons/tfi";

const ThumbUp = (props) => {
  const [like, setLike] = useState(false);

  return (
    <div>
      <TfiThumbUp
        onClick={() => setLike(!like)}
        color={like ? "green" : "gray"}
        size={"25px"}
      />
    </div>
  );
};

export default ThumbUp;
