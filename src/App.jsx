import { useState } from "react"
import FormCard from "./assets/components/Form/index"
import MyList from "./assets/components/List/index"
import Header from "./assets/components/Header/index"
import Total from "./assets/components/TotalValue" 
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [transactionList, setTransactionList] = useState([]);
  

  const addTransaction = (transaction) => {
    const newTransaction = { ... transaction, id:uuidv4() }
    setTransactionList([...transactionList, newTransaction]);
  }

  const removeTransaction = (transactionId) => {
    const newList = transactionList.filter(transaction => transaction.id !== transactionId);
    setTransactionList(newList)
  }

  const total = transactionList.reduce((acc, transction) => {
    if(transction.type === "entrada"){
      return acc + Number(transction.value)
    } else {
      return acc - Number(transction.value)
    }
  }, 0)

  

  return (
    <div className="App">
      <Header />
      <FormCard addTransaction={addTransaction} />
      <MyList listTransactions={transactionList} removeTransaction={removeTransaction} />
      <Total value={total} />
    </div>
  )
}

export default App
