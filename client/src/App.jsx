import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, useEffect, Suspense } from "react"

const Signup = lazy(() => import("./Pages/Signup"))
const Login = lazy(() => import("./Pages/Login"))
const Home = lazy(() => import("./Pages/Home"))
const Profile = lazy(() => import("./Pages/Profile"))
const Menu = lazy(() => import("./Pages/Menu"))
const Search = lazy(() => import("./Pages/Search"))

function App() {

  useEffect(()=>{
    if(localStorage.dark == 'true') document.documentElement.classList.add('dark')
  })

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/profile" element= {<Profile/>} />
            <Route path="/search" element= {<Search/>}/>
            <Route path="/menu" element= {<Menu/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center h-svh gap-3 dark:bg-gray-950'>
			<img className='saturate-[0.5]' src="/logo.svg" height={50} width={50} />
			<span className='text-gray-600 font-medium text-3xl animate-pulse dark:text-gray-300'>Loading...</span>
		</div>
  )
}

export default App
