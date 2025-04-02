import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const incByAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div className="counter">
      <div className="b">
        <button className="btn" onClick={handleIncrement}>
          Increment(+)
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement(-)
        </button>
      </div>
      <h1>Count:{count}</h1>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
      <input
        className="btn"
        type="number"
        value={amount}
        placeholder="Enter Amount:"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button className="btn" onClick={incByAmount}>
        IncByAmount
      </button>
    </div>
  );
}

export default App;
