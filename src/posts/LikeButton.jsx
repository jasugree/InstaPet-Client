import { Button } from "reactstrap";
import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(null);
  console.log({ count });

  return (
    <div className="like-num">
      <div>
        <Button
          style={{
            color: "#0086c3",
            backgroundColor: "transparent",
            border: 0,
            fontSize: 24,
            padding: 0,
            marginRight: 8,
          }}
          onClick={() => setCount(count + 1)}
        >
          <i class="fas fa-paw"></i>
        </Button>
      </div>
      <div>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default LikeButton;
