import React from "react";

const ExpenseEntry = ({ text, amount }) => {
  return (
    <div className="expense">
      <li className="expense-item">{text}</li>
      <li className="expense-item">${amount}</li>
    </div>
  );
};

export default ExpenseEntry;
