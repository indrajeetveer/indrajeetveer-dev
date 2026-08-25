import React, { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";

const App = () => {
  const [budget, setbudget] = useState();
  const [savebudget, setsavebudget] = useState();
  const [remaing, setremaing] = useState();
  const [name, setname] = useState("");
  const [cost, setcost] = useState();
  const [addExpense, setaddExpense] = useState([]);

  let setBudget = () => {
    setsavebudget(budget);
    setremaing(budget);
  };

  let check = () => {
    let newarray = [...addExpense, { name, cost }];
    setaddExpense(newarray);
    setname("");
    setcost("");
  };

  return (
    <div className="flex item-center justify-center mt-2">
      <div>
        <h1 className="text-5xl font-bold">Personal Expense Tracker</h1>
        <h1 className="mt-4 text-xl font-semibold">Add/Update Budget</h1>
        <input
          value={budget}
          onChange={(e) => {
            setbudget(e.target.value);
          }}
          className="mt-3 border-1 py-1 px-76 rounded-sm"
          type="text"
        />
        <br />
        <button
          onClick={() => {
            setBudget();
          }}
          className=" active:scale-95 mt-2 border-1 px-3 py-1 bg-black text-white font-semibold mx-1 rounded-sm text-lg"
        >
          Save Budget
        </button>

        <div className="mt-3 flex gap-4">
          <button className="border-none font-bold  rounded-sm bg-pink-300 px-15 py-2">
            Budget:Rs {savebudget}
          </button>
          <button className="border-none font-bold  rounded-sm bg-sky-300 px-15 py-2">
            Remaning:Rs {remaing}
          </button>
          <button className="border-none font-bold  rounded-sm bg-sky-400 px-15 py-2">
            Spend far:Rs 0
          </button>
        </div>

        {/* Second Part */}
        <h1 className="mt-3 text-4xl font-bold">Expenses</h1>

        <div className="mt-3 border h-50 overflow-auto">
          {addExpense.map((e, id) => {
            return (
              <div className="flex item-center justify-between border-1 py-2 rounded-sm">
                <h1 className="ml-3 font-bold">{e.name}</h1>
                <button className="border-1 mr-4 px-4 py-[2px] rounded-sm bg-sky-500 font-bold text-white">
                  Rs.{e.cost}
                </button>
              </div>
            );
          })}
        </div>

        {/* Thired part */}

        <div>
          <h1 className="mt-3 font-bold text-4xl">Add Expense</h1>

          <div className="flex item-center justify-center gap-3 mt-3">
            <div>
              <span>Name</span>
              <br />
              <input
              required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                className="border-1 px-4 w-[400px] py-1 rounded-sm"
                type="text"
              />
            </div>

            <div>
              <span>Cost</span>
              <br />
              <input
              required
                value={cost}
                onChange={(e) => {
                  setcost(e.target.value);
                }}
                className="text-left border-1 px-4 w-[400px] py-1 rounded-sm"
                type="text"
                placeholder="0"
              />
            </div>
          </div>

          <button
            onClick={() => {
              check();
            }}
            className="mt-3 text-xl font-semibold border-1 px-5 py-1 bg-sky-600 text-white rounded-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
