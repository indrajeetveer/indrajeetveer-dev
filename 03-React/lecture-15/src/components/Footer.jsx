import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const Naviget = useNavigate();
  return (
    <div className="flex item-center justify-between px-30 py-3 bg-amber-100 mt-150">
      <h3>Footer</h3>
      <button
        onClick={() => {
          Naviget('/courses')
        }}
        className=" active:scale-90 text-xl font-semibold rounded text-white bg-sky-400 px-2 py-1"
      >
        Check Courses
      </button>
    </div>
  );
};
