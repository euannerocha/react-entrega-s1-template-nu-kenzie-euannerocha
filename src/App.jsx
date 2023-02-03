import { useState } from "react"
import FormCard from "./assets/components/Form/index"
import MyList from "./assets/components/List/index"
import Card from "./assets/components/Card/index"

function App() {
  const [listTransactions, setListTransactions] = useState([])

  return (
    <div className="App">
      <FormCard/>
      <Card/>
    </div>
  )
}

export default App
