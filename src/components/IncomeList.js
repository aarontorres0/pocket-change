import React from "react";
// Import Components
import Entry from "./Entry";

const IncomeList = ({ todos }) => {
  return (
    <div className="income-container">
      <ul className="income-list">
        {todos.map((entry) => (
          <Entry />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
