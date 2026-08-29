import React, { useState } from "react";
import axios from "axios";
import User from "./components/User";

const App = () => {
  const [allData, setallData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setallData(response.data);
  };

  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
        className=" active:scale-90 text-3xl border-2 px-3 mx-10 my-4 py-1 rounded-sm font-bold "
      >
        Get Data
      </button>

      <div className="all-Cards flex item-center justify-center gap-10 flex-wrap">
        {allData.map((elem, idx) => {
          return <div kay={idx}>
            <User elem={elem}/>
            </div>;
        })}
      </div>
    </div>
  );
};

export default App;
