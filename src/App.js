import React, { useState } from "react";
import "./App.css";
//Import components
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [balance, setBalance] = useState(0);

  const [inputIncomeText, setInputIncomeText] = useState("");
  const [inputDollarText, setDollarInputText] = useState("");
  const [incomeEntries, setIncomeEntries] = useState([]);

  const [inputExpenseText, setInputExpenseText] = useState("");
  const [inputExpenseDollarText, setExpenseDollarInputText] = useState("");
  const [expenseEntries, setExpenseEntries] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Pocket Change</h1>
      </header>
      <div>
        <h2 className="budget">Total Leftover: ${balance}</h2>
      </div>
      <IncomeForm
        balance={balance}
        setBalance={setBalance}
        inputIncomeText={inputIncomeText}
        setInputIncomeText={setInputIncomeText}
        inputDollarText={inputDollarText}
        setDollarInputText={setDollarInputText}
        incomeEntries={incomeEntries}
        setIncomeEntries={setIncomeEntries}
      />
      <IncomeList incomeEntries={incomeEntries} />
      <ExpenseForm
        balance={balance}
        setBalance={setBalance}
        inputExpenseText={inputExpenseText}
        setInputExpenseText={setInputExpenseText}
        inputExpenseDollarText={inputExpenseDollarText}
        setExpenseDollarInputText={setExpenseDollarInputText}
        expenseEntries={expenseEntries}
        setExpenseEntries={setExpenseEntries}
      />
    </div>
  );
}

export default App;
