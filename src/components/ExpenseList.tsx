import React from "react";
import ExpenseEntry from "./ExpenseEntry";

interface ExpenseListProps {
  expenseEntries: Entry[];
  setExpenseEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  expenseBalance: number;
  setExpenseBalance: React.Dispatch<React.SetStateAction<number>>;
}

interface Entry {
  id: string;
  text: string;
  amount: number;
}

const ExpenseList: React.FC<ExpenseListProps> = ({
  expenseEntries,
  setExpenseEntries,
  balance,
  setBalance,
  expenseBalance,
  setExpenseBalance,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl my-4">
      <div className="card-body">
        <h2 className="card-title">Expense Entries:</h2>
        <div className="space-y-2">
          {expenseEntries.map((expenseEntry) => (
            <ExpenseEntry
              key={expenseEntry.id}
              expenseEntry={expenseEntry}
              expenseEntries={expenseEntries}
              setExpenseEntries={setExpenseEntries}
              balance={balance}
              setBalance={setBalance}
              expenseBalance={expenseBalance}
              setExpenseBalance={setExpenseBalance}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
