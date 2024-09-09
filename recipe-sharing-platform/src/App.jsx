import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gradient-to-b from-beige-200 to-green-900 h-screen flex flex-col items-center justify-between">
   <HomePage />
   <Header />
    </div>
  )
}

export default App
