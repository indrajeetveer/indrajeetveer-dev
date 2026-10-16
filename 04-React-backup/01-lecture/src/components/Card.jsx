import React from "react";

export const Card = ({ data }) => {
  let { name, color, bride } = data;
  return (
    <div className="mt-10 flex items-center justify-center flex-col bg-amber-400 p-12 rounded h-[400px] w-[300px]">
      <div>
        <img
          className="h-[300px]  rounded"
          src="https://images.unsplash.com/photo-1791862634310-4268e4ad1e08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="img"
        />
      </div>

      <div>
        <h1 className="text-2xl text-white">{name}</h1>
        <h2 className="text-2xl text-white">{bride}</h2>
        <h2 className="text-2xl text-white">{color}</h2>
      </div>
    </div>
  );
};
