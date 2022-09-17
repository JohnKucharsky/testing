import { useState } from "react";

export default function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h3>My Counter</h3>
      <h2
        className={
          counterValue >= 100 ? "green" : counterValue <= -100 ? "red" : ""
        }
        data-testid="counterValueHeading">
        {counterValue}
      </h2>
      <button onClick={() => setCounterValue(counterValue - inputValue)}>
        -
      </button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button onClick={() => setCounterValue(counterValue + inputValue)}>
        +
      </button>
    </div>
  );
}
