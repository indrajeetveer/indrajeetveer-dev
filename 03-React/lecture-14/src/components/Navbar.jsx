import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around font-semibold bg-sky-400 py-2 ">
      <h1 className="text-2xl">Navbar</h1>
      <input className="border-1 rounded-sm bg-white px-3 py-1" type="text" />
      <div className=" text-xl flex items-center justify-center gap-20">
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/products">Product's</Link>
        <Link to="/course">Courese</Link>
      </div>
    </div>
  );
};

export default Navbar;
