import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Singup from './components/Singup'
import Login from './components/Login'
import TotalTransactionInput from './components/Transaction/TotalTransactionInput'
import AllTransaction from './components/Transaction/AllTransaction'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/total" element={<TotalTransactionInput />} />
          <Route path="/totalDisplay" element={<AllTransaction />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App