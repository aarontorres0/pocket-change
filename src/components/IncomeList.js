import React from "react";
// Import Components
import Entry from "./Entry";

const IncomeList = ({ todos }) => {
  return (
    <div className="income-container">
      <ul className="income-list">
        {todos.map((entry) => (
          <Entry id={entry.id} text={entry.text} />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
