import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>Timer</h1>
      <div>
        <h1>Tiemr : {count}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>
          Stop Timer
        </button>
      </div>
    </div>
  );
};

export default Timer;
