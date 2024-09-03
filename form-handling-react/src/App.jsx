import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RegistrationForm />
    <FormikForm />
    </>
  )
}

export default App
