import React from "react";
// Import Components
import Entry from "./Entry";

const IncomeList = ({ incomeEntries }) => {
  return (
    <div className="income-container">
      <ul className="income-list">
        {incomeEntries.map((entry) => (
          <Entry id={entry.id} text={entry.text} amount={entry.amount} />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
