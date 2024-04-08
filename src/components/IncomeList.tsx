import React from "react";
import IncomeEntry from "./IncomeEntry";

interface IncomeListProps {
  incomeEntries: Entry[];
  setIncomeEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  incomeBalance: number;
  setIncomeBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const IncomeList: React.FC<IncomeListProps> = ({
  incomeEntries,
  setIncomeEntries,
  incomeBalance,
  setIncomeBalance,
  setBalance,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl my-4">
      <div className="card-body">
        <h2 className="card-title">Income Entries:</h2>
        <div className="space-y-2">
          {incomeEntries.map((entry) => (
            <IncomeEntry
              key={entry.id}
              incomeEntry={entry}
              setIncomeEntries={setIncomeEntries}
              incomeBalance={incomeBalance}
              setIncomeBalance={setIncomeBalance}
              setBalance={setBalance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeList;
