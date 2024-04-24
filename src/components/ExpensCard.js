import React from "react";

const ExpensCard = ({ data, handleDelete }) => {
  return (
    <div className="cardContainer">
      <h3>Expenses</h3>
      {!data.length && (
        <h1 style={{ color: "grey", textAlign: "center" }}>
          Add Data To List...
        </h1>
      )}
      {data.map((item, index) => (
        <div className="card" key="index">
          <span>{item.name}</span>
          <span>{item.cost}</span>
          <button onClick={() => handleDelete(item.name, item.cost)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default ExpensCard;
