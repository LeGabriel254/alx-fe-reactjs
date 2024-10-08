import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from "./components/RecipeDetail"
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router className="bg-gradient-to-b from-beige-200 to-green-900 h-screen flex flex-col items-center justify-between">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/:id" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  )
}

export default App;