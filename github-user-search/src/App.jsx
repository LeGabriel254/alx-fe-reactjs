import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Route path="/Search" components={Search} />
    </Router>
    
    </>
  )
}

export default App
