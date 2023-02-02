import { useState } from "react"
import MyForm from "./assets/components/Form/index"
import MyList from "./assets/components/List/index"
import MyCard from "./assets/components/Card/index"

function App() {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      <MyForm/>
      <MyList/>
    </div>
  )
}

export default App
