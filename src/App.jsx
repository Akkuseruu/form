import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FormRegister from './components/FormRegister'
import FormLogin from './components/FormLogin';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FormRegister/>}></Route>
        <Route path='/login' element={<FormLogin/>}></Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
