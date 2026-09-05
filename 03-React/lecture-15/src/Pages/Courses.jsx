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

      <h1 className="text-5xl whitespace-nowrap font-semibold absolute top-1/2 left-1/2 -translate-1/2">
        This is an Courses page
      </h1>
      <Outlet />
    </div>
  );
};

export default Courses;
