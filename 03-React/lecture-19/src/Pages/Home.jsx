import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col mt-60">
      <h1 className="text-5xl font-bold ">This is an home page</h1>
      <button
        onClick={() => {
          navigate("/Products");
        }}
        className="mt-8 text-4xl px-4 py-2 rounded-sm bg-sky-400 text-white font-bold"
      >
        Explore Products
      </button>
    </div>
  );
};

export default Home;
