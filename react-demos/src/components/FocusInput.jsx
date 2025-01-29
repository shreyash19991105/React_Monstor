import { useRef } from "react";

const FocusInput = () => {
  const ref = useRef();

  const focusInput = () => {
    ref.current.focus();
  };
  return (
    <div>
      <h1>FocusInput</h1>
      <div>
        <input type="text" ref={ref} />
        <button onClick={focusInput}>focus</button>
      </div>
    </div>
  );
};

export default FocusInput;
