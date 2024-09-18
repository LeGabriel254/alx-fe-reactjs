import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import search from'./services/search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Route path="/search" search={search} />
    </Router>
    
    </>
  )
}

export default App
