import { useState } from "react"
import Dashboard from "./Pages/Dashboard"
import HomePage from "./Pages/HomePage"

function App() {

  const [page, setPage] = useState('homePage')
  return (
    <div className="App">
      {page == 'homePage' ? <HomePage setPage={setPage}/> : <Dashboard setPage={setPage}/>}
    </div>
  )
}

export default App
