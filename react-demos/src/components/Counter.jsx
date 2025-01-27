import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const drecementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementHandler}> increment </button>
      <button onClick={drecementHandler}> drecement </button>
      <button onClick={reset}> reset </button>
    </div>
  );
};

export default Counter;
