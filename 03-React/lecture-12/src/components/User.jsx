import React from "react";

const User = (props) => {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  return (
    <div
      style={{ backgroundColor: `rgb(${color1},${color2},${color3})` }}
      className="border-none h-60 w-80 rounded-xl"
    >
      <h1 className="text-3xl mx-5 font-bold text-white text-center pt-5">{props.elem.name}</h1>
      <h2 className="text-2xl text-white font-bold text-center my-2">{props.elem.email}</h2>
      <h3 className="text-xl font-semibold text-white mx-19 my-2">{props.elem.address.city}</h3>
      <h3 className="text-xl font-bold text-center text-white">{props.elem.phone}</h3>
    </div>
  );
};

export default User;
