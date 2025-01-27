import { useEffect, useState } from "react";

const BasicEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  }, []);

  return (
    <div>
      <h1>BasicEffect</h1>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default BasicEffect;
