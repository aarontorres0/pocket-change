import React from "react";

const ExpenseEntry = ({
  balance,
  setBalance,
  expenseBalance,
  setExpenseBalance,
  expenseEntries,
  setExpenseEntries,
  expenseEntry,
  text,
  amount,
}) => {
  //Events
  /**
   * filer through each element id and if it matches the entry id then filter it
   * out to get rid of it
   */
  const deleteHandler = () => {
    setBalance(balance + amount);
    setExpenseBalance(expenseBalance - amount);
    setExpenseEntries(expenseEntries.filter((el) => el.id !== expenseEntry.id));
  };
  return (
    <div className="expense">
      <li className="expense-item">{text}</li>
      <li className="expense-item">${amount}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ExpenseEntry;
