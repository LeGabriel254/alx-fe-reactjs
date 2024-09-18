import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import './services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Route path="/search" services={search} />
    </Router>
    
    </>
  )
}

export default App
