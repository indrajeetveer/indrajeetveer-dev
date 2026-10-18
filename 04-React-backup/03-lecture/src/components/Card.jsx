import React, { useState } from "react";

const Card = ({ data, handleLike, handleDisLike }) => {
  const { id, name, img, description, like, dislike } = data;

  return (
    <div className="flex h-[330px] w-[250px] flex-col items-center rounded-xl bg-sky-300 p-4 shadow-md">
      <img
        className="h-[120px] w-full rounded-xl object-cover object-top"
        src={img}
        alt={name}
      />

      <h1 className="mt-3 text-center text-xl font-semibold">{name}</h1>

      <p className="mt-1 flex-1 text-center text-sm font-medium text-gray-800">
        {description}
      </p>

      <div className="flex gap-3 font-semibold">
        <button
          onClick={() => handleLike(id)}
          className="rounded bg-yellow-300 px-3 py-1"
        >
          Like ({like})
        </button>
        <button
          onClick={() => {
            handleDisLike(id);
          }}
          className="rounded bg-red-600 px-3 py-1 text-white"
        >
          DisLike ({dislike})
        </button>
      </div>
    </div>
  );
};

export default Card;
