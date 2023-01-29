import { useState } from "react"
import MyForm from "./assets/components/Form/index"
import MyList from "./assets/components/List/index"
import MyCard from "./assets/components/Card/index"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
])

  return (
    <div className="App">
      <MyForm/>
      <MyList/>
    </div>
  )
}

export default App
