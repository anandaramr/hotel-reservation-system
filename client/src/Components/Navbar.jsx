import { Link } from "react-router-dom"
import AuthContext from "../../Auth/AuthContext.jsx"
import { useContext, useEffect } from "react"
import { useState } from "react"

function Navbar() {
    const { user, isLoading, authorize, logout } = useContext(AuthContext)
    const [hide,setHide] = useState("64")
    const [hideIcon,setHideIcon] = useState("")
    useEffect(()=>{
        authorize()
    }, [])

    return(
        <div className="sticky top-0">
            <div className="flex flex-row justify-between p-5 select-none">

                <Link to = "/">
                    <p className="font-sora text-5xl text-white font-semibold">Serene</p>
                </Link>
                <div className="flex flex-row  font-sora items-center gap-3 font-medium">
                    {!user && <Link to="/login" className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-black hover:text-white rounded-md`}><span>Login</span></Link>}
                    {!user && <Link to="/signup" className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 bg-white hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-white hover:border-black hover:text-white rounded-lg`}>Sign Up</Link>}
                    {!isLoading && user && <span onClick={()=>{setHide("0"); setHideIcon("hidden")}} className={`${hideIcon} material-symbols-outlined [font-variation-settings:'FILL'_1] text-white text-4xl`}>account_circle</span>}
                    {/* {!isLoading && user && <button onClick={logout} className="text-white">Logout</button> } */}
                    <div className={`fixed top-0 right-0 bg-white flex flex-col text-xl gap-7 py-8 px-5 z-50 min-h-svh o translate-x-${hide} duration-300`}>
                        <Link to="/profile" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">person</span>Account</Link>
                        <Link to="/profile" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">settings</span>Settings</Link>
                        <Link to="/profile" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">package_2</span>Orders</Link>
                        <p onClick={()=>{setHide("64"); setHideIcon("")}} className=" hover:bg-rose-100 p-3 px-7 rounded-lg flex items-center gap-2"><span  className="material-symbols-outlined">close</span>Close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar