import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setdata] = useState([
    {
      id: "101",
      name: "indrajeet",
      age: "22",
    },
  ]);

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [id, setid] = useState("");

  console.log(name, age);

  const handleSubmit = (e) => {
    e.preventDefault();

    setdata([...data, { name, age, id }]);
    setname("");
    setage("");
    setid("");
  };

  const deleteHandler = (id) => {
    setdata(data.filter((item) => item.id !== id));
    localStorage.setItem("StudentInfo", JSON.stringify(data));
  };

  localStorage.setItem("StudentInfo", JSON.stringify(data));
  // console.log(data);
  return (
    <div>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className=" border-1 h-[200px] w-[300px] rounded-sm p-10 gap-3 mt-10 flex flex-col "
        >
          <input
            value={id}
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-1 text-center rounded-sm"
            type="text"
            placeholder="Enter the id"
          />
          <input
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-1 text-center rounded-sm"
            type="text"
            placeholder="Enter your name"
          />

          <input
            value={age}
            onChange={(e) => {
              setage(e.target.value);
            }}
            className="border-1 text-center rounded-sm"
            type="text"
            placeholder="Enter your age"
          />
          <button className="rounded active:scale-90 bg-sky-400 text-white px-3 py-1">
            Submit
          </button>
        </form>
      </div>

      <div className="flex gap-10 m-10 flex-wrap">
        {data.map((elem) => {
          return <Card key={elem.id} data={elem} onDelete={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
