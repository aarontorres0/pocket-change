import React from "react";
// Import Components
import IncomeEntry from "./IncomeEntry";

const IncomeList = ({ incomeEntries, setIncomeEntries }) => {
  return (
    <div className="income-container">
      <ul className="income-list">
        {incomeEntries.map((incomeEntry) => (
          <IncomeEntry
            id={incomeEntry.id}
            text={incomeEntry.text}
            amount={incomeEntry.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
