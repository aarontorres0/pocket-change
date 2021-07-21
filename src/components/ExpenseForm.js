import React from "react";

const ExpenseForm = ({
  balance,
  setBalance,
  inputExpenseText,
  setInputExpenseText,
  inputExpenseDollar,
  setExpenseDollarInput,
  expenseTodos,
  setExpenseTodos,
}) => {
  const inputExpenseTextHandler = (e) => {
    setInputExpenseText(e.target.value);
  };
  const inputExpenseDollarHandler = (e) => {
    setExpenseDollarInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setExpenseTodos([
      ...expenseTodos,
      {
        text: inputExpenseText,
        amount: parseInt(inputExpenseDollar),
        id: Math.random() * 100,
      },
    ]);
    // maybe I should do setBalance here instead of balanceHandler. button onclick calls submithandler
    setBalance(balance - parseInt(inputExpenseDollar));
    setInputExpenseText("");
    setExpenseDollarInput("");
  };
  const balanceHandler = (e) => {
    setBalance(12);
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
        value={inputExpenseDollar}
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
