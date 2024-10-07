import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react"
import Search from "./Pages/Search"
import Account from './Components/Account'
import Settings from './Components/Settings'
import Orders from "./Components/Orders"

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
          <Route path="/account" element= {<Account/>} />
          <Route path="/settings" element= {<Settings/>} />
          <Route path="/orders" element= {<Orders/>} />
          <Route path="/search" element= {<Search/>}/>
          <Route path="/menu" element= {<Menu/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
