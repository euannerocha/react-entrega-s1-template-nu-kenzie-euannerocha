import { useState } from "react"
import FormCard from "../../assets/components/Form"
import MyList from "../../assets/components/List/index"
import Header from "../../assets/components/Header/index"
import Total from "../../assets/components/TotalValue"
import { v4 as uuidv4 } from 'uuid'
import '../../assets/components/Form/form.css'

function Dashboard({ setPage }) {

  const [transactionList, setTransactionList] = useState([]);


  const addTransaction = (transaction) => {
    const newTransaction = { ...transaction, id: uuidv4() }
    setTransactionList([...transactionList, newTransaction]);
  }

  const removeTransaction = (transactionId) => {
    const newList = transactionList.filter(transaction => transaction.id !== transactionId);
    setTransactionList(newList)
  }

  const total = transactionList.reduce((acc, transction) => {
    if (transction.type === "Entrada") {
      return acc + Number(transction.value)
    } else {
      return acc - Number(transction.value)
    }
  }, 0)



  return (
      <div className="App">
        <Header setPage={setPage}/>
        <FormCard addTransaction={addTransaction} />
        <Total value={total} />
        <MyList listTransactions={transactionList} removeTransaction={removeTransaction} />
      </div>
  )
}

export default Dashboard
