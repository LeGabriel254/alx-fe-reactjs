import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <routes>
    <route path="/" element={<Home />} />
    <route path="/" element={<About />} />
    <route path="/" element={<Contact />} />
    <route path="/" element={<Services />} />
   </routes>
   </BrowserRouter>
   
  )
}

export default App
