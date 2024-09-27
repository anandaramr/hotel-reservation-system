import Signup from "./Pages/Signup"
import Login from './Pages/Login'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

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
