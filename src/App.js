import React, { useState } from "react";
import "./App.css";
//Import components
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [balance, setBalance] = useState(0);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [expenseBalance, setExpenseBalance] = useState(0);

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
        <h2 className="budget">Leftover balance: ${balance}</h2>
      </div>
      <IncomeForm
        balance={balance}
        setBalance={setBalance}
        incomeBalance={incomeBalance}
        setIncomeBalance={setIncomeBalance}
        inputIncomeText={inputIncomeText}
        setInputIncomeText={setInputIncomeText}
        inputDollarText={inputDollarText}
        setDollarInputText={setDollarInputText}
        incomeEntries={incomeEntries}
        setIncomeEntries={setIncomeEntries}
      />
      <div>
        <h3>Income: ${incomeBalance}</h3>
      </div>
      <IncomeList
        balance={balance}
        setBalance={setBalance}
        incomeBalance={incomeBalance}
        setIncomeBalance={setIncomeBalance}
        incomeEntries={incomeEntries}
        setIncomeEntries={setIncomeEntries}
      />
      <ExpenseForm
        balance={balance}
        setBalance={setBalance}
        expenseBalance={expenseBalance}
        setExpenseBalance={setExpenseBalance}
        inputExpenseText={inputExpenseText}
        setInputExpenseText={setInputExpenseText}
        inputExpenseDollarText={inputExpenseDollarText}
        setExpenseDollarInputText={setExpenseDollarInputText}
        expenseEntries={expenseEntries}
        setExpenseEntries={setExpenseEntries}
      />
      <div>
        <h3>Expenses: ${expenseBalance}</h3>
      </div>
      <ExpenseList
        balance={balance}
        setBalance={setBalance}
        expenseBalance={expenseBalance}
        setExpenseBalance={setExpenseBalance}
        expenseEntries={expenseEntries}
        setExpenseEntries={setExpenseEntries}
      />
    </div>
  );
}

export default App;
