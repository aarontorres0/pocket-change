import React from "react";

const ExpenseForm = ({
  balance,
  setBalance,
  expenseBalance,
  setExpenseBalance,
  inputExpenseText,
  setInputExpenseText,
  inputExpenseDollarText,
  setExpenseDollarInputText,
  expenseEntries,
  setExpenseEntries,
}) => {
  const inputExpenseTextHandler = (e) => {
    setInputExpenseText(e.target.value);
  };
  const inputExpenseDollarHandler = (e) => {
    setExpenseDollarInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setExpenseEntries([
      ...expenseEntries,
      {
        text: inputExpenseText,
        amount: parseInt(inputExpenseDollarText),
        id: Math.random() * 100,
      },
    ]);
    // maybe I should do setBalance here instead of balanceHandler. button onclick calls submithandler
    setBalance(balance - parseInt(inputExpenseDollarText));
    setExpenseBalance(expenseBalance + parseInt(inputExpenseDollarText));
    setInputExpenseText("");
    setExpenseDollarInputText("");
  };

  return (
    <form>
      <input
        value={inputExpenseText}
        onChange={inputExpenseTextHandler}
        type="text"
        className="expense-input"
        placeholder="Input an expense"
      ></input>
      <input
        value={inputExpenseDollarText}
        onChange={inputExpenseDollarHandler}
        type="number"
        className="expense-input-value"
        placeholder="$"
      ></input>
      <button onClick={submitHandler} className="expense-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default ExpenseForm;
