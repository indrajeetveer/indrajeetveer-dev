import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const [people, setpeople] = useState(() => {
    const saved = localStorage.getItem("StudentInfo");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 22,
            name: "veer",
            description: "Frontend Developer",
            like: 0,
            dislike: 0,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("StudentInfo", JSON.stringify(people));
  }, [people]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newpeople = {
      id: Date.now(),
      name: name,
      description: description,
      like: 0,
      dislike: 0,
    };

    setpeople([...people, newpeople]);
    setname("");
    setdescription("");
  };

  const handleLike = (id) => {
    setpeople(
      people.map((person) =>
        person.id === id ? { ...person, like: person.like + 1 } : person,
      ),
    );
  };

  const handleDislike = (id) => {
    setpeople(
      people.map((person) =>
        person.id === id ? { ...person, dislike: person.dislike + 1 } : person,
      ),
    );
  };

  return (
    <div className="m-5">
      <form onSubmit={submitHandler} className="text-2xl flex flex-col">
        Name:
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          className="border rounded p-2"
          placeholder="Enter the name"
        />
        <br />
        Description:
        <input
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          type="text"
          className="border rounded p-2"
          placeholder="Enter the description"
        />
        <button className="mt-2 rounded px-2 py-1 bg-amber-400">Click</button>
      </form>

      <div className="mt-6 flex flex-wrap gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="w-80 rounded-xl bg-white p-5 shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold">{person.name}</h2>
            <p className="mb-4 text-gray-600">{person.description}</p>
            <div className="flex gap-3">
              <button
                onClick={() => handleLike(person.id)}
                className="flex-1 rounded-lg bg-green-500 px-3 py-2 text-white hover:bg-green-600"
              >
                👍 Like ({person.like})
              </button>
              <button
                onClick={() => handleDislike(person.id)}
                className="flex-1 rounded-lg bg-red-500 px-3 py-2 text-white hover:bg-red-600"
              >
                👎 Dislike ({person.dislike})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
