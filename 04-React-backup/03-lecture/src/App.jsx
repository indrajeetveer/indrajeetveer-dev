import React, { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount((c) => c + 1);
    setcount((c) => c + 1);
    setcount((c) => c + 1);
  };
  return (
    <div className="mt-10 mx-10">
      <h1>Count {count}</h1>

      <button
        onClick={increment}
        className="rounded bg-amber-400 px-2 py-1 font-semibold text-white"
      >
        Increment
      </button>
    </div>
  );
};

export default App;
