import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    count > 0 ? setcount(count - 1) : "";
  };

  const reset = () => {
    setcount(0);
  };
  return (
    <div>
      <h1 className="text-5xl font-semibold p-3">Count {count}</h1>
      <div className="flex gap-4 text-white">
        <button onClick={increment} className="rounded bg-amber-400 px-2 py-1">
          Increment
        </button>
        <button onClick={reset} className="rounded bg-amber-400 px-2 py-1">
          Reset
        </button>
        <button onClick={decrement} className="rounded bg-amber-400 px-2 py-1">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
