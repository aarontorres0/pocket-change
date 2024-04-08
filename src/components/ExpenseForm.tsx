import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ExpenseFormProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  expenseBalance: number;
  setExpenseBalance: React.Dispatch<React.SetStateAction<number>>;
  setExpenseEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  setExpenseEntries,
  expenseBalance,
  setExpenseBalance,
  balance,
  setBalance,
}) => {
  const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(inputAmount);
    if (!inputText || !inputAmount || isNaN(amount) || amount <= 0) return;

    const newEntry: Entry = { text: inputText, amount, id: uuidv4() };

    setExpenseEntries((prevEntries) => [...prevEntries, newEntry]);

    const newExpenseBalance = expenseBalance + amount;
    setExpenseBalance(newExpenseBalance);
    setBalance(balance - amount);

    setInputText("");
    setInputAmount("");
  };

  return (
    <form onSubmit={submitHandler} className="form-control w-full mx-auto">
      <div className="input-group">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Input expense"
          className="input input-bordered w-full mb-4"
        />
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          placeholder="$"
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn btn-error text-white w-full">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
