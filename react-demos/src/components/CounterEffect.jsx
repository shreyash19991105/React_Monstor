import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  useEffect(() => {
    console.log("count changed");
  }, [count]);
  return (
    <div>
      <h1>CounterEffect</h1>
      <div>{count}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>increment</button>
    </div>
  );
};

export default CounterEffect;
