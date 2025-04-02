import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/slices/counterSlice";
import { useState } from "react";
import { change } from "./features/slices/nameSlice";

function App() {
  const [amount, setAmount] = useState();
  const [newName, setNewName] = useState("");
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.name.value);
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
  const handleName = () => {
    dispatch(change(newName));
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
      <h1>Name:{name}</h1>
      <input
        className="btn"
        type="text"
        value={newName}
        placeholder="Enter New Name:"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button className="btn" onClick={handleName}>
        Change Name
      </button>
    </div>
  );
}

export default App;
