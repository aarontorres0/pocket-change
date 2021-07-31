import React from "react";
// Import Components
import IncomeEntry from "./IncomeEntry";

const IncomeList = ({
  balance,
  setBalance,
  incomeBalance,
  setIncomeBalance,
  incomeEntries,
  setIncomeEntries,
}) => {
  return (
    <div className="income-container">
      <ul className="income-list">
        {incomeEntries.map((incomeEntry) => (
          <IncomeEntry
            balance={balance}
            setBalance={setBalance}
            incomeBalance={incomeBalance}
            setIncomeBalance={setIncomeBalance}
            incomeEntries={incomeEntries}
            setIncomeEntries={setIncomeEntries}
            incomeEntry={incomeEntry}
            key={incomeEntry.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
