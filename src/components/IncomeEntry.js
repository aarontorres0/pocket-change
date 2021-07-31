import React from "react";

const IncomeEntry = ({
  balance,
  setBalance,
  incomeBalance,
  setIncomeBalance,
  incomeEntries,
  setIncomeEntries,
  incomeEntry,
  text,
  amount,
}) => {
  //Events
  /**
   * filer through each element id and if it matches the entry id then filter it
   * out to get rid of it
   */
  const deleteHandler = () => {
    setBalance(balance - amount);
    setIncomeBalance(incomeBalance - amount);
    setIncomeEntries(incomeEntries.filter((el) => el.id !== incomeEntry.id));
  };
  return (
    <div className="income">
      <li className="income-item">{text}</li>
      <li className="income-item">${amount}</li>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default IncomeEntry;
