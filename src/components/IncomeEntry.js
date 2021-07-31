import React from "react";

const IncomeEntry = ({ text, amount }) => {
  return (
    <div className="income">
      <li className="income-item">{text}</li>
      <li className="income-item">${amount}</li>
    </div>
  );
};

export default IncomeEntry;
