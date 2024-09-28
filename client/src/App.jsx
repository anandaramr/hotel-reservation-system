import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react"

function App() {

  useEffect(()=>{
    if(localStorage.dark == 'true') document.documentElement.classList.add('dark')
  })

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
