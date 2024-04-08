import React from "react";

interface IncomeEntryProps {
  incomeEntry: Entry;
  setIncomeEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  incomeBalance: number;
  setIncomeBalance: React.Dispatch<React.SetStateAction<number>>;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const IncomeEntry: React.FC<IncomeEntryProps> = ({
  incomeEntry,
  setIncomeEntries,
  incomeBalance,
  setIncomeBalance,
  setBalance,
}) => {
  const deleteHandler = () => {
    setIncomeEntries((prev) =>
      prev.filter((entry) => entry.id !== incomeEntry.id)
    );

    const newIncomeBalance = incomeBalance - incomeEntry.amount;
    setIncomeBalance(newIncomeBalance);
    setBalance((prevBalance) => prevBalance - incomeEntry.amount);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
      <span>{incomeEntry.text}</span>
      <span>${incomeEntry.amount}</span>
      <button
        onClick={deleteHandler}
        className="btn btn-error text-white btn-xs"
      >
        Delete
      </button>
    </div>
  );
};

export default IncomeEntry;
