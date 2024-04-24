import React, { useState } from "react";
import ExpensCard from "./ExpensCard";

const Main = () => {
  const balance = 2000;
  const [expense, setExpense] = useState(0);
  const [name, setName] = useState("");
  const [cost, setCost] = useState();

  const [expenseTrackerList, setExpenseTrackerList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(cost);
    const newExpense = {
      index: expenseTrackerList.length,
      name: name,
      cost: cost,
    };
    setExpenseTrackerList([...expenseTrackerList, newExpense]);
    setExpense((prev) => prev + Number(newExpense.cost));
    setName("");
    setCost("");
  };

  const handleDelete = (name, cost) => {
    setExpenseTrackerList(
      expenseTrackerList.filter((item) => item.name !== name)
    );
    setExpense((prev) => prev - cost);
  };

  console.log(expenseTrackerList);

  return (
    <>
      <div className="header">
        <h1>Budget Planner</h1>
      </div>
      <div className="tracker-row">
        <input type="text" readOnly placeholder="Budget: Rs.2000" />
        <input
          type="text"
          readOnly
          placeholder={`Remaining: ${balance - expense}`}
        />
        <input
          type="text"
          readOnly
          placeholder={`Spent so for : Rs.${expense}`}
        />
      </div>
      <h3>Add Expenses</h3>
      <form className="inputExpense">
        <div className="rowInput">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="rowInput">
          <label>Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <span className="btn" onClick={handleForm}>
          Submit
        </span>
      </form>

      <ExpensCard data={expenseTrackerList} handleDelete={handleDelete} />
    </>
  );
};

export default Main;
