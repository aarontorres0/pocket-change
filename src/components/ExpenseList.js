import React from "react";
// Import Components
import Entry from "./Entry";

const ExpenseList = ({ expenseEntries }) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expenseEntries.map((entry) => (
          <Entry id={entry.id} text={entry.text} amount={entry.amount} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
