import { useState } from "react"
import MyForm from "./assets/components/Form/formComponent"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
])

  return (
    <div className="App">
      <MyForm/>
    </div>
  )
}

export default App
