import React, { useRef, useState } from "react";

const App = () => {
  console.log("App is rerender");
  const [formData, setformData] = useState([]);

  // used the useRef() hook

  const name = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);
  const description = useRef(null);

  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");
  // const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name: name.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
      description: description.current.value,
    };

    console.log(newData);

    setformData((prev) => [...prev, newData]);
    e.target.reset();
    name.current.focus();

    // let newData = [...formData, { name, email, phoneNumber, description }];
    // setformData(newData);
    // setemail("");
    // setname("");
    // setphoneNumber("");
    // setdescription("");
  };

  localStorage.setItem("empData", JSON.stringify(formData));

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8"
      >
        <h1 className="text-2xl font-semibold text-slate-900">Contact us</h1>

        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Name
          </label>
          <input
            ref={name}
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/40"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Email
          </label>
          <input
            ref={email}
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/40"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Phone number
          </label>
          <input
            ref={phoneNumber}
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/40"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-1.5 block text-sm font-medium text-slate-800"
          >
            Description
          </label>
          <textarea
            ref={description}
            id="description"
            rows={4}
            placeholder="Write your message"
            className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 placeholder-slate-400 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/40"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-teal-700 px-5 py-3 font-medium text-white transition hover:bg-teal-800"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default App;
