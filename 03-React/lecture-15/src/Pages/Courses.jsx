import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <div className="flex bg-red-600 gap-30 mt-2 py-1 ">
       <p>sale is live!!!!!</p>
       <p>sale is live!!!!!</p>
       <p>sale is live!!!!!</p>
       <p>sale is live!!!!!</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
