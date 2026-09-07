import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Sections = () => {
  return (
    <div className="bg-blue-300 flex items-center justify-between p-20">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Sections;
