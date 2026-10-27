import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { nanoid } from "nanoid";

const App = () => {
  console.log("App rerender");
  const [postdata, setpostdata] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("empData")) || [];
    } catch {
      return [];
    }
  });
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [edit, setedit] = useState(null);

  useEffect(() => {
    localStorage.setItem("empData", JSON.stringify(postdata));
  }, [postdata]);

  useEffect(() => {
    const Savedata = JSON.parse(localStorage.getItem("empData"));
    console.log(Savedata);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (edit != null) {
      const copy = postdata.map((item) =>
        item.id === edit ? { ...item, name, description } : item,
      );

      setpostdata(copy);
      setedit(null);
    } else {
      setpostdata([...postdata, { id: nanoid(), name, description }]);
    }
    setname("");
    setdescription("");

    // setpostdata([...postdata, { id: nanoid(), name, description }]);
    // setname("");
    // setdescription("");
  };

  const deleteHandler = (id) => {
    setpostdata(postdata.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex item-center  justify-center mt-4">
        <form
          className="flex flex-col gap-5 border-1 h-[200px] w-[300px] p-4 rounded "
          onSubmit={submitHandler}
        >
          <input
            className="border-1 text-center rounded-sm font-semibold px-2 py-1"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            placeholder="Enter the name"
          />
          <input
            className="border-1 text-center rounded-sm font-semibold px-2 py-1"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            type="text"
            placeholder="Enter the Description"
          />
          <button className="bg-blue-400 px-3 py-1 rounded text-white">
            Add the Post
          </button>
        </form>
      </div>
      <Card
        postdata={postdata}
        deleteHandler={deleteHandler}
        setedit={setedit}
        setname={setname}
        setdescription={setdescription}
      />
    </div>
  );
};

export default App;
