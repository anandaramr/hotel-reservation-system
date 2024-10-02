import { Link } from "react-router-dom"
import AuthContext from "../../Auth/AuthContext.jsx"
import { useContext, useEffect } from "react"

function Navbar() {
    const { user, isLoading, authorize, logout } = useContext(AuthContext)

    useEffect(()=>{
        authorize()
    }, [])

    return(
        <div className="sticky top-0">
            <div className="flex flex-row justify-between p-5 select-none">
                <p className="font-sora text-5xl text-white font-semibold">Serene</p>
                <div className="flex flex-row  font-sora items-center gap-3 font-medium">
                    {!user && <Link to="/login" className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-black hover:text-white rounded-md`}><span>Login</span></Link>}
                    {!user && <Link to="/signup" className={`${isLoading && 'pointer-events-none bg-gray-300 text-transparent animate-pulse'} duration-150 bg-white hover:bg-black ${!isLoading ? 'border-2' : 'border-0'} flex items-center px-4 h-fit py-1 border-white hover:border-black hover:text-white rounded-lg`}>Sign Up</Link>}
                    {!isLoading && user && <Link to="/profile"><span className="material-symbols-outlined [font-variation-settings:'FILL'_1] text-white text-4xl">account_circle</span></Link>}
                    {!isLoading && user && <button onClick={logout} className="text-white">Logout</button> }
                </div>
            </div>
        </div>
    )
}
export default Navbar