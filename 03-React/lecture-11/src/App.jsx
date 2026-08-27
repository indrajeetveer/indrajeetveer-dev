import React from "react";

const App = () => {
  let studentInfo = {
    name: "veer",
    age: 22,
    email: "Indrajeet@gmail.com",
    RollNo: 57,
  };

  const newInfo = JSON.stringify(studentInfo);

  return (
    <div>
      {localStorage.setItem("Name", "Indrajeet")}
      {localStorage.setItem("Age", 23)}
      {localStorage.setItem("email", "indrajeet@gmail.com")}
      {localStorage.setItem("obj", newInfo)}
      {localStorage.getItem("obj")}
    </div>
  );
};

export default App;
