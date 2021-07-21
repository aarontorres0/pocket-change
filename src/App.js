import React, { useState } from "react";
import "./App.css";
//Import components
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [balance, setBalance] = useState(0);

  const [inputText, setInputText] = useState("");
  const [inputDollar, setDollarInput] = useState("");
  const [todos, setTodos] = useState([]);

  const [inputExpenseText, setInputExpenseText] = useState("");
  const [inputExpenseDollar, setExpenseDollarInput] = useState("");
  const [expenseTodos, setExpenseTodos] = useState([]);

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
        inputText={inputText}
        setInputText={setInputText}
        inputDollar={inputDollar}
        setDollarInput={setDollarInput}
        todos={todos}
        setTodos={setTodos}
      />
      <IncomeList todos={todos} />
      <ExpenseForm
        balance={balance}
        setBalance={setBalance}
        inputExpenseText={inputExpenseText}
        setInputExpenseText={setInputExpenseText}
        inputExpenseDollar={inputExpenseDollar}
        setExpenseDollarInput={setExpenseDollarInput}
        expenseTodos={expenseTodos}
        setExpenseTodos={setExpenseTodos}
      />
    </div>
  );
}

export default App;
