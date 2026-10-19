import React from "react";

const Card = ({ data, onDelete }) => {
  let { name, age, id } = data;
  return (
    <div className=" bg-amber-400 h-[140px] w-[200px] pt-5 px-7 rounded">
      <h1 className="font-semibold text-white">id:{id}</h1>
      <h1 className="font-semibold text-white">Name:-{name}</h1>
      <h2 className="font-semibold text-white">Age:-{age}</h2>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-600 text-white rounded px-2 py-1 mt-1"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
