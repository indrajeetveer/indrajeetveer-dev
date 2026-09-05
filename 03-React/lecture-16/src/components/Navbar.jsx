import React from "react";
import { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState("");

  return (
    <div className="bg-green-500 py-3 px-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.changeTheme(newTheme)
          setnewTheme("");
        }}
      >
        <input
          value={newTheme}
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
          type="text"
          placeholder="Enter the Theme"
          className="border-1 px-2 mt-4 bg-yellow-50"
        />
        <button className="text-2xl border-1 px-3 py-1 font-semibold rounded ml-4 bg-sky-400 mt-2 text-white">
          Click
        </button>
      </form>
    </div>
  );
};

export default Navbar;
