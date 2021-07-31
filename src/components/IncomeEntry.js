import React from "react";

const IncomeEntry = ({
  balance,
  setBalance,
  incomeBalance,
  setIncomeBalance,
  incomeEntries,
  setIncomeEntries,
  incomeEntry,
}) => {
  //Events
  /**
   * filer through each element id and if it matches the entry id then filter it
   * out to get rid of it
   */
  const deleteHandler = () => {
    setBalance(balance - incomeEntry.amount);
    setIncomeBalance(incomeBalance - incomeEntry.amount);
    setIncomeEntries(incomeEntries.filter((el) => el.id !== incomeEntry.id));
  };
  return (
    <div className="income">
      <li className="income-item">{incomeEntry.text}</li>
      <li className="income-item">${incomeEntry.amount}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default IncomeEntry;
