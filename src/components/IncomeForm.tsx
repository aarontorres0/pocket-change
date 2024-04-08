import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IncomeFormProps {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  incomeBalance: number;
  setIncomeBalance: React.Dispatch<React.SetStateAction<number>>;
  setIncomeEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const IncomeForm: React.FC<IncomeFormProps> = ({
  setIncomeEntries,
  incomeBalance,
  setIncomeBalance,
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

    setIncomeEntries((prevEntries) => [...prevEntries, newEntry]);

    const newIncomeBalance = incomeBalance + amount;
    setIncomeBalance(newIncomeBalance);
    setBalance(balance + amount);

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
          placeholder="Input income"
          className="input input-bordered w-full mb-4"
        />

        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          placeholder="$"
          className="input input-bordered w-full mb-4"
        />
        <button type="submit" className="btn btn-success text-white w-full">
          Add Income
        </button>
      </div>
    </form>
  );
};

export default IncomeForm;
