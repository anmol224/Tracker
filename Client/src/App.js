
import './App.css';
import Header from './Components/Header'
import Balance from './Components/Balance';
import IncomeExpense from './Components/Income_Expense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
const App=() =>{
  return(
    <>
    <GlobalProvider>
      <Header></Header>
      <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
      </GlobalProvider>
    </>
  )
}

export default App;
