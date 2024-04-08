import React from "react";

interface ExpenseEntryProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  expenseBalance: number;
  setExpenseBalance: React.Dispatch<React.SetStateAction<number>>;
  expenseEntries: Entry[];
  setExpenseEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  expenseEntry: Entry;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const ExpenseEntry: React.FC<ExpenseEntryProps> = ({
  balance,
  setBalance,
  expenseBalance,
  setExpenseBalance,
  expenseEntries,
  setExpenseEntries,
  expenseEntry,
}) => {
  const deleteHandler = () => {
    setBalance(balance + expenseEntry.amount);
    setExpenseBalance(expenseBalance - expenseEntry.amount);
    setExpenseEntries(expenseEntries.filter((el) => el.id !== expenseEntry.id));
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
      <span>{expenseEntry.text}</span>
      <span>${expenseEntry.amount}</span>
      <button
        onClick={deleteHandler}
        className="btn btn-error text-white btn-xs"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseEntry;
