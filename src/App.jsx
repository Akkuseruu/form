import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormRegister from './components/FormRegister'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FormRegister/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
