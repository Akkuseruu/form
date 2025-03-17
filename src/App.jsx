import { useState } from 'react'
import './App.css'
import FormRegister from './components/FormRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormRegister/>
    </>
  )
}

export default App
