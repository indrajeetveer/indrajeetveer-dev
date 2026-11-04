import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex item-center justify-between px-30 bg-sky-400">
      <div>
        <img
          className="h-[100px]"
          src="https://smartinfosys.net/wp-content/uploads/2024/07/disney-logo.png"
          alt="img"
        />
      </div>

      <div className="flex item-center justify-center gap-20 mt-8 font-semibold text-xl text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contect">Contect</Link>
      </div>
    </div>
  );
};

export default Navbar;
