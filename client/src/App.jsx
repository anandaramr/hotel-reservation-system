import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react"

function App() {

  useEffect(()=>{
    if(localStorage.dark == 'true') document.documentElement.classList.add('dark')
  })

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/profile" element= {<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
