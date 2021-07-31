import React from "react";
// Import Components
import ExpenseEntry from "./ExpenseEntry";

const ExpenseList = ({ expenseEntries }) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expenseEntries.map((expenseEntry) => (
          <ExpenseEntry
            id={expenseEntry.id}
            text={expenseEntry.text}
            amount={expenseEntry.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
