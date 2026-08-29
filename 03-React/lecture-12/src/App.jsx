import React from "react";
import axios from "axios";

const App = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100",
    );
    console.log(response);
  };

  return (
    <div>
      <button
        onClick={() => {
          getData();
        }}
        className="text-3xl border-2 px-3 m-4 rounded-sm font-bold "
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
