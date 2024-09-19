import React, {useState} from 'react' 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
    <Route path="/Search" element={Search} />
    </Routes>
    </Router>
    
    </>
  )
}

export default App
