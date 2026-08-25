import React, { useState } from "react";

const ExpenseTracker = () => {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState([]);


  // Add Expense
  const handleSubmit = (e) => {

    e.preventDefault();

    if (name === "" || amount === "" || date === "") {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category,
      date: date
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };


  // Delete Expense
  const deleteExpense = (id) => {

    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );

  };


  // Calculate Total
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );


  return (

    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">


        {/* Header */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Expense Tracker
          </h1>

          <p className="text-gray-500 mt-2">
            Track your daily expenses
          </p>

        </div>


        {/* Summary */}

        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="bg-black text-white p-5 rounded-xl">

            <p className="text-gray-300">
              Total Expense
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{total}
            </h2>

          </div>


          <div className="bg-gray-200 p-5 rounded-xl">

            <p className="text-gray-500">
              Total Items
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {expenses.length}
            </h2>

          </div>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mb-8"
        >

          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Expense name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg outline-none"
            />


            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg outline-none"
            />


            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg outline-none"
            >

              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Other">Other</option>

            </select>


            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg outline-none"
            />

          </div>


          <button
            type="submit"
            className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold active:scale-95"
          >
            Add Expense
          </button>

        </form>


        {/* Expense List */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            All Expenses
          </h2>


          {expenses.length === 0 ? (

            <div className="text-center py-10 text-gray-500">
              No expenses added yet.
            </div>

          ) : (

            expenses.map((expense) => (

              <div
                key={expense.id}
                className="flex justify-between items-center bg-gray-50 border p-4 rounded-lg mb-3"
              >

                <div>

                  <h3 className="text-lg font-bold text-gray-800">
                    {expense.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {expense.category} • {expense.date}
                  </p>

                </div>


                <div className="flex items-center gap-4">

                  <p className="font-bold text-lg">
                    ₹{expense.amount}
                  </p>


                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg active:scale-95"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );
};

export default ExpenseTracker;