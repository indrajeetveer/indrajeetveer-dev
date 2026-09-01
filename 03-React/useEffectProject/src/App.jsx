import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [user, setuser] = useState([]);
  const [name, setname] = useState("");
  const [gitUSer, setgitUser] = useState(null);

  // let getDate = async () => {
  //   let response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users",
  //   );
  //   setuser(response.data);
  // };

  let RandomUser = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    gitUSer(response.data[Math.floor(Math.random() * 10)]);
  };

  // useEffect(()=>{
  //    getDate()
  // })

  let gitInfo = async () => {
    let response = await axios.get(`https://api.github.com/users/${name}`);
    setgitUser(response.data);
  };

  return (
    <div>
      {/* {user.map((elem, id) => {
        return <h1>{elem.name}</h1>;
      })} */}

      {/* <Card user={user} randomUser={RandomUser} /> */}

      <input
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        className="text-3xl border-1 rounded-sm font-semibold "
        type="text"
        placeholder="Enter the name "
      />

      <button
        onClick={() => gitInfo()}
        className="text-2xl border-1 px-2 mt-2 rounded-xl text-white bg-sky-400 "
      >
        Check
      </button>

      <br />
      <br />
      {gitUSer && (
        <div>
          <h1>Profile Image</h1>
          <h1>Username{gitUSer.name}</h1>
          <h1>Name{gitUSer.name}</h1>
          <h1>Followers{gitUSer.followers}</h1>
          <h1>Following{gitUSer.following}</h1>
          <h1>Public Repositories{gitUSer.public_repos}</h1>
        </div>
      )}
    </div>
  );
};

export default App;
