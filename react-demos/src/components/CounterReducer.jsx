import { useReducer, useState } from "react";

const CounterReducer = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "incrementByAmount":
        return { ...state, count: state.count + action.payload };
      case "decrementByAmount":
        return { ...state, count: state.count - action.payload };
      case "reset":
        return { ...state, count: 0 };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    setAmount(() => e.target.value);
  };
  return (
    <div>
      <h1>CounterReducer</h1>
      <label htmlFor="amount"></label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        onChange={handleChange}
      />
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "decrementByAmount", payload: Number(amount) })
          }
        >
          - by {amount}
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: Number(amount) })
          }
        >
          + by {amount}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default CounterReducer;
