import { useState } from "react";

const EventDemo = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [buttonText, setButtonText] = useState("Click");

  const handleClick = () => {
    setButtonText(() => "button Clicked");
  };
  const onHover = (e) => {
    e.target.style.backgroundColor = "yellow";
  };

  const onLeave = (e) => {
    e.target.style.backgroundColor = "transparent"; // Reset the color
  };

  const copyHandler = (e) => {
    setIsCopied((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick}>{buttonText}</button>
      <div>
        <p onCopy={copyHandler}>
          {isCopied
            ? "text is copied"
            : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis."}
        </p>
      </div>
      <div onMouseEnter={onHover} onMouseLeave={onLeave}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, itaque!
        </p>
      </div>
    </>
  );
};

export default EventDemo;
