import React, { useState, useEffect } from "react";
import "./index.css";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

interface Entry {
  text: string;
  amount: number;
  id: string;
}

const App: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [incomeBalance, setIncomeBalance] = useState<number>(0);
  const [expenseBalance, setExpenseBalance] = useState<number>(0);

  const [incomeEntries, setIncomeEntries] = useState<Entry[]>([]);
  const [expenseEntries, setExpenseEntries] = useState<Entry[]>([]);

  useEffect(() => {
    setBalance(incomeBalance - expenseBalance);
  }, [incomeBalance, expenseBalance]);

  return (
    <div className="App bg-gray-100 min-h-screen pt-5 px-4 md:px-0">
      <div className="container mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Pocket Change</h1>
        </header>

        <div className="mb-10">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Total Balance</h2>
              <p className="text-3xl">{balance < 0 ? `-$${Math.abs(balance).toFixed(2)}` : `$${balance.toFixed(2)}`}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="card bg-base-100 shadow-xl mb-5">
              <div className="card-body">
                <h2 className="card-title">Total Income: ${incomeBalance.toFixed(2)}</h2>
              </div>
            </div>
            <IncomeForm
              balance={balance}
              setBalance={setBalance}
              incomeBalance={incomeBalance}
              setIncomeBalance={setIncomeBalance}
              setIncomeEntries={setIncomeEntries}
            />
            <IncomeList
              balance={balance}
              setBalance={setBalance}
              incomeBalance={incomeBalance}
              setIncomeBalance={setIncomeBalance}
              incomeEntries={incomeEntries}
              setIncomeEntries={setIncomeEntries}
            />
          </div>

          <div>
            <div className="card bg-base-100 shadow-xl mb-5">
              <div className="card-body">
                <h2 className="card-title">Total Expenses: ${expenseBalance.toFixed(2)}</h2>
              </div>
            </div>
            <ExpenseForm
              balance={balance}
              setBalance={setBalance}
              expenseBalance={expenseBalance}
              setExpenseBalance={setExpenseBalance}
              setExpenseEntries={setExpenseEntries}
            />
            <ExpenseList
              balance={balance}
              setBalance={setBalance}
              expenseBalance={expenseBalance}
              setExpenseBalance={setExpenseBalance}
              expenseEntries={expenseEntries}
              setExpenseEntries={setExpenseEntries}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
