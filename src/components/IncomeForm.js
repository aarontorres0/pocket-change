import React from "react";

const IncomeForm = ({
  balance,
  setBalance,
  incomeBalance,
  setIncomeBalance,
  inputIncomeText,
  setInputIncomeText,
  inputDollarText,
  setDollarInputText,
  incomeEntries,
  setIncomeEntries,
}) => {
  const inputTextHandler = (e) => {
    setInputIncomeText(e.target.value);
  };
  const inputDollarTextHandler = (e) => {
    setDollarInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIncomeEntries([
      ...incomeEntries,
      {
        text: inputIncomeText,
        amount: parseInt(inputDollarText),
        id: Math.random() * 100,
      },
    ]);
    // maybe I should do setBalance here instead of balanceHandler. button onclick calls submithandler
    setBalance(balance + parseInt(inputDollarText));
    setIncomeBalance(incomeBalance + parseInt(inputDollarText));
    setInputIncomeText("");
    setDollarInputText("");
  };

  return (
    <form>
      <input
        value={inputIncomeText}
        onChange={inputTextHandler}
        type="text"
        className="income-input"
        placeholder="Input income"
      ></input>
      <input
        value={inputDollarText}
        onChange={inputDollarTextHandler}
        type="number"
        className="income-input-value"
        placeholder="$"
      ></input>
      <button onClick={submitHandler} className="income-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default IncomeForm;
