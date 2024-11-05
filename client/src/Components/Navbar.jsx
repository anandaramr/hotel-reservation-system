import { Link } from "react-router-dom"
import AuthContext from "../../Auth/AuthContext.jsx"
import { useContext, useEffect } from "react"
import { useState } from "react"
import Dialog from "./Dialog.jsx"

function Navbar() {

    const { user, isLoading, authorize, logout} = useContext(AuthContext)
    const [ showMenu, setShowMenu ] = useState(false)
    const [ showDialog, setShowDialog ] = useState(false)

    useEffect(()=>{
        authorize()
    }, [])

    return (
        <div className="sticky top-0 bg-black bg-opacity-10">
            <Dialog show={showDialog} setShow={setShowDialog} action={"Logout"} submit={logout} msg={"Are you sure you want logout?"} />
            
            <div className="flex flex-row justify-between px-5 py-4 select-none">
                <Link to = "/">
                    <p className="font-sora text-5xl text-white font-semibold">Serene</p>
                </Link>

                <div className="flex flex-row  font-sora items-center gap-3 font-medium">
                    {!user && <Link to={`/login${window.location.pathname=='/' ? '' : '?redirect=' + window.location.pathname + window.location.search}`} className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-black hover:text-white rounded-md`}><span>Login</span></Link>}
                    {!user && <Link to={`/signup${window.location.pathname=='/' ? '' : '?redirect=' + window.location.pathname + window.location.search}`} className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 bg-white hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-white hover:border-black hover:text-white rounded-lg`}>Sign Up</Link>}
                    {!isLoading && user && <span onClick={() => setShowMenu(show => !show)} className="material-symbols-outlined [font-variation-settings:'FILL'_1] text-white text-4xl hover:text-cyan-200 cursor-pointer duration-300">account_circle</span>}
                    {!isLoading && user && <div className={`fixed top-0 w-[15%] ${showMenu ? "right-0" : "-right-[15%]"} bg-white flex flex-col text-xl gap-7 py-8 px-5 z-50 min-h-svh duration-500 ease-in-out`}>
                        <Link to="/account" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">person</span>Account</Link>
                        <Link to="/orders" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">package_2</span>Orders</Link>
                        <Link to="/menu" className="hover:bg-rose-100 p-3 rounded-lg flex items-center gap-2 px-7 "><span className="material-symbols-outlined">restaurant</span>Menu</Link>
                        <p onClick={() => { setShowMenu(false); setShowDialog(true) }} className=" hover:bg-rose-100 p-3 px-7 rounded-lg flex items-center gap-2">
                            <span  className="material-symbols-outlined">logout</span>Logout
                        </p>
                        <p onClick={() => setShowMenu(show => !show)} className=" hover:bg-rose-100 p-3 px-7 rounded-lg flex items-center gap-2"><span  className="material-symbols-outlined">close</span>Close</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar