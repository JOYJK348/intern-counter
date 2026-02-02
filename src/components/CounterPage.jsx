import { useState } from "react";
import "./CounterPage.css";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2 className="counter-title">Count the Number</h2>

        <div className="counter-display" key={count}>
          {count}
        </div>

        <div className="counter-btn-group">
          <button
            className="counter-btn btn-increment"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
                                                                                                                                            
          <button
            className="counter-btn btn-decrement"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <button
            className="counter-btn btn-reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;

