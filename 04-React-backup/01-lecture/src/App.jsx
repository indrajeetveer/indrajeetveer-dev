import React from "react";
import Counter from "./components/Counter";
import { Card } from "./components/Card";

const App = () => {
  const features = [
    { id: 1, name: "Sheru", bride: "Indian", color: "White" },
    { id: 2, name: "Raja", bride: "Punjabi", color: "Black" },
    { id: 3, name: "Moti", bride: "Marathi", color: "Brown" },
    { id: 4, name: "Bruno", bride: "Gujarati", color: "Golden" },
    { id: 5, name: "Tiger", bride: "Bengali", color: "Grey" },
  ];
  return (
    <div className="m-10">
      <Counter />
      <div className="flex flex-row gap-10 flex-wrap">
        {features.map((elem, idx) => {
          return <Card key={idx} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
