import React from "react";
// Import Components
import ExpenseEntry from "./ExpenseEntry";

const ExpenseList = ({
  balance,
  setBalance,
  expenseBalance,
  setExpenseBalance,
  expenseEntries,
  setExpenseEntries,
}) => {
  return (
    <div className="expense-container">
      <ul className="expense-list">
        {expenseEntries.map((expenseEntry) => (
          <ExpenseEntry
            balance={balance}
            setBalance={setBalance}
            expenseBalance={expenseBalance}
            setExpenseBalance={setExpenseBalance}
            expenseEntries={expenseEntries}
            setExpenseEntries={setExpenseEntries}
            expenseEntry={expenseEntry}
            key={expenseEntry.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
