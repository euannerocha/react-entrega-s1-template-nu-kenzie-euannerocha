import { useState } from "react"
import FormCard from "./assets/components/Form/index"
import MyList from "./assets/components/List/index"

function App() {
  
 const [ listTransactions, setListTransactions ] = useState([])

function addTransactionsToList(newTransaction){
  setListTransactions([ ...listTransactions, newTransaction ])
}

  return (
    <div className="App">
      <FormCard addTransactionsToList={addTransactionsToList}/>
      <MyList listTransactions={listTransactions}/>
    </div>
  )
}

export default App
