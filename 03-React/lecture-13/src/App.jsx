import React, { useEffect, useState } from "react";
import axiox from "axios";

const App = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");

  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [number3, setnumber3] = useState(0);

  // store the api data in an array
  const [data, setdata] = useState(['']);
  const [num , setnum ] = useState(0)
  // useEffect(() => {
  //   console.log("Useeffect is running");
  // }, [name,count]);

  // useEffect(()=>{
  //   console.log("useeffect is run")
  // },[number1,number2,number3])

  let getData = async () => {
    const response = await axiox.get(
      "https://jsonplaceholder.typicode.com/users",
    );
   setdata(response.data[Math.floor(Math.random()*10)].name)
  };

  useEffect(()=>{
    getData()
  },[num])

  return (
    <div>
      <h1 className="text-5xl mx-20 my-3">Count {count}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setcount(count + 1)}
          className=" active:scale-90 text-2xl border-1 px-3 rounded-sm bg-sky-400 text-white py-1 "
        >
          Increment
        </button>
        <button
          onClick={() => setcount(0)}
          className=" active:scale-90 text-2xl border-1 px-3 rounded-sm bg-sky-400 text-white py-1 "
        >
          Reset
        </button>
        <button
          onClick={() => (count > 0 ? setcount(count - 1) : "")}
          className="active:scale-90 text-2xl border-1 px-3 rounded-sm bg-sky-400 text-white py-1 "
        >
          Decrement
        </button>
      </div>

      <h1 className="text-5xl m-3 font-bold">Input</h1>
      <input
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        type="text"
        className="border-1 mx-2 rounded-sm py-1 px-5"
      />

      <br />
      <br />

      <h1 className="text-3xl font-semibold mx-10">{number1}</h1>
      <button
        onClick={() => {
          setnumber1(Math.floor(Math.random() * 100));
        }}
        className="text-2xl border-1 px-3 py-1 rounded-sm bg-sky-400 text-white"
      >
        Number 1{" "}
      </button>

      <br />
      <br />

      <h1 className="text-3xl font-semibold mx-10">{number2}</h1>
      <button
        onClick={() => {
          setnumber2(Math.floor(Math.random() * 100));
        }}
        className="text-2xl border-1 px-3 py-1 rounded-sm bg-sky-400 text-white"
      >
        Number 2{" "}
      </button>

      <br />
      <br />

      <h1 className="text-3xl font-semibold mx-10">{number3}</h1>
      <button
        onClick={() => {
          setnumber3(Math.floor(Math.random() * 100));
        }}
        className="text-2xl border-1 px-3 py-1 rounded-sm bg-sky-400 text-white"
      >
        Number 3{" "}
      </button>

      <br />
      <br />

      <div>
          <h1 className="text-3xl font-bold">{data}</h1>
          <h1 className="text-4xl font-semibold mx-10">{num}</h1>
          <button 
          onClick={()=>{
            setnum(num+1)
          }}
          className=" active:scale-90 text-2xl border-1 px-3 py-1 rounded-sm bg-sky-400 text-white">click</button>
      </div>

    </div>
  );
};

export default App;
